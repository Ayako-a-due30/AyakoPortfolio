// 変数宣言
// ハンバーガーメニューの要素
const hamburgerMenu = document.querySelector(".hamburger-menu");

// ハンバーガーメニューがクリックされた時に表示されるメニュー画面の要素
const navi = document.getElementById("hamburger-navigation");

// ハンバーガーメニュー内の各セクションの要素
const hamburgerMenuSections = document.querySelectorAll(".hamburger-menu-section");
// ハンバーガーメニュー内の各メニューの要素
const headerMenuList = document.querySelectorAll(".header-menu-list");


// マスク
const mask = document.getElementById("mask");

// ハンバーガーメニューをクリックした時の処理
hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
    navi.classList.toggle('active');
    mask.classList.toggle('active');
    hamburgerMenuSections.toggle('active');
  });

headerMenuList.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
    navi.classList.toggle('active');
    mask.classList.toggle('active');
    hamburgerMenuSections.toggle('active');
  });

//   hamburgerMenu.classList.toggle("active");
// navi.classList.toggle('active');

//PCページ「ファーストビューの下までスクロールしたらページトップでメニューを固定」
const scrolled = window.scrollY;
const viewHeight = document.documentElement.clientHeight;
