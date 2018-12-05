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

  console.log(panels.length);

  //to get timerId
  const timers = [];

  //to count time for how many times stop button has clicked (init = 0)
  //incriment by 1 when button has been clicked
  let stopCount = 0;

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

        //incriment stop counter by 1
        stopCount++;
        console.log('count : '+ stopCount);
        //if all the stop button has been clicked
        if(stopCount === panels.length){
          //reset stop counter
          stopCount = 0;
          //activate checkResults()
          console.log('count at last : ' + stopCount);
          checkResults();
        }
      });
    }
  }

  //funciton for checking results
  function checkResults(){
    //to compare each of img src, add panel img to variable.
    //img = panels[0]の最初の子要素 = panels[].children[0]
    const img0 = panels[0].children[0];
    const img1 = panels[1].children[0];
    const img2 = panels[2].children[0];

    //画像同士が揃わなければ色を薄くする
    if (img0.src !== img1.src && img0.src !== img2.src){
      img0.className = 'unmatched'
    }
    if (img1.src !== img0.src && img1.src !== img2.src) {
      img1.className = 'unmatched'
    }
    if (img2.src !== img0.src && img2.src !== img1.src) {
      img2.className = 'unmatched'
    }
  }

  //invoke above
  initPanel();

  //Add spin events
  spin.addEventListener('click', function () {
    // inactive を classNameとして、「SPINが押された時に」STOPボタンが押されるまでinactiveを外しておく
    this.className = 'inactive';
    //processing switch images for all panels
    //until panels ends, 
    for (let i = 0; i < panels.length; i++) {
      //パネルの画像を入れ替える処理 - runslotをi番目のパネルに対して呼ぶ
      runSlot(i);
      //パネルの画像が全て入れ替わったらunmatchedを外す
      //unmatchedがついていたのは、img = panels[0]の最初の子要素 = panels[].children[0]
      panels[i].children[0].className = '';
      // SPIN?ボタンが押された時に .inactive だけを外す = panels[0]の2番目の子要素 = panels[].children[1]
      panels[i].children[1].className = 'stop';
    }
  });
})();