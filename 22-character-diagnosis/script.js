'use strict';
//to move cards when it has been clicked - クリックした時にカードが移動する処理
//1.define elements
const cards = document.querySelector('#cards');
const check = document.querySelector('#check');
const retry = document.querySelector('#retry');

//checkをクリックした際のイベントを設定
check.addEventListener('click', () => {
    // クリックされた時に'move' というクラスを付与
    cards.className = 'move';
})

//retryをクリックした際のイベントを設定
retry.addEventListener('click', () => {
    // クリックされた時に'move'クラスを外す
    cards.className = '';
})