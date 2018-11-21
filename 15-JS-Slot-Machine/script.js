(function () {
  'use strict';

  //get each element
  const panels = document.querySelectorAll('.panel');
  const spin = document.querySelector('#spin');

  //keep images in variables
  const cards = [
    'seven.png',
    'bell.png',
    'cherry.png'
  ];

  const timers = [];

  const runSlot = (n) => {
    timers[n] = setTimeout(function () {
      //HTMLでpanelの最初の子要素としてimgタグを書いているので、
      //panels[n].children[0].srcをランダムに変更する
      panels[n].children[0].src =
        'img/' +
        cards[Math.floor(Math.random() * cards.length)];
      runSlot(n);//もう一度呼ぶことを繰り返す = 処理が連続する
    }, 50);
  }

  //Add function for event listener on STOP button
  const initPanel = () => {
    for (let i = 0; i < panels.length; i++) {
      //panelのSTOPボタンはpanel内の0番目、1番目の子要素に当たるので
      //children[1]に対してaddEventListenerでクリックした時の処理を書く
      panels[i].children[1].addEventListener('click', function(){
        //panelを止めるためにclearTimeoutを使う = runslotでsetTimeoutに対し返り値の取得が必要
        //上記のtimersでそれぞれのtimerIdを保持
        //settimeoutで発行されるtimerIdをtimersの[n]番目とする
        clearTimeout(timers[this.dataset.index]);

      });
    }
  }

  //invoke above
  initPanel();

  //Add spin events
  spin.addEventListener('click', function () {
    //processing switch images for all panels
    //until panels ends, 
    for (let i = 0; i < panels.length; i++) {
      //パネルの画像を入れ替える処理 - runslotをi番目のパネルに対して呼ぶ
      runSlot(i);
    }
  });
})();