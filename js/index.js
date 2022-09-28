$('document').ready(function() {
    let page = new fullpage(".fullpage", {
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

    const swiper = new Swiper(".swiper_main", {
        effect: "slide",
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        loop: true
    })
    const swiper_1 = new Swiper(".swiper_content_1", {
        effect: "slide",
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
        }
    })
    const swiper_2 = new Swiper(".swiper_content_2", {
        effect: "fade",
        slidesPerView: "auto",
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        }
    })

    swiper.on("transitionEnd", function(e){
        var slideIndex = swiper.realIndex;
        $('.line').removeClass("on");
        $('.line').eq(slideIndex).addClass("on");
    });
    $(".line").click(function() {
        let i = $(this).index();
        swiper.slideTo(i+1)
    })
    
    swiper_1.on("transitionEnd", function(e) {
        let textArr = ["비스타 듀플렉스","파크힐 듀플렉스","남대문 듀플렉스"];
        let textArr_sub = ["주방과 침실, 응접과 집무실, 자쿠지 등 최고 시설이 갖춰진 공간으로 최상의 서비스와 품격을 느끼실 수 있습니다.",
        "복층 구조로 남산을 바라보고 있어 자연의 향취를 마음껏 즐길 수 있는 공간입니다.",
        "탁 트인 통 유리를 통해 사계절의 변화를 느낄 수 있는 남산을 한눈에 바라볼 수 있으며, 내려다 보이는 서울 시내의 야경은 특히 일품입니다."]
        var slide_1_Index = swiper_1.realIndex;
        console.log(slide_1_Index);
        $(".item_left .text h3").text(textArr[slide_1_Index]);
        $(".item_left .text p").text(textArr_sub[slide_1_Index]);
    })

    $(".offer .content li").click(function() {
        let back_img = ["linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(../images/meeting.jpg)",
    "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(../images/casino.jpg)",
    "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(../images/spa.jpg)" ,
    "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(../images/lounge.jpg)", 
    "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(../images/pool.png)"]
        let j = $(this).index();
        $(".offer").css("background-image",back_img[j]);
        $(".offer .content li").removeClass("on");
        $(this).addClass("on");

        $(".description .text").removeClass("on");
        $(".description .text").eq(j).addClass("on");
    })

    swiper_2.on("transitionEnd", function(e) {
        var slide_2_Index = swiper_2.realIndex;
        $(".promotion .text .content_wrap").removeClass("on");
        $(".promotion .text .content_wrap").eq(slide_2_Index).addClass("on");
    })
})