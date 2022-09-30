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
                $('.nav_expand').addClass("one");
            }
        },
        onLeave: function(origin, destination) {
            if(destination.index > 0) {
                $('.nav .nav_wrap').slideUp();
                $('.nav_second').slideDown();
                $('.nav_second .nav_wrap').slideDown();
                $('.nav_expand').css("background-color", "white");
                $('.nav_second a').css("display", "none");
                $('.ham').removeClass("on");
                $('.nav_expand').removeClass("one");
            }
            else {
                $('.nav_second').slideUp();
                $('.nav_second .nav_wrap').slideUp();
                $('.nav_expand').addClass("nav_expand");
            }
            if(destination.index > 1) {
                $('.nav_second').css("background-color", "rgba(255,255,255,0.5)");
                $('.nav_expand').css("background-color", "rgba(255,255,255,0.5)");
            }
            $('.nav_expand').stop().animate({
                height: "0px"
            }, 300)
        }
    })
})
