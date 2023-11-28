'use strict'

{
  // 2本線をバツ印にする
  // ハンバーガーメニューの要素
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  // ハンバーガーメニューがクリックされた時に表示されるメニュー画面の要素
  const navi = document.getElementById("hamburger-navigation");

  // ハンバーガーメニュー内の各セクションの要素
  const hamburgerMenuSections = document.querySelectorAll(".hamburger-menu-section");

  // ハンバーガーメニューをクリックした時の処理
  hamburgerMenu.addEventListener("click", function() {
    // toggleを使用することで、hamburgerクラスとhamburger-navigationIDに
    // activeクラスが存在する場合は削除、存在しない場合を追加する処理を自動で行ってくれる
    hamburgerMenu.classList.toggle("active");
    navi.classList.toggle('active');
    // hamburgerfade.classList.toggle('active');
    hamburgerMenuSections.forEach((hamburgerMenuSection) => {
      hamburgerMenuSection.classList.toggle("active");
    });
  });

  // ページネーション
  // jQuery(document).ready(function($){
  //   $('.page_number_link li').paginathing({
  //     perPage: 10,
  //     firstLast: false,
  //     prevText: false,
  //     nextText: false,
  //     activeClass: 'active',
  //   })
  // });
}