const swiper = new Swiper('.heroSwiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    navigation: {
        nextEl: '.swiper-right',
        prevEl: '.swiper-left',
    },
    on: {
        slideChange() {
            let currentWrap = document.querySelector('.hero-current-swiper-slide'),
                totalWrap = document.querySelector('.hero-total-swiper-slides'),
                ollSliders = this.slides.length, // рахуємо всі слайди
                slIndex = this.realIndex + 1, // беремо слайд що показується
                numIndex = (slIndex <= 10) ? '0' : '', // якщо номер слайдо що показується менше або дорівнює 10 то ставимо 0 , якщо ні то  не ставимо нічого
                numOll = (ollSliders <= 10) ? '0' : ''; // якщо кількість всіх слайдів менше або дорівнює 10 то ставимо 0 , якщо ні то  не ставимо нічого
            currentWrap.innerHTML = numIndex.toString() + slIndex.toString();
            totalWrap.innerHTML = numOll.toString() + ollSliders.toString();
        }
    }
});