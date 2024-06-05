<script setup>
import langData, { lang } from "@/lang.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/navigation';
const modules = [EffectCoverflow, Navigation, Autoplay];
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
    gsap.fromTo(".section__content-swiper", { y: -100, opacity: 0 }, {
        opacity: 1, y: 0, duration: 1.5,
        scrollTrigger: {
            trigger: ".section__content-swiper",
            toggleActions: "restart pause resume none",
            start: '50px 80%',
        }
    });
    gsap.fromTo(".title2", { x: 100, opacity: 0 }, {
        opacity: 1, x: 0, duration: 1.5,
        scrollTrigger: {
            trigger: ".title2",
            toggleActions: "restart pause resume none",
            start: '50px 80%',
        }
    });
});
</script>

<template>
    <section class="section" id="projects">
        <div class="gradient2"></div>

        <div class="container section__content">

            <h2 class="title2">{{ langData.project[lang ? "en" : "ru"] }}</h2>

            <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'"
                :coverflowEffect="{
                rotate: 15,
                stretch: 0,
                depth: 300,
                modifier: 1,
                slideShadows: false,
            }" :autoplay="{ delay: 1800 }" loop="true" :modules="modules" class="section__content-swiper">
                <swiper-slide class="section__content-card">
                    <a href="https://github.com/fara585/YourMeal.git" target="_blank">
                        <i class="fab fa-github-square">
                        </i>
                    </a>
                    <video src="/src/assets/swiper/ym.mp4" autoplay muted loop></video>
                    <div class="section__card-box">
                        <h3>YourMeal</h3>
                        <div class="section__content-icons iconz2">
                            <img src="/src/assets/images/html.svg" alt="">
                            <img src="/src/assets/images/css.svg" alt="">
                            <img src="/src/assets/images/js.svg" alt="">
                            <img src="/src/assets/images/gsap.svg" alt="" class="gsap__logo">
                        </div>
                        <button>
                            <a class="button2" href="https://yourmeal-fara585.netlify.app/" target="_blank">
                                <span class="button2__icon-wrapper">
                                    <svg width="10" class="button2__icon-svg" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 14 15">
                                        <path fill="currentColor"
                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z">
                                        </path>
                                    </svg>
                                    <svg class="button2__icon-svg  button2__icon-svg--copy"
                                        xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                                        <path fill="currentColor"
                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z">
                                        </path>
                                    </svg>
                                </span>
                                view website
                            </a>
                        </button>
                    </div>
                </swiper-slide>
                <swiper-slide class="section__content-card second-git">
                    <a href="https://github.com/fara585/PizzaShop.git" target="_blank"><i
                            class="fab fa-github-square"></i></a>
                    <video src="/src/assets/swiper/IMG_5030.mp4" autoplay muted loop class="card__video"></video>
                    <div class="section__card-box">
                        <h3>PizzaShop</h3>
                        <div class="section__content-icons iconz">
                            <img src="/src/assets/images/html.svg" alt="">
                            <img src="/src/assets/images/css.svg" alt="">
                            <img src="/src/assets/images/js.svg" alt="">
                            <img src="/src/assets/images/lenis.svg" alt="">
                            <img src="/src/assets/images/scroll.svg" alt="">
                            <img src="/src/assets/images/gsap.svg" alt="" class="gsap__logo">
                        </div>
                        <button>
                            <a class="button2" href="https://pizzashop-fara.vercel.app/" target="_blank">
                                <span class="button2__icon-wrapper">
                                    <svg width="10" class="button2__icon-svg" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 14 15">
                                        <path fill="currentColor"
                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z">
                                        </path>
                                    </svg>
                                    <svg class="button2__icon-svg  button2__icon-svg--copy"
                                        xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                                        <path fill="currentColor"
                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z">
                                        </path>
                                    </svg>
                                </span>
                                view website
                            </a>
                        </button>
                    </div>
                </swiper-slide>
                <swiper-slide class="section__content-card">
                    <a href="https://github.com/fara585/e-book.git" target="_blank"><i
                            class="fab fa-github-square"></i></a>
                    <video src="/src/assets/swiper/eb.mp4" autoplay muted loop class="card__video"></video>
                    <div class="section__card-box">
                        <h3>E-Book</h3>
                        <div class="section__content-icons iconz">
                            <img src="/src/assets/images/html.svg" alt="">
                            <img src="/src/assets/images/css.svg" alt="">
                            <img src="/src/assets/images/js.svg" alt="">
                            <img src="/src/assets/images/swiper.svg" alt="">
                            <img src="/src/assets/images/scroll.svg" alt="">
                            <img src="/src/assets/images/gsap.svg" alt="" class="gsap__logo">
                        </div>
                        <button>
                            <a class="button2" href="https://ebook-fara585.vercel.app/" target="_blank">
                                <span class="button2__icon-wrapper">
                                    <svg width="10" class="button2__icon-svg" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 14 15">
                                        <path fill="currentColor"
                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z">
                                        </path>
                                    </svg>
                                    <svg class="button2__icon-svg  button2__icon-svg--copy"
                                        xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                                        <path fill="currentColor"
                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z">
                                        </path>
                                    </svg>
                                </span>
                                view website
                            </a>
                        </button>
                    </div>
                </swiper-slide>
                <swiper-slide class="section__content-card">
                    <a href="https://github.com/fara585/e-commerce.git" target="_blank"><i
                            class="fab fa-github-square"></i></a>
                    <video src="/src/assets/swiper/ec.mp4" autoplay muted loop class="card__video"></video>
                    <div class="section__card-box">
                        <h3>E-Commerce</h3>
                        <div class="section__content-icons iconz2">
                            <img src="/src/assets/images/html.svg" alt="">
                            <img src="/src/assets/images/css.svg" alt="">
                            <img src="/src/assets/images/js.svg" alt="">
                            <img src="/src/assets/images/lenis.svg" alt="">
                        </div>
                        <button>
                            <a class="button2" href="https://ecommerce-fara585.vercel.app/" target="_blank">
                                <span class="button2__icon-wrapper">
                                    <svg width="10" class="button2__icon-svg" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 14 15">
                                        <path fill="currentColor"
                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z">
                                        </path>
                                    </svg>
                                    <svg class="button2__icon-svg  button2__icon-svg--copy"
                                        xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                                        <path fill="currentColor"
                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z">
                                        </path>
                                    </svg>
                                </span>
                                view website
                            </a>
                        </button>
                    </div>
                </swiper-slide>
                <swiper-slide class="section__content-card">
                    <a href="https://github.com/fara585/Vue.js-firstProject-.git" target="_blank"><i
                            class="fab fa-github-square"></i></a>
                    <video src="/src/assets/swiper/car.mp4" autoplay muted loop class="card__video"></video>
                    <div class="section__card-box">
                        <h3>Car auction</h3>
                        <div class="section__content-icons iconz2">
                            <img src="/src/assets/images/vue.svg" alt="">
                            <img src="/src/assets/images/css.svg" alt="">
                            <img src="/src/assets/images/sass.svg" alt="">
                            <img src="/src/assets/images/lenis.svg" alt="">
                        </div>
                        <button>
                            <a class="button2" href="https://vue-js-first-project.vercel.app/" target="_blank">
                                <span class="button2__icon-wrapper">
                                    <svg width="10" class="button2__icon-svg" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 14 15">
                                        <path fill="currentColor"
                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z">
                                        </path>
                                    </svg>
                                    <svg class="button2__icon-svg  button2__icon-svg--copy"
                                        xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                                        <path fill="currentColor"
                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z">
                                        </path>
                                    </svg>
                                </span>
                                view website
                            </a>
                        </button>
                    </div>
                </swiper-slide>
                <swiper-slide class="section__content-card">
                    <a href="https://github.com/fara585/dBurger.git" target="_blank"><i
                            class="fab fa-github-square"></i></a>
                    <video src="/src/assets/swiper/db.mp4" autoplay muted loop class="card__video"></video>
                    <div class="section__card-box">
                        <h3>dBurger</h3>
                        <div class="section__content-icons iconz2">
                            <img src="/src/assets/images/html.svg" alt="">
                            <img src="/src/assets/images/css.svg" alt="">
                            <img src="/src/assets/images/swiper.svg" alt="">
                            <img src="/src/assets/images/js.svg" alt="">
                        </div>
                        <button>
                            <a class="button2" href="https://fara585.github.io/dBurger" target="_blank">
                                <span class="button2__icon-wrapper">
                                    <svg width="10" class="button2__icon-svg" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 14 15">
                                        <path fill="currentColor"
                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z">
                                        </path>
                                    </svg>
                                    <svg class="button2__icon-svg  button2__icon-svg--copy"
                                        xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                                        <path fill="currentColor"
                                            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z">
                                        </path>
                                    </svg>
                                </span>
                                view website
                            </a>
                        </button>
                    </div>
                </swiper-slide>
            </swiper>

        </div>
    </section>
</template>
