window.onload = function () {
  // Lang(言語切替)　20200706　中国語ページ制作
  // ===================================================
  let lang = $("html").prop("lang");
  let bodyId = $("body").prop("id");
  let loc = location.href; //現在のページ
  let result01;
  let result02;

  // ハンバーガーメニューのクリックイベント
  $(".js-humberger").on("click", function(e) {
    if ($(window).width() <= 1024) {
      e.stopPropagation();
      $(".header-bottom").toggleClass("is-active");
      $(".menu-overlay").toggleClass("is-active");
    }
  });

  // 閉じるボタンのクリックイベント
  $(".js-close_btn").on("click", function(e) {
    if ($(window).width() <= 1024) {
      e.stopPropagation();
      $(".header-bottom").removeClass("is-active");
      $(".menu-overlay").removeClass("is-active");
    }
  });

  // header-bottom以外の要素がクリックされた時のイベント
  $(document).on("click", function(e) {
    if ($(window).width() <= 1024) {
      if (!$(e.target).closest(".header-bottom").length) {
        $(".header-bottom").removeClass("is-active");
        $(".menu-overlay").removeClass("is-active");
      }
    }
  });

  // header-bottomのクリックイベントの伝播を停止
  $(".header-bottom").on("click", function(e) {
    if ($(window).width() <= 1024) {
      e.stopPropagation();
    }
  });

  if (lang == "" || lang == "ja") {
    //現在＝日本語、01英語、02中国語
    result01 = loc.replace("/brandmanagement", "/brandmanagement/en");
    if (loc.indexOf("index") < 0 && bodyId.indexOf("home") >= 0) {
      result01 = result01 + "index_en.html";
    } else {
      result01 = result01.replace(".html", "_en.html");
    }
    result02 = loc.replace("/brandmanagement", "/brandmanagement/zh");
    if (loc.indexOf("index") < 0 && bodyId.indexOf("home") >= 0) {
      result02 = result02 + "index_zh.html";
    } else {
      result02 = result02.replace(".html", "_zh.html");
    }
  } else if (lang == "en") {
    //現在＝英語、01日本語、02中国語
    result01 = loc
      .replace("/brandmanagement/en", "/brandmanagement")
      .replace("_en.html", ".html");
    result02 = loc
      .replace("/brandmanagement/en", "/brandmanagement/zh")
      .replace("_en.html", "_zh.html");
  } else {
    //現在＝中国語、01英語、02日本語
    result01 = loc
      .replace("/brandmanagement/zh", "/brandmanagement/en")
      .replace("_zh.html", "_en.html");
    result02 = loc
      .replace("/brandmanagement/zh", "/brandmanagement")
      .replace("_zh.html", ".html");
  }
  $("#lang01").prop("href", result01);
  $("#lang02").prop("href", result02);

  // アコーディオンの機能
  $(document).ready(function () {
    $(".js-accordion-header").on("click", function (e) {
      // SPの場合のみイベントの伝播を停止
      if ($(window).width() <= 1024) {
        e.stopPropagation();
      }
      $(this).toggleClass("is-active");
    });

    // フッタートップアコーディオン
    $(".js-footer-top-accordion-trigger").on("click", function(e) {
      e.preventDefault();
      $(this).toggleClass("is-active");
    });

    // フッターミドルタイトルアコーディオン
    $(".js-middle-title").on("click", function(e) {
      e.preventDefault();
      $(this).toggleClass("is-active");
    });
  });

  // ヘッダーの固定制御
  let lastScrollTop = 0;
  const $header = $(".header");
  const $headerMiddle = $(".header-middle");
  const $main = $("main");

  function updateHeaderPosition() {
    const currentScrollTop = $(window).scrollTop();
    const headerMiddleBottom = $headerMiddle.offset().top + $headerMiddle.outerHeight();
    const isMobile = $(window).width() <= 1024;

    if (isMobile) {
      // SPの場合はスクロール位置に応じて固定
      if (currentScrollTop > 0) {
        $header.addClass("is-sp-fixed");
      } else {
        $header.removeClass("is-sp-fixed");
      }
    } else {
      // PCの場合は従来の動作
      if (currentScrollTop >= headerMiddleBottom) {
        $header.addClass("is-scrolled");
        $main.addClass("is-header-fixed");
      } else {
        $header.removeClass("is-scrolled");
        $main.removeClass("is-header-fixed");
      }
    }

    lastScrollTop = currentScrollTop;
  }

  // 初期表示時とリサイズ時に実行
  updateHeaderPosition();
  $(window).on("resize", updateHeaderPosition);
  $(window).on("scroll", updateHeaderPosition);

  // メガメニューの表示/非表示とヘッダーの固定
  $(document).ready(function () {
    // ヘッダーの固定
    const $headerBottom = $(".header-bottom");
    const $headerMiddle = $(".header-middle");
    const $header = $(".header");

    function updateHeaderPosition() {
      const headerMiddleBottom =
        $headerMiddle.offset().top + $headerMiddle.outerHeight();

      if ($(window).scrollTop() >= headerMiddleBottom) {
        $header.addClass("is-scrolled");
        $main.addClass("is-header-fixed");
      } else {
        $header.removeClass("is-scrolled");
        $main.removeClass("is-header-fixed");
      }
    }

    // 初期表示時の状態を設定
    updateHeaderPosition();

    // スクロール時の処理
    $(window).on("scroll", updateHeaderPosition);

    // メガメニュートリガーのクリックイベント
    $(".mega-menu-trigger").on("click", function (e) {
      e.preventDefault();
      const megaMenuId = $(this).data("mega-menu-id");
      const $megaMenu = $(`#${megaMenuId}`);
      const $triggerLink = $(this).find("a");

      // 他のメガメニューとトリガーを非表示
      if ($(window).width() >= 1024) {
        $(".mega-menu-trigger").removeClass("is-active");
      }
      $(".mega-menu.js-mega-menu").removeClass("is-active");
      $(".mega-menu-trigger a").removeClass("is-active");

      // クリックされたメニューとトリガーを表示
      $megaMenu.addClass("is-active");

      $triggerLink.addClass("is-active");
      if ($(window).width() <= 1024) {
        $(this).toggleClass("is-active");
      }else{
        $(this).addClass("is-active");
      }
    });

    // 閉じるボタンのクリックイベント
    $(".close-mega-menu img").on("click", function () {
      const $megaMenu = $(this).closest(".mega-menu");
      const megaMenuId = $megaMenu.attr("id");
      const $trigger = $(
        `.mega-menu-trigger[data-mega-menu-id="${megaMenuId}"]`
      );
      const $triggerLink = $trigger.find("a");
      $(".main-nav-link").removeClass("is-active");
      $(".mega-menu-trigger").removeClass("is-active");

      $megaMenu.removeClass("is-active");
      $triggerLink.removeClass("is-active");
    });
  });
};

