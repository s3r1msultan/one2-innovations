$(document).ready(function () {
  $(".mobile-menu").hide();

  $(".burger-menu").click(function () {
    $(this).toggleClass("active");
    $(".mobile-menu").slideToggle();
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

jQuery(document).ready(function () {
  $("#phone").mask("+7 (999) 999-99-99");

  jQuery(".send-form").click(function () {
    var form = jQuery(this).closest("form");

    if (form.valid()) {
      form.css("opacity", ".5");
      var actUrl = form.attr("action");

      jQuery.ajax({
        url: actUrl,
        type: "post",
        dataType: "html",
        data: form.serialize(),
        success: function (data) {
          form.html(data);
          form.css("opacity", "1");
          //form.find('.status').html('форма отправлена успешно');
          //$('#myModal').modal('show') // для бутстрапа
        },
        error: function () {
          form.find(".status").html("серверная ошибка");
        },
      });
    }
  });
});
