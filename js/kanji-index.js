/* 漢字批次列表頁：列出 KANJI_SETS，並顯示每批的測驗完成狀態 */
document.addEventListener('DOMContentLoaded', () => {
  const listEl = document.getElementById('kanji-batch-list');
  const summaryEl = document.getElementById('kanji-summary');

  let totalKanji = 0;
  let cleared = 0;

  listEl.innerHTML = KANJI_SETS.map((set) => {
    totalKanji += set.kanji.length;
    const result = Storage.get(`kanji_${set.slug}`, null);
    const done = result && result.best === result.total;
    if (done) cleared += 1;
    const status = result ? `最佳 ${result.best} / ${result.total}` : '尚未挑戰';
    return `
      <a class="unit-card" href="kanji.html?batch=${set.slug}">
        <span class="icon">${done ? '✅' : '🀄'}</span>
        <span class="name">${set.title}</span>
        <span class="desc">${set.desc}</span>
        <span class="progress-label">${status}</span>
      </a>`;
  }).join('');

  summaryEl.textContent = `目前共有 ${KANJI_SETS.length} 批、${totalKanji} 個漢字，已全對 ${cleared} 批。`;
});
