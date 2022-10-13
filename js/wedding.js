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
        if($(window).scrollTop() > 1050) {
            counter();
        }
    })
    
    let once = false
    function counter() {
        if(once == false) {
            $('.count').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
    once = true
    }
})