/* 通用單字閃卡引擎（間隔重複 SRS）：單字閃卡頁與片假名單字頁共用
   toCard(item) 需回傳 { id, front, speak, pos, meaning, example: {jp, zh} } */
function initFlashcardDeck({ dataList, deckName, toCard }) {
  const cards = dataList.map(toCard);
  const allIds = cards.map((c) => c.id);

  const statusEl = document.getElementById('deck-status');
  const stageEl = document.getElementById('flash-stage');
  const practiceAllBtn = document.getElementById('practice-all-btn');

  let queue = [];
  let cursor = 0;
  let sessionReviewed = 0;

  function refreshStatus() {
    const stats = SRS.stats(deckName, allIds);
    statusEl.innerHTML = `
      <span class="stat">總單字：<b>${stats.total}</b></span>
      <span class="stat">已熟記：<b>${stats.mastered}</b></span>
      <span class="stat">今日待複習：<b>${stats.due}</b></span>
      <span class="stat">本次已複習：<b>${sessionReviewed}</b></span>
    `;
  }

  function buildDueQueue() {
    return shuffle(cards.filter((c) => SRS.isDue(SRS.getCard(deckName, c.id))));
  }

  function buildAllQueue() {
    return shuffle(cards.slice());
  }

  function renderEmptyState() {
    stageEl.innerHTML = `
      <div class="panel accent-teal" style="text-align:center;">
        <h2>🎉 今日複習完成！</h2>
        <p>目前沒有到期需要複習的單字了，明天再回來繼續累積戰鬥力吧！</p>
        <div class="btn-row" style="justify-content:center;">
          <button class="btn teal" id="practice-all-inline-btn">不管進度，直接練習全部單字</button>
        </div>
      </div>
    `;
    document.getElementById('practice-all-inline-btn').addEventListener('click', () => {
      startSession(buildAllQueue());
    });
  }

  function renderCard() {
    if (cursor >= queue.length) {
      renderEmptyState();
      refreshStatus();
      return;
    }
    const card = queue[cursor];
    stageEl.innerHTML = `
      <div class="quiz-progress">第 ${cursor + 1} / ${queue.length} 張</div>
      <div class="flashcard" id="flash-card">
        <div class="flashcard-inner">
          <div class="flashcard-face front">
            <span class="badge">${card.pos}</span>
            <div class="kanji-word jp">${card.front}</div>
            <button type="button" class="speak-btn" data-speak="${card.speak}" title="播放發音">🔊</button>
            <div class="sentence-note">點卡片看意思</div>
          </div>
          <div class="flashcard-face back">
            <span class="sfx-corner">ドンッ!!</span>
            <div class="meaning">${card.meaning}</div>
            <div class="example jp">${card.example.jp}</div>
            <div class="example">${card.example.zh}</div>
          </div>
        </div>
      </div>
      <div class="grade-row">
        <button class="btn secondary" data-grade="again">😵 忘記了</button>
        <button class="btn pink" data-grade="hard">😅 有點難</button>
        <button class="btn teal" data-grade="good">🙂 記得</button>
        <button class="btn purple" data-grade="easy">😎 很簡單</button>
      </div>
    `;

    const cardEl = document.getElementById('flash-card');
    cardEl.addEventListener('click', (e) => {
      if (e.target.closest('.speak-btn')) return;
      cardEl.classList.toggle('flipped');
    });

    stageEl.querySelectorAll('[data-grade]').forEach((btn) => {
      btn.addEventListener('click', () => {
        SRS.grade(deckName, card.id, btn.dataset.grade);
        sessionReviewed += 1;
        cursor += 1;
        refreshStatus();
        renderCard();
      });
    });
  }

  function startSession(list) {
    queue = list;
    cursor = 0;
    renderCard();
  }

  practiceAllBtn.addEventListener('click', () => startSession(buildAllQueue()));

  refreshStatus();
  const due = buildDueQueue();
  startSession(due.length ? due : []);
  if (!due.length) renderEmptyState();
}
