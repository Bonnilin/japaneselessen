/* 五十音頁面邏輯：表格切換分類 + 點擊發音 + 小測驗 */
document.addEventListener('DOMContentLoaded', () => {
  const gridEl = document.getElementById('gojuon-grid');
  const tabs = document.querySelectorAll('.gojuon-tab');
  const quizBtn = document.getElementById('gojuon-quiz-btn');
  const quizSection = document.getElementById('gojuon-quiz');
  const tableSection = document.getElementById('gojuon-table-section');
  const backBtn = document.getElementById('gojuon-back-btn');

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
          div.setAttribute('data-speak', cell.k);
          div.innerHTML = `
            <span class="kana">${cell.k}</span>
            <span class="kata">${cell.kt}</span>
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

  function buildGojuonQuiz() {
    const all = flattenAll();
    const picked = shuffle(all).slice(0, 10);
    return picked.map((item) => {
      const distractors = shuffle(all.filter((x) => x.r !== item.r)).slice(0, 3).map((x) => x.r);
      const options = shuffle([item.r, ...distractors]);
      return {
        question: `<span style="font-size:2.2rem;">${item.k}</span>　這個假名怎麼唸？`,
        options,
        answer: options.indexOf(item.r),
        explanation: `正確讀音是「${item.r}」（片假名：${item.kt}）。`
      };
    });
  }

  if (quizBtn) {
    quizBtn.addEventListener('click', () => {
      tableSection.style.display = 'none';
      quizSection.style.display = 'block';
      runQuiz({
        container: document.getElementById('gojuon-quiz-container'),
        questions: buildGojuonQuiz(),
        storageKey: 'gojuon_quiz'
      });
    });
  }

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      quizSection.style.display = 'none';
      tableSection.style.display = 'block';
    });
  }
});
