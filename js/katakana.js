/* 片假名頁面邏輯：50音表切換分類 + 點擊發音 + 小測驗，以及片假名單字閃卡 */
document.addEventListener('DOMContentLoaded', () => {
  const gridEl = document.getElementById('katakana-grid');
  const tabs = document.querySelectorAll('.kana-tab');
  const quizBtn = document.getElementById('katakana-quiz-btn');
  const quizSection = document.getElementById('katakana-quiz');
  const tableSection = document.getElementById('katakana-table-section');
  const backBtn = document.getElementById('katakana-back-btn');

  function renderGrid(category) {
    const rows = GOJUON_DATA[category];
    const cols = category === 'youon' ? 3 : 5;
    gridEl.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    gridEl.innerHTML = '';
    rows.forEach((row) => {
      row.forEach((cell) => {
        const div = document.createElement('div');
        if (!cell) {
          div.className = 'kana-cell empty';
        } else {
          div.className = 'kana-cell';
          div.setAttribute('data-speak', cell.kt);
          div.innerHTML = `
            <span class="kana">${cell.kt}</span>
            <span class="kata">${cell.k}</span>
            <span class="romaji">${cell.r}</span>
          `;
        }
        gridEl.appendChild(div);
      });
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      renderGrid(tab.dataset.category);
    });
  });

  renderGrid('seion');

  function flattenAll() {
    const all = [];
    ['seion', 'dakuten', 'handakuten', 'youon'].forEach((cat) => {
      GOJUON_DATA[cat].forEach((row) => {
        row.forEach((cell) => {
          if (cell) all.push(cell);
        });
      });
    });
    return all;
  }

  function buildKatakanaQuiz() {
    const all = flattenAll();
    const picked = shuffle(all).slice(0, 10);
    return picked.map((item) => {
      const distractors = shuffle(all.filter((x) => x.r !== item.r)).slice(0, 3).map((x) => x.r);
      const options = shuffle([item.r, ...distractors]);
      return {
        question: `<span style="font-size:2.2rem;">${item.kt}</span>　這個片假名怎麼唸？`,
        options,
        answer: options.indexOf(item.r),
        explanation: `正確讀音是「${item.r}」（平假名：${item.k}）。`
      };
    });
  }

  if (quizBtn) {
    quizBtn.addEventListener('click', () => {
      tableSection.style.display = 'none';
      quizSection.style.display = 'block';
      runQuiz({
        container: document.getElementById('katakana-quiz-container'),
        questions: buildKatakanaQuiz(),
        storageKey: 'katakana_quiz'
      });
    });
  }

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      quizSection.style.display = 'none';
      tableSection.style.display = 'block';
    });
  }

  initFlashcardDeck({
    dataList: KATAKANA_DATA,
    deckName: 'katakana_vocab',
    toCard: (w) => ({
      id: w.id,
      front: w.word,
      speak: w.word,
      pos: w.pos,
      meaning: w.meaning,
      example: w.example
    })
  });
});
