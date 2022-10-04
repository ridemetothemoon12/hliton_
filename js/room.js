$('document').ready(function() {
    $('.menu').hover(function() {
        $('.nav_expand').stop().animate({
            height: "300px"
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
    $.ajax({
        url: "js/item.json",
        success: function(e){
            e.map((item, index)=> {
                let dom = "";
                dom += "<div class='item'>"
                dom += "<div class='left'>"
                dom += `<img src=${item.img} alt=${item.mainTitle} >`
                dom += "</div>"
                dom += "<div class='right'>"
                dom += "<div class='right_wrap'>"
                dom += `<h3>${item.mainTitle}</h3>`
                dom += `<p>${item.subTitle}</p>`
                dom += "<div class='text'>"
                dom += `<p class="sub_title">정원</p>`
                dom += `<p>${item.subText1}</p>`
                dom += `<p class="sub_title">위치</p>`
                dom += `<p>${item.subText2}</p>`
                dom += `<p class="sub_title">룸구성</p>`
                dom += `<p>${item.subText3}</p>`
                dom += "<div class='btn'>"
                dom += `<p>VIEW MORE</p>`
                dom += "</div></div></div></div></div>"
                $(".content_1 .content_wrap").append(dom)
            })
        }
    })
})