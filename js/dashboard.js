/* 首頁進度總覽：讀取各單元存在 localStorage 的資料並顯示 */
document.addEventListener('DOMContentLoaded', () => {
  const vocabStats = SRS.stats('vocab', VOCAB_DATA.map((w) => w.id));
  const gojuonQuiz = Storage.get('gojuon_quiz', null);
  const kanjiQuiz = Storage.get('kanji_quiz', null);
  const teFormQuiz = Storage.get('te_form_quiz', null);
  const passiveQuiz = Storage.get('passive_quiz', null);
  const animeCloze = Storage.get('anime_cloze', null);

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  setText('status-gojuon', gojuonQuiz ? `最佳 ${gojuonQuiz.best} / ${gojuonQuiz.total}` : '尚未挑戰');
  setText('status-te-form', teFormQuiz ? `最佳 ${teFormQuiz.best} / ${teFormQuiz.total}` : '尚未挑戰');
  setText('status-passive', passiveQuiz ? `最佳 ${passiveQuiz.best} / ${passiveQuiz.total}` : '尚未挑戰');
  setText('status-vocab', `已熟記 ${vocabStats.mastered} / ${vocabStats.total}`);
  setText('status-kanji', kanjiQuiz ? `最佳 ${kanjiQuiz.best} / ${kanjiQuiz.total}` : '尚未挑戰');
  setText('status-anime', animeCloze ? `最佳 ${animeCloze.best} / ${animeCloze.total}` : '尚未挑戰');

  const totalUnits = 6;
  let clearedUnits = 0;
  [gojuonQuiz, teFormQuiz, passiveQuiz, kanjiQuiz, animeCloze].forEach((r) => {
    if (r && r.best === r.total) clearedUnits += 1;
  });
  if (vocabStats.mastered === vocabStats.total) clearedUnits += 1;

  const percent = Math.round((clearedUnits / totalUnits) * 100);
  const bar = document.getElementById('overall-progress-bar');
  const label = document.getElementById('overall-progress-label');
  if (bar) bar.style.width = `${percent}%`;
  if (label) label.textContent = `整體完成度：${clearedUnits} / ${totalUnits} 單元全對（${percent}%）`;
});
