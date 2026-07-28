/* 單字組列表頁：列出 VOCAB_SETS，並顯示每組的 SRS 熟記進度 */
document.addEventListener('DOMContentLoaded', () => {
  const listEl = document.getElementById('vocab-set-list');
  const summaryEl = document.getElementById('vocab-summary');

  let totalWords = 0;
  let totalMastered = 0;

  listEl.innerHTML = VOCAB_SETS.map((set) => {
    const ids = set.words.map((w) => w.id);
    const stats = SRS.stats(`vocab_${set.slug}`, ids);
    totalWords += stats.total;
    totalMastered += stats.mastered;
    return `
      <a class="unit-card" href="vocab.html?set=${set.slug}">
        <span class="icon">🃏</span>
        <span class="name">${set.title}</span>
        <span class="desc">${set.desc}</span>
        <span class="progress-label">已熟記 ${stats.mastered} / ${stats.total}</span>
      </a>`;
  }).join('');

  summaryEl.textContent = `目前共有 ${VOCAB_SETS.length} 組單字、${totalWords} 個單字，已熟記 ${totalMastered} 個。`;
});
