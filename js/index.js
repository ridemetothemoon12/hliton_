$('document').ready(function() {
    let page = new fullpage(".fullpage", {
        licenseKey: "603D3EBB-D1B84561-B40D98B6-7A87C3D7",
        navigation:true,
        navigationTooltips: ["HOME", "ROOM", "OFFER", "DINING", "PROMOTION","MAP"],
        scrollOverflow: true,
        showActiveTooltip: true,
        navigationPosition: "left",
        afterLoad: function(origin, destination) {
            if(destination.index == 0) {
                $('.nav .nav_wrap').slideDown();
                $('.nav_second').hide();
                $('.nav_second .nav_wrap').hide();
            }
        },
        onLeave: function(origin, destination) {
            if(destination.index > 0) {
                $('.nav .nav_wrap').slideUp();
                $('.nav_second').slideDown();
                $('.nav_second .nav_wrap').slideDown();
            }
            else {
                $('.nav_second').slideUp();
                $('.nav_second .nav_wrap').slideUp();
            }
            if(destination.index > 1) {
                $('.nav_second').css("background-color", "rgba(255,255,255,0.5)");
            }
        }
    })

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
            height: "230px"
        }, 300)
    })
    $(".nav").mouseleave(function() {
        $('.nav_expand').stop().animate({
            height: "0"
        }, 300)
    })
})