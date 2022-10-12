$('document').ready(function() {
    $('.title_wrap span').each(function(i) {
        let thisAction = $(this);
        setTimeout(() => {
            thisAction.addClass("active");
        }, i*300);
    })
    $('p').addClass("active");

    $('.menu, .nav_expand').hover(function() {
        $('.nav_expand').stop().animate({
            height: "350px"
        },300)
        $('.nav').addClass("on")
    }, function() {
        $('.nav_expand').stop().animate({
            height: "0px"
        },300)
        $('.nav').removeClass("on")
    })

    $(window).scroll(function() {
        if($(window).scrollTop() > 960) {
            $(".nav").css("background-color", "#072745");
        }
        else {
            $(".nav").css("background-color", "transparent");
        }
    })

    $(".item").hover(function() {
        $(this).css("background-size", "102% 102%");
    })
})