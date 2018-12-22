'use strict';
//to move cards when it has been clicked - クリックした時にカードが移動する処理
//1.define elements
const cards = document.querySelector('#cards');
const check = document.querySelector('#check');
const retry = document.querySelector('#retry');

//checkをクリックした際のイベントを設定
check.addEventListener('click', () => {
    // メッセージを配列で付与し、ランダムに表示させる
    const messages = [
        '究極の進化を遂げた',
        '太古より蘇った',
        '最も恐れられた',
    ];
    const jobs = [
        // msgs and imgs which corresponded
        {name:'勇者', img:'img/hero.gif'},
        {name:'魔法使い', img:'img/wizard.gif'},
        {name:'武闘家', img:'img/fighter.gif'},
    ];
    const types = [
        // msgs and imgs which corresponded
        {name: 'その炎はすべてを焼き尽くす', img: 'img/bg-fire.gif',},
        {name: 'その清水ですべてを浄化する', img: 'img/bg-water.gif',},
        {name: 'その雷撃は万物の怒りを鎮める', img: 'img/bg-thunder.gif',},
    ]

    // 配列からランダムに要素を取り出すための関数[arrayの数だけランダムなパターンを生成したい]
    function getRandomElement(array){
        return array[Math.floor(Math.random() * array.length)]
    }

    // クリックされた時に'move' というクラスを付与
    cards.className = 'move';
})

//retryをクリックした際のイベントを設定
retry.addEventListener('click', () => {
    // クリックされた時に'move'クラスを外す
    cards.className = '';
})