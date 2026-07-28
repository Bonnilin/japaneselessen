/* 簡化版間隔重複演算法（Leitner 概念）：
   等級 0-6，等級越高代表越熟悉、下次複習間隔越長 */
const SRS = {
  INTERVALS_DAYS: [0, 1, 3, 7, 14, 30, 90],
  MAX_LEVEL: 6,
  MASTERED_LEVEL: 4,

  deckKey(deckName) {
    return `srs_${deckName}`;
  },
  loadDeck(deckName) {
    return Storage.get(this.deckKey(deckName), {});
  },
  saveDeck(deckName, deck) {
    Storage.set(this.deckKey(deckName), deck);
  },
  getCard(deckName, cardId) {
    const deck = this.loadDeck(deckName);
    return deck[cardId] || { level: 0, due: 0, reviews: 0 };
  },
  isDue(card) {
    return card.due <= Date.now();
  },
  grade(deckName, cardId, gradeName) {
    const deck = this.loadDeck(deckName);
    const card = deck[cardId] || { level: 0, due: 0, reviews: 0 };
    let level = card.level;
    let dayMultiplier = 1;

    if (gradeName === 'again') {
      level = 0;
    } else if (gradeName === 'hard') {
      level = Math.max(0, level);
      dayMultiplier = 0.5;
    } else if (gradeName === 'good') {
      level = Math.min(this.MAX_LEVEL, level + 1);
    } else if (gradeName === 'easy') {
      level = Math.min(this.MAX_LEVEL, level + 2);
    }

    const days = Math.max(gradeName === 'again' ? 0 : 1, Math.round(this.INTERVALS_DAYS[level] * dayMultiplier));
    const due = Date.now() + days * 24 * 60 * 60 * 1000;
    deck[cardId] = { level, due, reviews: (card.reviews || 0) + 1 };
    this.saveDeck(deckName, deck);
    return deck[cardId];
  },
  stats(deckName, allIds) {
    const deck = this.loadDeck(deckName);
    let mastered = 0;
    let due = 0;
    allIds.forEach((id) => {
      const card = deck[id];
      if (!card) {
        due += 1;
        return;
      }
      if (card.level >= this.MASTERED_LEVEL) mastered += 1;
      if (this.isDue(card)) due += 1;
    });
    return { total: allIds.length, mastered, due, seen: Object.keys(deck).length };
  }
};
