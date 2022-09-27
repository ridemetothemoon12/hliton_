$('document').ready(function() {
    let page = new fullpage(".fullpage", {
        navigation:true,
        scrollOverflow: true,
    })

    const swiper = new Swiper(".swiper_main", {
        effect: "slide",
        loop: true
    })
    const swiper_1 = new Swiper(".swiper_content_1", {
        effect: "slide",
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
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
})