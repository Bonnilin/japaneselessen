/* 單字閃卡資料庫：VOCAB_SETS 是所有單字組的清單，
   vocab.html 會依網址 ?set= 參數從這裡找出對應單字組並渲染。
   example.jp 內已用 <ruby> 標好平假名注音，kanji/kana 由頁面 JS 自動組成 ruby 顯示 */
const VOCAB_SETS = [
  {
    slug: 'n4-hero-1',
    level: 'N4',
    title: '熱血心情詞',
    desc: '覺悟、勇氣、仲間…20 個充滿故事感的核心 N4 單字',
    words: [
      { id: 'v01', kanji: '運命', kana: 'うんめい', meaning: '命運', pos: '名詞', example: { jp: 'これは<ruby>運命<rt>うんめい</rt></ruby>の<ruby>出会<rt>であ</rt></ruby>いだ。', zh: '這是命中注定的相遇。' } },
      { id: 'v02', kanji: '覚悟', kana: 'かくご', meaning: '覺悟、心理準備', pos: '名詞', example: { jp: '<ruby>戦<rt>たたか</rt></ruby>う<ruby>覚悟<rt>かくご</rt></ruby>はできている。', zh: '我已經做好戰鬥的覺悟了。' } },
      { id: 'v03', kanji: '敵', kana: 'てき', meaning: '敵人', pos: '名詞', example: { jp: '<ruby>敵<rt>てき</rt></ruby>はまだ<ruby>近<rt>ちか</rt></ruby>くにいるはずだ。', zh: '敵人應該還在附近。' } },
      { id: 'v04', kanji: '味方', kana: 'みかた', meaning: '同伴、我方', pos: '名詞', example: { jp: '<ruby>味方<rt>みかた</rt></ruby>はいつも<ruby>私<rt>わたし</rt></ruby>を<ruby>助<rt>たす</rt></ruby>けてくれる。', zh: '同伴總是會幫助我。' } },
      { id: 'v05', kanji: '仲間', kana: 'なかま', meaning: '夥伴', pos: '名詞', example: { jp: '<ruby>仲間<rt>なかま</rt></ruby>との<ruby>約束<rt>やくそく</rt></ruby>は<ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>守<rt>まも</rt></ruby>る。', zh: '和夥伴的約定我一定會遵守。' } },
      { id: 'v06', kanji: '勇気', kana: 'ゆうき', meaning: '勇氣', pos: '名詞', example: { jp: '<ruby>一歩<rt>いっぽ</rt></ruby><ruby>前<rt>まえ</rt></ruby>に<ruby>出<rt>で</rt></ruby>る<ruby>勇気<rt>ゆうき</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>だ。', zh: '需要有向前踏出一步的勇氣。' } },
      { id: 'v07', kanji: '力', kana: 'ちから', meaning: '力量', pos: '名詞', example: { jp: '<ruby>本当<rt>ほんとう</rt></ruby>の<ruby>力<rt>ちから</rt></ruby>はまだ<ruby>隠<rt>かく</rt></ruby>されている。', zh: '真正的力量還隱藏著。' } },
      { id: 'v08', kanji: '危険', kana: 'きけん', meaning: '危險', pos: '形容動詞', example: { jp: 'この<ruby>先<rt>さき</rt></ruby>は<ruby>危険<rt>きけん</rt></ruby>だから<ruby>気<rt>き</rt></ruby>をつけて。', zh: '前方很危險，要小心。' } },
      { id: 'v09', kanji: '突然', kana: 'とつぜん', meaning: '突然', pos: '副詞', example: { jp: '<ruby>突然<rt>とつぜん</rt></ruby>、<ruby>空<rt>そら</rt></ruby>が<ruby>暗<rt>くら</rt></ruby>くなった。', zh: '天空突然暗了下來。' } },
      { id: 'v10', kanji: '決める', kana: 'きめる', meaning: '決定', pos: '動詞（他動）', example: { jp: '<ruby>自分<rt>じぶん</rt></ruby>の<ruby>道<rt>みち</rt></ruby>は<ruby>自分<rt>じぶん</rt></ruby>で<ruby>決<rt>き</rt></ruby>める。', zh: '自己的路要自己決定。' } },
      { id: 'v11', kanji: '信じる', kana: 'しんじる', meaning: '相信', pos: '動詞（他動）', example: { jp: '<ruby>君<rt>きみ</rt></ruby>の<ruby>力<rt>ちから</rt></ruby>を<ruby>信<rt>しん</rt></ruby>じている。', zh: '我相信你的力量。' } },
      { id: 'v12', kanji: '諦める', kana: 'あきらめる', meaning: '放棄', pos: '動詞（他動）', example: { jp: 'まだ<ruby>諦<rt>あきら</rt></ruby>めるには<ruby>早<rt>はや</rt></ruby>い。', zh: '現在放棄還太早。' } },
      { id: 'v13', kanji: '挑戦', kana: 'ちょうせん', meaning: '挑戰', pos: '名詞・する動詞', example: { jp: '<ruby>新<rt>あたら</rt></ruby>しい<ruby>挑戦<rt>ちょうせん</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めよう。', zh: '開始新的挑戰吧。' } },
      { id: 'v14', kanji: '成長', kana: 'せいちょう', meaning: '成長', pos: '名詞・する動詞', example: { jp: '<ruby>彼<rt>かれ</rt></ruby>はこの<ruby>一年<rt>いちねん</rt></ruby>で<ruby>大<rt>おお</rt></ruby>きく<ruby>成長<rt>せいちょう</rt></ruby>した。', zh: '他這一年成長了很多。' } },
      { id: 'v15', kanji: '未来', kana: 'みらい', meaning: '未來', pos: '名詞', example: { jp: '<ruby>未来<rt>みらい</rt></ruby>は<ruby>自分<rt>じぶん</rt></ruby>の<ruby>手<rt>て</rt></ruby>で<ruby>変<rt>か</rt></ruby>えられる。', zh: '未來可以靠自己的雙手改變。' } },
      { id: 'v16', kanji: '経験', kana: 'けいけん', meaning: '經驗', pos: '名詞・する動詞', example: { jp: 'この<ruby>経験<rt>けいけん</rt></ruby>はきっと<ruby>役<rt>やく</rt></ruby>に<ruby>立<rt>た</rt></ruby>つ。', zh: '這個經驗一定會派上用場。' } },
      { id: 'v17', kanji: '説明', kana: 'せつめい', meaning: '說明', pos: '名詞・する動詞', example: { jp: 'ルールを<ruby>説明<rt>せつめい</rt></ruby>してください。', zh: '請說明一下規則。' } },
      { id: 'v18', kanji: '準備', kana: 'じゅんび', meaning: '準備', pos: '名詞・する動詞', example: { jp: '<ruby>出発<rt>しゅっぱつ</rt></ruby>の<ruby>準備<rt>じゅんび</rt></ruby>はもうできた。', zh: '出發的準備已經完成了。' } },
      { id: 'v19', kanji: '心配', kana: 'しんぱい', meaning: '擔心', pos: '名詞・形容動詞', example: { jp: '<ruby>心配<rt>しんぱい</rt></ruby>しないで、<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>だ。', zh: '別擔心，沒問題的。' } },
      { id: 'v20', kanji: '約束', kana: 'やくそく', meaning: '約定', pos: '名詞・する動詞', example: { jp: 'この<ruby>約束<rt>やくそく</rt></ruby>は<ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>破<rt>やぶ</rt></ruby>らない。', zh: '這個約定我絕對不會違背。' } }
    ]
  }
];
