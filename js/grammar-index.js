/* 文法課程列表頁：依 N5／N4 分組列出 GRAMMAR_LESSONS，並顯示測驗完成狀態 */
document.addEventListener('DOMContentLoaded', () => {
  const n5List = document.getElementById('n5-lesson-list');
  const n4List = document.getElementById('n4-lesson-list');
  const summaryEl = document.getElementById('grammar-summary');

  const n5Lessons = GRAMMAR_LESSONS.filter((l) => l.level === 'N5');
  const n4Lessons = GRAMMAR_LESSONS.filter((l) => l.level === 'N4');

  let cleared = 0;

  function renderList(container, lessons) {
    container.innerHTML = lessons
      .map((lesson) => {
        const result = Storage.get(`grammar_${lesson.slug}`, null);
        const done = result && result.best === result.total;
        if (done) cleared += 1;
        const status = result ? `最佳 ${result.best} / ${result.total}` : '尚未挑戰';
        return `
          <a class="unit-card" href="grammar.html?slug=${lesson.slug}">
            <span class="icon">${done ? '✅' : '📘'}</span>
            <span class="name">${lesson.title}</span>
            <span class="desc">${lesson.intro}</span>
            <span class="progress-label">${status}</span>
          </a>`;
      })
      .join('');
  }

  renderList(n5List, n5Lessons);
  renderList(n4List, n4Lessons);

  const total = GRAMMAR_LESSONS.length;
  summaryEl.textContent = `目前共有 ${total} 課文法（N5：${n5Lessons.length} 課／N4：${n4Lessons.length} 課），已全對 ${cleared} 課。`;
});
