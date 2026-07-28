/* localStorage 包裝工具：所有學習進度都只存在使用者自己的瀏覽器裡 */
const Storage = {
  PREFIX: 'nq_',
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(this.PREFIX + key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(this.PREFIX + key, JSON.stringify(value));
    } catch (e) {
      /* localStorage 不可用時（例如隱私模式）靜默略過，不影響教材本身 */
    }
  },
  remove(key) {
    localStorage.removeItem(this.PREFIX + key);
  }
};
