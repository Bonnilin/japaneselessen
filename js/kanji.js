/* 漢字特訓頁面邏輯（kanji.html 共用樣板）：
   從網址 ?batch= 找出對應漢字批次，翻卡看讀音／部首／例詞 + 讀音小測驗 */
document.addEventListener('DOMContentLoaded', () => {
  const slug = new URLSearchParams(location.search).get('batch');
  const set = KANJI_SETS.find((s) => s.slug === slug);

  const notFoundEl = document.getElementById('batch-not-found');
  const contentEl = document.getElementById('batch-content');

  if (!set) {
    notFoundEl.style.display = 'block';
    contentEl.style.display = 'none';
    return;
  }

  document.title = `${set.title}｜ニホンゴ・クエスト`;
  document.getElementById('batch-level-badge').textContent = set.level;
  document.getElementById('batch-title').textContent = set.title;
  document.getElementById('batch-desc').textContent = set.desc;

  const gridEl = document.getElementById('kanji-grid');
  const quizBtn = document.getElementById('kanji-quiz-btn');
  const quizSection = document.getElementById('kanji-quiz');
  const gridSection = document.getElementById('kanji-grid-section');
  const backBtn = document.getElementById('kanji-back-btn');

  set.kanji.forEach((k) => {
    const tile = document.createElement('div');
    tile.className = 'kanji-tile';
    const examplesHtml = k.examples
      .map((ex) => `<div class="jp"><ruby>${ex.word}<rt>${ex.reading}</rt></ruby>　${ex.meaning}</div>`)
      .join('');
    tile.innerHTML = `
      <span class="sfx-corner">パキッ</span>
      <div class="char jp">${k.char}</div>
      <div class="hint">點一下查看讀音</div>
      <div class="detail">
        <div class="readings"><b>音讀</b> ${k.onyomi.join('、')}</div>
        <div class="readings"><b>訓讀</b> ${k.kunyomi.join('、')}</div>
        <div>部首：${k.radical}｜筆畫：${k.strokes}</div>
        <div>意思：${k.meaning}</div>
        <div class="kanji-examples">${examplesHtml}</div>
      </div>
    `;
    tile.addEventListener('click', () => tile.classList.toggle('revealed'));
    gridEl.appendChild(tile);
  });

  function buildKanjiQuiz() {
    const allExamples = [];
    set.kanji.forEach((k) => {
      k.examples.forEach((ex) => allExamples.push(ex));
    });
    const picked = shuffle(allExamples).slice(0, Math.min(8, allExamples.length));
    return picked.map((item) => {
      const distractors = shuffle(allExamples.filter((x) => x.reading !== item.reading))
        .slice(0, 3)
        .map((x) => x.reading);
      const options = shuffle([item.reading, ...distractors]);
      return {
        question: `「<span class="jp">${item.word}</span>」的正確讀音是？`,
        options,
        answer: options.indexOf(item.reading),
        explanation: `「${item.word}」讀作「${item.reading}」，意思是「${item.meaning}」。`
      };
    });
  }

  quizBtn.addEventListener('click', () => {
    gridSection.style.display = 'none';
    quizSection.style.display = 'block';
    runQuiz({
      container: document.getElementById('kanji-quiz-container'),
      questions: buildKanjiQuiz(),
      storageKey: `kanji_${set.slug}`
    });
  });

  backBtn.addEventListener('click', () => {
    quizSection.style.display = 'none';
    gridSection.style.display = 'block';
  });
});
