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

    $(".nav .menu_left, .nav .menu_right").mouseenter(function() {
        $('.nav_expand').stop().animate({
            height: "380px"
        }, 300)
        $(".nav").addClass('on');
    })
    $(".one").mouseleave(function() {
        $('.one').stop().animate({
            height: "0"
        }, 300)
        $(".nav").removeClass('on');
    })

    $(".ham").click(function() {
        if($('.nav_expand').height() == 0) {
            $('.nav_expand').stop().animate({
                height: "380px"
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

    $(".top img").hover(function() {
        let b = /color/
        let color = $(this).attr('src').split('/').slice(0, 1) + b + $(this).attr('src').split('/').slice(1,2);
        $(this).attr('src', color);
    }, function() {
        let white = $(this).attr('src').split('/').slice(0, 1) + "/" + $(this).attr('src').split('/').slice(2,3);
        $(this).attr('src', white);
    });
    // 37.5553, 126.9758
})