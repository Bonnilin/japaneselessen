/* 使用瀏覽器內建 Web Speech API 朗讀日文，不需任何音檔或伺服器 */
const TTS = {
  voice: null,
  supported: 'speechSynthesis' in window,
  init() {
    if (!this.supported) return;
    const pickVoice = () => {
      const voices = speechSynthesis.getVoices();
      this.voice =
        voices.find((v) => v.lang === 'ja-JP') ||
        voices.find((v) => v.lang && v.lang.startsWith('ja')) ||
        null;
    };
    pickVoice();
    speechSynthesis.onvoiceschanged = pickVoice;
  },
  speak(text, rate = 0.85) {
    if (!this.supported) {
      alert('這個瀏覽器不支援語音合成功能，建議改用 Chrome 或 Edge 開啟本網站。');
      return;
    }
    speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'ja-JP';
    utter.rate = rate;
    if (this.voice) utter.voice = this.voice;
    speechSynthesis.speak(utter);
  }
};
TTS.init();

/* 讓帶有 data-speak="text" 的按鈕都能自動綁定朗讀功能 */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-speak]');
  if (!btn) return;
  TTS.speak(btn.getAttribute('data-speak'));
});
