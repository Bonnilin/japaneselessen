/* 單字閃卡頁面邏輯：呼叫共用的 initFlashcardDeck 引擎 */
document.addEventListener('DOMContentLoaded', () => {
  initFlashcardDeck({
    dataList: VOCAB_DATA,
    deckName: 'vocab',
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
