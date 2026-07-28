/* 文法課程頁面共用邏輯：渲染規則／例句 + 掛上測驗 */
function renderLesson({ lesson, quiz, storageKey, rulesElId, usagesElId, quizContainerId }) {
  const rulesEl = document.getElementById(rulesElId);
  rulesEl.innerHTML = lesson.rules
    .map(
      (r) => `
      <div class="note-box">
        <strong>${r.group}</strong>
        <div class="jp" style="margin-top:0.3rem;">${r.examples.join('　｜　')}</div>
      </div>`
    )
    .join('');

  const usagesEl = document.getElementById(usagesElId);
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
  const contentSection = document.getElementById('lesson-content');
  const quizSection = document.getElementById('lesson-quiz-section');

  quizBtn.addEventListener('click', () => {
    contentSection.style.display = 'none';
    quizSection.style.display = 'block';
    runQuiz({
      container: document.getElementById(quizContainerId),
      questions: quiz,
      storageKey
    });
  });

  backBtn.addEventListener('click', () => {
    quizSection.style.display = 'none';
    contentSection.style.display = 'block';
  });
}
