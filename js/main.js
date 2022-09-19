$(function(){

    $('.header__menu-btn').on('click', function(){
        $('.header__top-inner').toggleClass('header__top-inner--active');
    });

    $('.blog__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    var mixer = mixitup('.gallery__content');
});