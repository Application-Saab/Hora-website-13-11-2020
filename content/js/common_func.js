! function(a) {
    "use strict";
    a(window).on("load", function() {
        a('[data-loader="circle-side"]').fadeOut(), a("#preloader").delay(350).fadeOut("slow"), a("body").delay(350), a(window).scroll()
    }), new LazyLoad({
        elements_selector: ".lazy"
    }), a(window).on("scroll", function() {
        1 < a(this).scrollTop() ? a(".element_to_stick").addClass("sticky") : a(".element_to_stick").removeClass("sticky")
    }), a(window).scroll(), a(".background-image").each(function() {
        a(this).css("background-image", a(this).attr("data-background"))
    }), scrollCue.init({
        percentage: .85
    }), a("a.open_close").on("click", function() {
        a(".main-menu").toggleClass("show"), a(".layer").toggleClass("layer-is-visible")
    }), a("a.show-submenu").on("click", function() {
        a(this).next().toggleClass("show_normal")
    }), a(window).bind("load resize", function() {
        a(window).width() <= 768 ? a("a.cart_bt").removeAttr("data-bs-toggle", "dropdown") : a("a.cart_bt").attr("data-bs-toggle", "dropdown")
    }), a(".opacity-mask").each(function() {
        a(this).css("background-color", a(this).attr("data-opacity-mask"))
    }), a(window).scroll(function() {
        800 <= a(window).scrollTop() ? a("#toTop").addClass("visible") : a("#toTop").removeClass("visible")
    }), a("#toTop").on("click", function() {
        return a("html, body").animate({
            scrollTop: 0
        }, 500), !1
    }), a(".magnific-gallery").each(function() {
        a(this).magnificPopup({
            delegate: "a",
            type: "image",
            preloader: !0,
            gallery: {
                enabled: !0
            },
            removalDelay: 500,
            callbacks: {
                beforeOpen: function() {
                    this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = this.st.el.attr("data-effect")
                }
            },
            closeOnContentClick: !0,
            midClick: !0
        })
    }), a(".menu-gallery").each(function() {
        a(this).magnificPopup({
            delegate: "figure a",
            type: "image",
            preloader: !0,
            gallery: {
                enabled: !0
            },
            removalDelay: 500,
            callbacks: {
                beforeOpen: function() {
                    this.st.image.markup = this.st.image.markup.replace("mfp-figure", "mfp-figure mfp-with-anim"), this.st.mainClass = this.st.el.attr("data-effect")
                }
            },
            closeOnContentClick: !0,
            midClick: !0
        })
    }), a("#staff").owlCarousel({
        center: !0,
        items: 2,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1e3: {
                items: 4
            }
        }
    }),a("#chefsection").owlCarousel({
        // center: !0,
        items: 2,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        margin: 10,
        responsive: {
            600: {
                items: 1
            },
            1e3: {
                items: 1,
                nav: !1
            }
        }
    }), a(".carousel_testimonials").owlCarousel({
        items: 1,
        loop: !0,
        autoplay: !1,
        animateIn: "flipInX",
        margin: 40,
        stagePadding: 30,
        smartSpeed: 300,
        responsiveClass: !0,
        responsive: {
            600: {
                items: 1
            },
            1e3: {
                items: 1,
                nav: !1
            }
        }
    }), a(".btn_play, .video").magnificPopup({
        type: "iframe",
        closeMarkup: '<button title="%title%" type="button" class="mfp-close" style="font-size:24px; margin-right:-10px;">&#215;</button>'
    }), a('a[href^="#"].btn_scroll').on("click", function(e) {
        e.preventDefault();
        var t = this.hash,
            e = a(t);
        a("html, body").stop().animate({
            scrollTop: e.offset().top
        }, 800, "swing", function() {
            window.location.hash = t
        })
    })
}(window.jQuery);