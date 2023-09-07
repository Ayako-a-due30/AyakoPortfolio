// ローディング画面--------------------

const loading = document.querySelector('#loading');

window.addEventListener('load',()=> {
  loading.classList.add('loaded');
});

//PCページ:ファーストビューの下までスクロールしたらページトップでメニューを固定
const viewHeight = window.innerHeight;

window.addEventListener('scroll',function() {
  const scrolled = window.scrollY;
  if(window.scrollY>viewHeight){
    navi.classList.add('fixed');
  }else {
    navi.classList.remove('fixed');
  }
});


//worksアニメーション--------------------

const works = document.querySelectorAll('.works-list');
const showWorks =(entries)=> {
  for (let i = 0; i<works.length; i++){
    const keyframes = {
      opacity:[0,1],
      filter:['blur(20px)','blur(0)'],
    };
    const options = {
      duration:900,
      delay:i * 500,
      fill:'forwards',
    };
    entries[i].target.animate(keyframes,options);
  }
};
const workObserver = new IntersectionObserver(showWorks);
works.forEach((work)=>workObserver.observe(work));

// CONTACT文字数カウント-----------------------
//textarea
const message = document.querySelector('#message');
//show-count
const count = document.querySelector('#count');

message.addEventListener('keyup',()=> {
  count.textContent = message.value.length;
});

//レスポンシブ--------------------------
//ハンバーガーメニュー--------------------

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
    hamburgerMenuSections.forEach(section=>{
      section.classList.toggle('active');
    });
  });

headerMenuList.forEach(menuItem=>{
  menuItem.addEventListener("click",function(){
    hamburgerMenu.classList.toggle("active");
    navi.classList.toggle('active');
    mask.classList.toggle('active');
    hamburgerMenuSections.forEach(section=>{
      section.classList.toggle('active');
    });

  });
});;

