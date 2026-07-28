/* 通用選擇題測驗引擎：文法測驗、五十音測驗、漢字讀音測驗都共用這一份邏輯 */
function runQuiz({ container, questions, storageKey }) {
  let idx = 0;
  let score = 0;
  const total = questions.length;
  let progressEl, questionEl, optionsEl, feedbackEl, nextBtn;

  function buildShell() {
    container.innerHTML = `
      <div class="quiz-progress"></div>
      <div class="quiz-question"></div>
      <div class="quiz-options"></div>
      <div class="quiz-feedback"></div>
      <div class="btn-row"><button class="btn" id="quiz-next-btn" style="display:none;">下一題 →</button></div>
    `;
    progressEl = container.querySelector('.quiz-progress');
    questionEl = container.querySelector('.quiz-question');
    optionsEl = container.querySelector('.quiz-options');
    feedbackEl = container.querySelector('.quiz-feedback');
    nextBtn = container.querySelector('#quiz-next-btn');
    nextBtn.addEventListener('click', () => {
      idx += 1;
      if (idx < total) {
        showQuestion();
      } else {
        finish();
      }
    });
  }

  function showQuestion() {
    const q = questions[idx];
    progressEl.textContent = `第 ${idx + 1} / ${total} 題`;
    questionEl.innerHTML = q.question;
    feedbackEl.textContent = '';
    feedbackEl.className = 'quiz-feedback';
    nextBtn.style.display = 'none';
    optionsEl.innerHTML = '';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-option';
      btn.innerHTML = opt;
      btn.addEventListener('click', () => selectAnswer(i, btn));
      optionsEl.appendChild(btn);
    });
  }

  function selectAnswer(i, btn) {
    const q = questions[idx];
    const allBtns = optionsEl.querySelectorAll('.quiz-option');
    allBtns.forEach((b) => { b.disabled = true; });
    if (i === q.answer) {
      btn.classList.add('correct');
      score += 1;
      feedbackEl.textContent = '✔ 正解！' + (q.explanation ? '　' + q.explanation : '');
      feedbackEl.classList.add('correct');
    } else {
      btn.classList.add('incorrect');
      allBtns[q.answer].classList.add('correct');
      feedbackEl.textContent = '✘ 再確認一下！' + (q.explanation ? '　' + q.explanation : '');
      feedbackEl.classList.add('incorrect');
    }
    nextBtn.style.display = 'inline-flex';
  }

  function finish() {
    const prev = storageKey ? Storage.get(storageKey, { best: 0 }) : { best: 0 };
    const best = Math.max(prev.best || 0, score);
    if (storageKey) {
      Storage.set(storageKey, { best, last: score, total, completedAt: Date.now() });
    }
    const percent = Math.round((score / total) * 100);
    container.innerHTML = `
      <div class="quiz-question">測驗完成！這次答對 ${score} / ${total} 題（${percent}%）</div>
      <p>歷史最佳成績：${best} / ${total}</p>
      <div class="btn-row">
        <button class="btn" id="quiz-retry-btn">再測一次</button>
      </div>
    `;
    container.querySelector('#quiz-retry-btn').addEventListener('click', start);
  }

  function start() {
    idx = 0;
    score = 0;
    buildShell();
    showQuestion();
  }

  start();
}

/* Fisher-Yates 洗牌，供各頁面產生隨機題目順序使用 */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
