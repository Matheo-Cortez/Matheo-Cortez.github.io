(function ($) {
  var typed = new Typed(".type", {
    strings: [
      "",
      "Développeur Web",
      "WebDesigner",
    ],

    typeSpeed: 110,
    loop: true,
    showCursor: false,
  });


  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

 
  /*MIXIT UP PLUGIN*/
  var containerEl = document.querySelector(".mix_container");
  var mixer = mixitup(containerEl, {
    selectors: {
      control: "[our-mixitup-control]",
    },
  });
  /*MIXIT UP PLUGIN*/




  $(".about-w-f").owlCarousel({
    loop: true,

    autoplay: false,

    items: 1,

    dots: false,

  

    nav: false,

    responsive: {
      0: {
        items: 1,
      },

      767: {
        items: 1,
      },

      992: {
        items: 1,
      },

      1200: {
        items: 1,
      },
    },
  });

  function smoothSctollTop() {
    $(".smooth-scroll a").on("click", function (event) {
      var target = $(this.getAttribute("href"));

      if (target.length) {
        event.preventDefault();

        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: target.offset().top - 0,
            },
            1500
          );
      }
    });
  }

  smoothSctollTop();

  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".scroll-up").fadeIn(200);
    } else {
      $(".scroll-up").fadeOut(200);
    }
  });

  //Animate the scroll to yop

  $(".scroll-up").on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  //  Header qui suit

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll < 100) {
      $("#header-sticky").removeClass("sticky");
    } else {
      $("#header-sticky").addClass("sticky");
    }
  });

  var top_offset = $(".header-area").height() - 10;
  $(".main-menu nav ul").onePageNav({
    currentClass: "active",
    scrollOffset: top_offset,
  });


  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });
})(jQuery);

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});
