
$(function () {
    $('#bgndVideo').YTPlayer(
        {
            videoURL: 'https://youtu.be/eAJmJw0OPnc',
            containment: '.box',
            autoPlay: true,
            showControls: false,
            playOnlyIfVisible: true,
        }
    );

});

$(function () {

    $('.main_visual_slide').on('init afterChange', function () {
        const current = $('.main_visual_slide .slick-current');
        current.addClass('on').siblings().removeClass('on')
    })

    $('.main_visual_slide').slick({
        arrows: false,
        dots: false,
        pauseOnHover: false,
        useTransform: false,
        speed: 500,
    });

    $('.arrows .prev').on('click', function () {
        $('.main_visual_slide').slick('slickPrev')
    });

    $('.arrows .next').on('click', function () {
        $('.main_visual_slide').slick('slickNext')
    });


    $('.main_visual .dots li button').on('click', function () {
        let idx = $(this).parent().index();

        $('.main_visual_slide').slick('slickGoTo', idx)
    })

});



$(function () {
    $('.main_content_slide').slick({
        arrows: false,
        dots: false,
        slidesToShow: 4,

    });

    $('.c_arrows .prev').on('click', function () {
        $('.main_content_slide').slick('slickPrev')
    });

    $('.c_arrows .next').on('click', function () {
        $('.main_content_slide').slick('slickNext')
    });


    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('#header').addClass('on')
        } else {
            $('#header').removeClass('on')
        }
    })
})


$(function () {
    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 1000)
    })

    $('.to_bottom').on('click', function () {
        $('html,body').animate({ scroll: 0 }, 1000)
    })
});

$(function () {


    const tl = gsap.timeline();

    tl
        .from('.main_banner .title', { y: 100, opacity: 0, delay: 0.5, })
        .from('.main_content_slide', { x: -100, opacity: 0, delay: 0.5, })
        .from('.intro .star', { y: 200, opacity: 0, rotate: 720 })

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".main_visual", {
        scrollTrigger: {
            trigger: ".main_visual  ",
            toggleActions: "restart none reverse none"
        },
        x: 400, duration: 2,
    })

});

