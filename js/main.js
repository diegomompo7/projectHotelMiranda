// OPEN MENU
const btnMenu = document.querySelector(".nav__icon")
const menuMobile = document.querySelector(".menu--mobile")


const btnClosed = document.createElementNS("http://www.w3.org/2000/svg", "svg");
btnClosed.classList.add("nav__icon")
btnClosed.setAttribute("width", "16");
btnClosed.setAttribute("height", "16");
btnClosed.setAttribute("viewBox", "0 0 16 16");
btnClosed.setAttribute("fill", "none");
btnClosed.setAttribute("onclick", "menuNav()")


const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("d", "M2.49153 13.5013L13.4941 2.49871M13.4941 13.5013L2.49153 2.49871");
path.setAttribute("stroke", "black");
path.setAttribute("stroke-width", "2");

// Agregar el elemento de ruta al SVG
btnClosed.appendChild(path);

menuMobile.style.display = "none"

const menuNav = () => {
    if (menuMobile.style.display === "none") {
        menuMobile.style.display = "block"
        document.querySelector("nav").replaceChild(btnClosed, btnMenu)
    } else {
        menuMobile.style.display = "none"
        document.querySelector("nav").replaceChild(btnMenu, btnClosed)
    }
}

//SWIPER

console.log(document.body.offsetWidth)

const swiper = new Swiper('.mySwiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const swiperFeatures = new Swiper('.features__swiper', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    grid: {
        rows: 1, // Establecer inicialmente el número de filas
    },

});

const swiperMenu = new Swiper('.menu__items', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    centeredSlides: true,
    spaceBetween: 10,  
    navigation: {
        nextEl: ".menu__button--next",
        prevEl: ".menu__button--prev",
        lockClass: '.swiper-button-lock',
      },
    grid: {
        rows:3,
        fill: "row",
    },

});



document.onscroll = () => {
    const width = document.body.offsetWidth
    if (width >= 1000) {
        swiper[0].params.slidesPerView = 2
        swiper[0].params.centeredSlides = true
        swiper[0].params.spaceBetween = 30
        swiper[0].update()

        swiperFeatures.params.slidesPerView = 3
        swiperFeatures.params.grid.rows = 2
        swiperFeatures.params.grid.fill = "row"
        swiperFeatures.params.centeredSlides = false
        swiperFeatures.update()

        swiperMenu.params.slidesPerView = 2
        swiperMenu.params.slidesPerGroup= 6
        swiperMenu.params.grid.rows = 3
        swiperMenu.params.grid.fill = "row"
        swiperMenu.params.centeredSlides = false
        swiperMenu.update()

    } else {
        swiper[0].params.slidesPerView = 1;
        swiper[0].params.centeredSlides = false;
        swiper[0].params.spaceBetween = 0
        swiper[0].update()

        swiperFeatures.params.slidesPerView = 1
        swiperFeatures.params.slidesPerGroup= 1
        swiperFeatures.params.grid.rows = 3
        swiperFeatures.params.centeredSlides = true
        swiperFeatures.update()

        swiperMenu.params.slidesPerView = 1
        swiperMenu.params.slidesPerGroup= 1
        swiperMenu.params.grid.rows = 3
        swiperMenu.params.grid.fill = "row"
        swiperMenu.params.centeredSlides = true
        swiperMenu.update()
    
    }
}



//

const sendAlert = () => {
    alert("¡Thank you for your request! We have received it correctly. Someone from our Team will get back to you very soon.The Miranda Hotel")
}