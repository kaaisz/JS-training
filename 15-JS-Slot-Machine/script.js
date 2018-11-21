(function () {
  'use strict';

  //get each element
  var panels = document.querySelectorAll('.panel');
  var spin = document.querySelector('#spin');

  //keep images in variables
  var cards = [
    'seven.png',
    'bell.png',
    'cherry.png'
  ];

  function runSlot(n) {
    setTimeout(function () {
      //HTMLでpanelの最初の子要素としてimgタグを書いているので、
      //panels[n].children[0].srcをランダムに変更する
      panels[n].children[0].src =
        'img/' +
        cards[Math.floor(Math.random() * cards.length)];
      runSlot(n);//もう一度呼ぶことを繰り返す = 処理が連続する
    }, 50);
  }

  //Add spin events
  spin.addEventListener('click', function () {
    let i;
    //processing switch images for all panels
    //until panels ends, 
    for (i = 0; i < panels.length; i++) {
      //パネルの画像を入れ替える処理 - runslotをi番目のパネルに対して呼ぶ
      runSlot(i);
    }
  });
})();