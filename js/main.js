$(function () {
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 39){  
            $('.navigation').addClass("sticky");
        }
        else{
            $('.navigation').removeClass("sticky");
        }
        if ($(this).scrollTop() > 39){  
            $('.main').addClass("sticky-scroll");
        }
        else{
            $('.main').removeClass("sticky-scroll");
        }
    });

    $('.burger__btn').click (function () {
        $('.burger__btn').toggleClass('cross');
        $('nav').toggleClass('menu-collapse');
        $('.menu').toggleClass('menu-opened');
    });

});