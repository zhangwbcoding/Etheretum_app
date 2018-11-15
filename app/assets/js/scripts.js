(function($) {
    "use strict";

    /*----------------------------
     wow js active
    ------------------------------ */
    new WOW().init();




    // slider-active
    $('.slider-active').owlCarousel({
        margin: 0,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        nav: false,
        smartSpeed: 800,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    //slider-area background setting
    function sliderBgSetting() {
        if ($(".slider-area .slider-items").length) {
            $(".slider-area .slider-items").each(function() {
                var $this = $(this);
                var img = $this.find(".slider").attr("src");

                $this.css({
                    backgroundImage: "url(" + img + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                })
            });
        }
    }
    // slider-active
    $('.brand-active').owlCarousel({
        margin: 0,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        nav: false,
        smartSpeed: 800,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 2
            },
            450: {
                items: 3
            },
            768: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    });

    // slider-active
    $('.test-active').owlCarousel({
        margin: 0,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        nav: true,
        smartSpeed: 800,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // slider-active
    $('.agent-propertie-active').owlCarousel({
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        nav: true,
        smartSpeed: 800,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    // slider-active
    $('.blog-active').owlCarousel({
        margin: 30,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        nav: true,
        smartSpeed: 800,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            450: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
    // Parallax background
    function bgParallax() {
        if ($(".parallax").length) {
            $(".parallax").each(function() {
                var height = $(this).position().top;
                var resize = height - $(window).scrollTop();
                var parallaxSpeed = $(this).data("speed");
                var doParallax = -(resize / parallaxSpeed);
                var positionValue = doParallax + "px";
                var img = $(this).data("bg-image");

                $(this).css({
                    backgroundImage: "url(" + img + ")",
                    backgroundPosition: "50%" + positionValue,
                    backgroundSize: "cover",
                });

                if (window.innerWidth < 768) {
                    $(this).css({
                        backgroundPosition: "center center"
                    });
                }
            });
        }
    }
    bgParallax();



    // // stickey menu
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop(),
            mainHeader = $('#sticky-header'),
            mainHeaderHeight = mainHeader.innerHeight();

        // console.log(mainHeader.innerHeight());
        if (scroll > 265) {
            $("#sticky-header").addClass("sticky-menu");
        } else {
            $("#sticky-header").removeClass("sticky-menu");
        }
    });

    /*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*--
    Magnific Popup
    ------------------------*/
    function magnificPopup() {
        $('.popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }

        });

        $('.video-popup').magnificPopup({
            type: 'iframe',
            gallery: {
                enabled: true
            }

        })
    };


    // counter up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    // slicknav
    $('ul#navigation').slicknav({
        prependTo: ".responsive-menu-wrap"
    });

    $('.grid').imagesLoaded(function() { //image loaded

        // filter items on button click
        $('.portfolio-menu').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        // masonary activation
        var $grid = $('.grid').isotope({
            itemSelector: '.portfolio',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 2
            }
        })
    });
    $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    /*-------------------------------------------------------
        blog details
    -----------------------------------------------------*/
    if ($(".featured-properties-area,.team-area2").length) {
        var post = $(".featured-properties-wrap .featured-properties-img,.team-area2 .team-img");

        post.each(function() {
            var $this = $(this);
            var entryMedia = $this.find("img");
            var entryMediaPic = entryMedia.attr("src");

            $this.css({
                backgroundImage: "url(" + entryMediaPic + ")",
                backgroundSize: "cover",
                backgroundPosition: "center center",
            })
        })
    }

    function setTwoColEqHeight($col1, $col2) {
        var firstCol = $col1,
            secondCol = $col2,
            firstColHeight = $col1.innerHeight(),
            secondColHeight = $col2.innerHeight();

        if (firstColHeight > secondColHeight) {
            secondCol.css({
                "height": firstColHeight + 1 + "px"
            })
        } else {
            firstCol.css({
                "height": secondColHeight + 1 + "px"
            })
        }
    }
    setTwoColEqHeight($(".featured-properties-wrap .featured-properties-img,.team-area2 .team-img"), $(".featured-properties-wrap .featured-properties-content, .team-area2 .team-content"));
    // smttoh-scroll
    function scrollSpeed() {
        $.scrollSpeed(200, 800);
    };


    var $allNonRatinaImages = $("img:not([data-at2x])");
    $allNonRatinaImages.attr('data-no-retina', '');


    /*---------------------
     countdown
    --------------------- */
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
        });
    });

    /*-- price range start --*/
    function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var w1 = 40;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var w2 = 40;
        var r2 = x2 + w2;

        if (r1 < x2 || x1 > r2) return false;
        return true;

    }
    // slider call

    $('#slider').slider({
        range: true,
        min: 0,
        max: 1000,
        values: [100, 500],
        slide: function(event, ui) {

            $('.ui-slider-handle:eq(0) .price-range-min').html('$' + ui.values[0]);
            $('.ui-slider-handle:eq(1) .price-range-max').html('$' + ui.values[1]);
            $('.price-range-both').html('<i>$' + ui.values[0] + ' - </i>$' + ui.values[1]);

            //

            if (ui.values[0] === ui.values[1]) {
                $('.price-range-both i').css('display', 'none');
            } else {
                $('.price-range-both i').css('display', 'inline');
            }

            //

            if (collision($('.price-range-min'), $('.price-range-max')) === true) {
                $('.price-range-min, .price-range-max').css('opacity', '0');
                $('.price-range-both').css('display', 'block');
            } else {
                $('.price-range-min, .price-range-max').css('opacity', '1');
                $('.price-range-both').css('display', 'none');
            }

        }
    });

    $('.ui-slider-range').append('<span class="price-range-both value"><i>$' + $('#slider').slider('values', 0) + ' - </i>' + $('#slider').slider('values', 1) + '</span>');

    $('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">$' + $('#slider').slider('values', 0) + '</span>');

    $('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">$' + $('#slider').slider('values', 1) + '</span>');
    /*-- price range End --*/

    /*==================================
                LOAD MORE JQUERY
        ================================== */
    var list1 = $(".moreload");
    var numToShow1 = 3;
    var button1 = $(".loadmore-btn");
    var numInList1 = list1.length;

    list1.hide();
    if (numInList1 > numToShow1) {
        button1.show();
    }
    list1.slice(0, numToShow1).show();
    button1.on('click', function() {
        var showing1 = list1.filter(':visible').length;
        list1.slice(showing1 - 1, showing1 + numToShow1).fadeIn();
        var nowShowing1 = list1.filter(':visible').length;
        if (nowShowing1 >= numInList1) {
            button1.hide();
        }
    });


    // Single gallery slider
    function singleGalleryCarousel() {
        if ($('.service-active').length && $('.service-thumbnil-active').length) {

            var $sync1 = $(".service-active"),
                $sync2 = $(".service-thumbnil-active"),
                flag = false,
                duration = 500;

            $sync1
                .owlCarousel({
                    items: 1,
                    margin: 0,
                    nav: false,
                    dots: false
                })
                .on('changed.owl.carousel', function(e) {
                    if (!flag) {
                        flag = true;
                        $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                        flag = false;
                    }
                });

            $sync2
                .owlCarousel({
                    margin: 30,
                    items: 5,
                    nav: true,
                    dots: false,
                    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                    center: false,
                    responsive: {
                        0: {
                            items: 2,
                            autoWidth: false
                        },
                        400: {
                            items: 2,
                            autoWidth: false
                        },
                        500: {
                            items: 3,
                            center: false,
                            autoWidth: false
                        },
                        600: {
                            items: 4,
                            autoWidth: false
                        },
                        1200: {
                            items: 5,
                            autoWidth: false
                        }
                    },
                })
                .on('click', '.owl-item', function() {
                    $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);

                })
                .on('changed.owl.carousel', function(e) {
                    if (!flag) {
                        flag = true;
                        $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                        flag = false;
                    }
                });

        };
    }

    singleGalleryCarousel();

    /*====================================================
                    load-function
    ====================================================*/

    $(window).on('load', function() {
        /*-- preloader ---*/
        $('.preloader-wrap').fadeOut();
        /*-- herobg---*/
        sliderBgSetting()
        /*-- Two Col EqHeight---*/
        setTwoColEqHeight($(".featured-properties-wrap .featured-properties-img,.team-area2 .team-img"), $(".featured-properties-wrap .featured-properties-content, .team-area2 .team-content"));
        /*-- Scroll Speed---*/
        scrollSpeed()
        /*-- Popup images---*/
        magnificPopup()
        /*-- Parallax---*/
        bgParallax();

        singleGalleryCarousel();
    });



    $(window).on("scroll", function() {
        /*-- preloader ---*/
        $('.preloader-wrap').fadeOut();
        /*-- herobg---*/
        sliderBgSetting()

        /*-- Popup images---*/
        magnificPopup()
        /*-- Parallax---*/
        bgParallax();

        singleGalleryCarousel();
    });
    /*---------------------
    // Ajax Contact Form
    --------------------- */

    $('.cf-msg').hide();
    $('form#cf button#submit').on('click', function() {
        var fname = $('#fname').val();
        var subject = $('#subject').val();
        var email = $('#email').val();
        var msg = $('#msg').val();
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!regex.test(email)) {
            alert('Please enter valid email');
            return false;
        }

        fname = $.trim(fname);
        subject = $.trim(subject);
        email = $.trim(email);
        msg = $.trim(msg);

        if (fname != '' && email != '' && msg != '') {
            var values = "fname=" + fname + "&subject=" + subject + "&email=" + email + " &msg=" + msg;
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: values,
                success: function() {
                    $('#fname').val('');
                    $('#subject').val('');
                    $('#email').val('');
                    $('#msg').val('');

                    $('.cf-msg').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
                    setTimeout(function() {
                        $('.cf-msg').fadeOut('slow');
                    }, 4000);
                }
            });
        } else {
            $('.cf-msg').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
        }
        return false;
    });

})(jQuery);