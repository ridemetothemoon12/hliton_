$('document').ready(function() {
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
            clickable: true
        }
    })
    const swiper_2 = new Swiper(".swiper_content_2", {
        effect: "fade",
        slidesPerView: "auto",
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    })
    const swiper_3 = new Swiper(".swiper_content_background", {
        effect: "fade",
        slidesPerView: "auto"
    })

    swiper.on("transitionEnd", function(e){
        var slideIndex = swiper.realIndex;
        $('.line').removeClass("on");
        $('.line').eq(slideIndex).addClass("on");
    });

    $(".line").click(function() {
        let i = $(this).index();
        swiper.slideTo(i+1)
    });
    
    swiper_1.on("transitionEnd", function(e) {
        let textArr = ["비스타 듀플렉스","파크힐 듀플렉스","남대문 듀플렉스"];
        let textArr_sub = ["주방과 침실, 응접과 집무실, 자쿠지 등 최고 시설이 갖춰진 공간으로 최상의 서비스와 품격을 느끼실 수 있습니다.",
        "복층 구조로 남산을 바라보고 있어 자연의 향취를 마음껏 즐길 수 있는 공간입니다.",
        "탁 트인 통 유리를 통해 사계절의 변화를 느낄 수 있는 남산을 한눈에 바라볼 수 있으며, 내려다 보이는 서울 시내의 야경은 특히 일품입니다."]
        var slide_1_Index = swiper_1.realIndex;
        $(".item_left .text h3").text(textArr[slide_1_Index]);
        $(".item_left .text p").text(textArr_sub[slide_1_Index]);
    })

    swiper_2.on("transitionEnd", function(e) {
        var slide_2_Index = swiper_2.realIndex;
        $(".promotion .text .content_wrap").removeClass("on");
        $(".promotion .text .content_wrap").eq(slide_2_Index).addClass("on");
    })

    $(".offer .content li").click(function() {
        let j = $(this).index();
        $(".offer .content li").removeClass("on");
        $(this).addClass("on");

        $(".description .text").removeClass("on");
        $(".description .text").eq(j).addClass("on");
        swiper_3.slideTo(j);
    })

    const swiper_wedding = new Swiper(".swiper_wedding", {
        effect: "slide",
        slidesPerView: "auto",
        spaceBetween: 90,
        loop: true,
        centeredSlides:true,
        speed:500,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
    })
    $(".bar .bar-wrap").stop().animate({
        width: "70px"
    }, 3000)

    let slichk = true;

    swiper_wedding.on("transitionEnd", function(e){
        var slideIndex = swiper_wedding.realIndex;
        if(slideIndex == 0){
            if(slichk == true){
                return
            }
            $(".bar .bar-wrap").css("width", 0).stop().animate({
                width: (slideIndex+1) * 70 + "px"
            }, 3000)
            slichk = true


        }else if(slideIndex == 2){
            $(".bar .bar-wrap").css("width", (slideIndex) * 70 + "px")
            $(".bar .bar-wrap").stop().animate({
                width: (slideIndex+1) * 70 + "px"
            }, 3000)
            slichk = false
        }else{
            $(".bar .bar-wrap").css("width", (slideIndex) * 70 + "px")

            $(".bar .bar-wrap").stop().animate({
                width: (slideIndex+1) * 70 + "px"
            }, 3000)
        }
        console.log(slideIndex)
        
    });
    
    swiper_wedding.on("transitionEnd", function(e){ 
        let thisIndex = e.realIndex;
        $('.first').text("")
        $('.first').append("0" + (thisIndex+1));
    });

})  