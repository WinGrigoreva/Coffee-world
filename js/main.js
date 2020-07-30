$(function(){
    $(".magic-coffee__slider, .our-assortment__slider").slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-previous.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt=""></button>',
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    arrows: false
                }
            }
        ]
    })
});