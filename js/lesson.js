/* 文法課程頁面邏輯（grammar.html 共用樣板）：
   從網址 ?slug= 找出對應課程，渲染規則／例句，並掛上測驗 */
document.addEventListener('DOMContentLoaded', () => {
  const slug = new URLSearchParams(location.search).get('slug');
  const lesson = GRAMMAR_LESSONS.find((l) => l.slug === slug);

  const notFoundEl = document.getElementById('lesson-not-found');
  const contentSection = document.getElementById('lesson-content');

  if (!lesson) {
    notFoundEl.style.display = 'block';
    contentSection.style.display = 'none';
    return;
  }

  document.title = `${lesson.title}｜ニホンゴ・クエスト`;
  document.getElementById('lesson-level-badge').textContent = lesson.level;
  document.getElementById('lesson-title').textContent = lesson.title;
  document.getElementById('lesson-intro').textContent = lesson.intro;

  const rulesSection = document.getElementById('rules-section');
  const rulesEl = document.getElementById('rules-list');
  if (lesson.rules && lesson.rules.length) {
    rulesSection.style.display = '';
    rulesEl.innerHTML = lesson.rules
      .map(
        (r) => `
        <div class="note-box">
          <strong>${r.group}</strong>
          <div class="jp" style="margin-top:0.3rem;">${r.examples.join('　｜　')}</div>
        </div>`
      )
      .join('');
  } else {
    rulesSection.style.display = 'none';
  }

  const usagesEl = document.getElementById('usages-list');
  usagesEl.innerHTML = lesson.usages
    .map(
      (u) => `
      <div class="sentence-card">
        <span class="badge">${u.pattern}</span>
        <p style="margin:0.6rem 0;">${u.meaning}</p>
        <div class="sentence-jp">
          <span class="jp">${u.example.jp}</span>
          <button type="button" class="speak-btn" data-speak="${u.example.jp}" title="播放發音">🔊</button>
        </div>
        <div class="sentence-translation">${u.example.zh}</div>
      </div>`
    )
    .join('');

  const quizBtn = document.getElementById('lesson-quiz-btn');
  const backBtn = document.getElementById('lesson-back-btn');
  const quizSection = document.getElementById('lesson-quiz-section');

  quizBtn.addEventListener('click', () => {
    contentSection.style.display = 'none';
    quizSection.style.display = 'block';
    runQuiz({
      container: document.getElementById('lesson-quiz-container'),
      questions: lesson.quiz,
      storageKey: `grammar_${lesson.slug}`
    });
  });

  backBtn.addEventListener('click', () => {
    quizSection.style.display = 'none';
    contentSection.style.display = 'block';
  });
});
