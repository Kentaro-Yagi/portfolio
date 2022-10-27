// ローディングを開始させる
const loadingBox = document.getElementById('loadingBox');

function loadingStop(){
    loadingBox.classList.add('loadingNone');
}

window.addEventListener('load', loadingStop());

// アニメーションが終了したら要素を削除する
const element = document.getElementById('loadingBox')

element.addEventListener('animationend', () => {
    // アニメーション終了後に実行する内容
    element.remove();
})


// トップページにスクロールするボタンを実装
const topButton = document.getElementById('js-scroll-fadein'); 

function getScrolled() {
    // window.pageYOffsetが使える場合は使って
    // 使えない場合にはdocument.documentElement.scrollTopを使う
    // どちらもやっていることは同じ。
  return( window.pageYOffset !== undefined) ? 
    // 正の時　
    window.pageYOffset:
    // 偽の時 
    document.documentElement.scrollTop;
}


window.onscroll = function() {
  // getScrolled関数で取得したスクロール量が500未満か。
  (getScrolled() > 500) ? 
  // 正の時
  topButton.classList.add('js-fadein'): 
  // 偽の時
  topButton.classList.remove('js-fadein');
}

// トップページへスクロールさせる関数
function scrollToTop(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// スクロール関数の発動条件＝トップボタンをクリックしたとき
topButton.onclick = function(){
  scrollToTop();
}