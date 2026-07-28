/* 單字閃卡頁面邏輯（vocab.html 共用樣板）：
   從網址 ?set= 找出對應單字組，呼叫共用的 initFlashcardDeck 引擎 */
document.addEventListener('DOMContentLoaded', () => {
  const slug = new URLSearchParams(location.search).get('set');
  const set = VOCAB_SETS.find((s) => s.slug === slug);

  const notFoundEl = document.getElementById('set-not-found');
  const contentEl = document.getElementById('set-content');

  if (!set) {
    notFoundEl.style.display = 'block';
    contentEl.style.display = 'none';
    return;
  }

  document.title = `${set.title}｜ニホンゴ・クエスト`;
  document.getElementById('set-level-badge').textContent = set.level;
  document.getElementById('set-title').textContent = set.title;
  document.getElementById('set-desc').textContent = set.desc;

  initFlashcardDeck({
    dataList: set.words,
    deckName: `vocab_${set.slug}`,
    toCard: (w) => ({
      id: w.id,
      front: `<ruby>${w.kanji}<rt>${w.kana}</rt></ruby>`,
      speak: w.kanji,
      pos: w.pos,
      meaning: w.meaning,
      example: w.example
    })
  });
});
