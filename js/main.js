document.addEventListener("DOMContentLoaded", () => {
	// 全体用
	// ローディング画面--------------------

	const loading = document.querySelector("#loading");

	window.addEventListener("load", () => {
		loading.classList.add("loaded");
	});

	//PCページ:ファーストビューの下までスクロールしたらページトップでメニューを固定
	const viewHeight = window.innerHeight;

	window.addEventListener("scroll", function () {
		const scrolled = window.scrollY;
		if (window.scrollY > viewHeight) {
			navi.classList.add("fixed");
		} else {
			navi.classList.remove("fixed");
		}
	});
});

//レスポンシブ--------------------------
//ハンバーガーメニュー--------------------

// ハンバーガーメニューの要素
const hamburgerMenu = document.querySelector(".hamburger-menu");
// ハンバーガーメニューがクリックされた時に表示されるメニュー画面の要素
const navi = document.getElementById("hamburger-navigation");
// ハンバーガーメニュー内の各セクションの要素
const hamburgerMenuSections = document.querySelectorAll(
	".hamburger-menu-section"
);
// ハンバーガーメニュー内の各メニューの要素
const headerMenuList = document.querySelectorAll(".header-menu-list");

// マスク
const mask = document.getElementById("mask");

// ハンバーガーメニューをクリックした時の処理
hamburgerMenu.addEventListener("click", function () {
	hamburgerMenu.classList.toggle("active");
	navi.classList.toggle("active");
	mask.classList.toggle("active");
	hamburgerMenuSections.forEach((section) => {
		section.classList.toggle("active");
	});
});

headerMenuList.forEach((menuItem) => {
	menuItem.addEventListener("click", function () {
		hamburgerMenu.classList.toggle("active");
		navi.classList.toggle("active");
		mask.classList.toggle("active");
		hamburgerMenuSections.forEach((section) => {
			section.classList.toggle("active");
		});
	});
});

// ページごとに条件分岐してJSを指定する
const mainElement = document.querySelector("#main-content");
if (mainElement.classList.contains("front-page")) {
	// トップページ用のJavaScriptコード
	//worksアニメーション--------------------

	// const works = document.querySelectorAll(".works-list");
	// const showWorks = (entries) => {
	// 	for (let i = 0; i < works.length; i++) {
	// 		const keyframes = {
	// 			opacity: [0, 1],
	// 			filter: ["blur(20px)", "blur(0)"],
	// 		};
	// 		const options = {
	// 			duration: 900,
	// 			delay: i * 500,
	// 			fill: "forwards",
	// 		};
	// 		entries[i].target.animate(keyframes, options);
	// 	}
	// };
	// const workObserver = new IntersectionObserver(showWorks);
	// works.forEach((work) => workObserver.observe(work));

	// kasuya追記　20230912 ここから
	const mainElement = document.querySelector("#main-content");
	if (mainElement.classList.contains("front-page")) {
		// トップページ用のJavaScriptコード
		//worksアニメーション--------------------

		const works = document.querySelectorAll(".works-list");
		const showWorks = (entries) => {
			entries.forEach((entry, i) => {
				const keyframes = {
					opacity: [0, 1],
					filter: ["blur(20px)", "blur(0)"],
				};
				const options = {
					duration: 900,
					delay: i * 500,
					fill: "forwards",
				};
				entry.target.animate(keyframes, options);
			});
		};
		const workObserver = new IntersectionObserver(showWorks, {
			threshold: 0.5, // 任意の閾値を設定してください
		});
		works.forEach((work) => workObserver.observe(work));
	}
	// kasuya追記20230912ここまで
	// 説明
	// showWorks 関数内で entries を forEach メソッドを使ってイテレートしています：IntersectionObserver は画面内に入った要素の情報を非同期的に提供します。
	// これらの情報は entries 配列に格納されます。showWorks 関数では、この entries 配列を forEach メソッドを使って各エントリー（要素）に対して同じ処理を行います。
	// これにより、各要素ごとにアニメーションを開始できます。

	// IntersectionObserver のコンストラクタにはオプションオブジェクトを追加し、threshold などの必要なオプションを設定することをお勧めします：IntersectionObserver のコンストラクタには
	// 監視する際の動作をカスタマイズするためのオプションを指定できます。例えば、threshold オプションは要素が画面内にどれだけ表示されたかを制御する閾値を設定します。
	// 0から1の値を持ち、要素が画面内に表示される割合を表します。閾値を0.5に設定すると、要素の半分が画面内に表示された時点でコールバック関数が実行されます。

	// これらの変更を加えることで、コードがより柔軟になり、エラーが解消され、アニメーションの制御が改善されます。閾値の値を調整することで、要素の表示されるタイミングを微調整できます。

	//skillsアニメーション-------------------------

	// const skillBlock1 = document.querySelector("#skill-block1");
	// const skillBlock2 = document.querySelector("#skill-block2");

	// const showBlock1 = (entries) => {
	// 	const keyframes = [
	// 		{
	// 			opacity: 0,
	// 			transform: "translateX(200px)",
	// 		},
	// 		{
	// 			opacity: 1,
	// 			transform: "translateX(0)",
	// 		},
	// 	];

	// 	const options = {
	// 		duration: 600,
	// 		fill: "forwards",
	// 	};

	// 	entries[0].target.animate(keyframes, options);
	// };

	// const block1Observer = new IntersectionObserver(showBlock1);
	// block1Observer.observe(document.querySelector("#skill-block2"));

	// const showBlock2 = (entries) => {
	// 	const keyframes = {
	// 		opacity: [0, 1],
	// 		translate: ["translateX(-200px)", "translateX(0)"],
	// 	};
	// 	entries[0].target.animate(keyframes, 600);
	// };
	// const block2Observer = new IntersectionObserver(showBlock2);
	// block1Observer.observe(skillBlock2);

		// kasuya追記　20230912 ここから
	const skillBlock1 = document.querySelector("#skill-block1");
	const skillBlock2 = document.querySelector("#skill-block2");

	const showBlock1 = (entries) => {
	  const keyframes = [
		{
		  opacity: 0,
		  transform: "translateX(200px)",
		},
		{
		  opacity: 1,
		  transform: "translateX(0)",
		},
	  ];

	  const options = {
		duration: 600,
		fill: "forwards",
	  };

	  entries[0].target.animate(keyframes, options);
	};

	const block1Observer = new IntersectionObserver(showBlock1);
	block1Observer.observe(skillBlock1);

	const showBlock2 = (entries) => {
	  const keyframes = [
		{
		  opacity: 0,
		  transform: "translateX(-200px)",
		},
		{
		  opacity: 1,
		  transform: "translateX(0)",
		},
	  ];

	  const options = {
		duration: 600,
		fill: "forwards",
	  };

	  entries[0].target.animate(keyframes, options);
	};

	const block2Observer = new IntersectionObserver(showBlock2);
	block2Observer.observe(skillBlock2);
// kasuya追記20230912ここまで
// 説明
// showBlock2 関数内での animate メソッドの呼び出しにおける keyframes の指定方法が正しくありませんでした。
// translate プロパティは正確なCSSプロパティではなく、transform プロパティの一部として指定する必要がありました。また、keyframes は配列の中にオブジェクトのリストで指定する必要があります。
// IntersectionObserver の設定に関して、block2Observer を skillBlock2 に対して設定する必要がありましたが、元のコードでは誤って block1Observer を使用していました。
// 修正後のコードでは、block2Observer を skillBlock2 に対して設定しました。

	// CONTACT文字数カウント-----------------------
	//textarea
	const message = document.querySelector("#message");
	//show-count
	const count = document.querySelector("#count");

	message.addEventListener("keyup", () => {
		count.textContent = message.value.length;
	});
} else if (mainElement.classList.contains("morework-page")) {
	// moreworkページ用のJavaScriptコード
} else if (mainElement.classList.contains("works-page")) {
	// worksページ用のJavaScriptコード
} else {
	// 他のページ用のJavaScriptコード
}
