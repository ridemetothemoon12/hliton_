$('document').ready(function() {
    $(".location").mouseenter(function() {
        $('.waypoint').stop().animate({
            left: "100%"
        }, 1000)
    })
    $(".location").mouseleave(function() {
        $('.waypoint').stop().animate({
            left: "70%"
        }, 1000)
    })

    $(".nav").mouseenter(function() {
        $('.nav_expand').stop().animate({
            height: "310px"
        }, 300)
        $(this).addClass('on');
    })
    $(".nav").mouseleave(function() {
        $('.nav_expand').stop().animate({
            height: "0"
        }, 300)
        $(this).removeClass('on');
    })

    $(".ham").click(function() {
        if($('.nav_expand').height() == 0) {
            $('.nav_expand').stop().animate({
                height: "310px"
            }, 300)
            $('.nav_second a').css("display", "block");
            $(this).addClass("on");
        }
        else {
            $('.nav_expand').stop().animate({
                height: "0px"
            }, 300)
            $('.nav_second a').css("display", "none");
            $(this).removeClass("on");
        }
    })


    // 37.5553, 126.9758
})