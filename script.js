$(document).ready(function () {
  $(".burger-menu").click(function () {
    $(this).toggleClass("active");
    $(".mobile-menu").slideToggle(300, () => {});
    if ($(this).hasClass("active")) {
      $(".mobile-menu").css("display", "flex");
    }
  });

  $("nav a").on("click", function (event) {
    event.preventDefault();

    var targetId = $(this).attr("href"),
      targetOffset = $(targetId).offset().top;

    $("html, body").animate(
      {
        scrollTop: targetOffset,
      },
      500
    );
  });

  $(".mobile-menu a").on("click", function (event) {
    event.preventDefault();

    var targetId = $(this).attr("href"),
      targetOffset = $(targetId).offset().top;

    $("html, body").animate(
      {
        scrollTop: targetOffset,
      },
      500
    );
  });

  $("#suggestions a").on("click", function (event) {
    event.preventDefault();

    var targetId = $(this).attr("href"),
      targetOffset = $(targetId).offset().top;

    $("html, body").animate(
      {
        scrollTop: targetOffset,
      },
      500
    );
  });
});

var prevScrollPos = window.pageYOffset;

$(window).scroll(function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    $(".header").removeClass("hide");
    $(".mobile-menu").removeClass("hide");
  } else {
    $(".header").addClass("hide");
    $(".mobile-menu").addClass("hide");
  }

  prevScrollPos = currentScrollPos;
});

const select = document.querySelector(".contact-select");
const customSelect = new Choices(select, {
  searchEnabled: false,
  itemSelectText: "",
});
