<script setup>;
import langData, { lang } from "@/lang.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted, ref } from "vue";
const toggleBurger = ref(false);
const article = ref(null);
const self = ref(null);
const volume = ref(true);
const audioElement = new Audio("/src/assets/music/birds39-forest-20772.mp3");
const toggleVolume = () => {
    volume.value = !volume.value;
    if (volume.value) {
        audioElement.pause();
    } else {
        audioElement.play();
        audioElement.autoplay = true;
        audioElement.loop = true;
    }
};
gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: article.value,
            start: "10%",
            end: "bottom",
            scrub: true,
        }
    });
    tl.to(self.value, {
        width: "480px",
        top: "110%",
        left: "40%",
        ease: "power1",
        duration: 2.5,
    });
    const mm = gsap.matchMedia();
    mm.add("(max-width: 1700px)", () => {
        tl.kill();
    });
    gsap.fromTo(".title", { x: 100, opacity: 0 }, {
        opacity: 1, x: 0, duration: 1.5,
        scrollTrigger: {
            trigger: ".title",
            toggleActions: "restart pause resume none",
            start: '50px 80%',
        }
    });
    gsap.fromTo(".header__content-top", { y: -100, opacity: 0 }, {
        opacity: 1, y: 0, duration: 1,
    });
    gsap.fromTo(".header__content-bottom", { opacity: 0 }, {
        opacity: 1, duration: 1.5, delay: 1
    });
});
</script>

<template>
    <header class="header" id="header">

        <div class="header__content">

            <div class="container header__content-top">

                <h1 class="header__top-title">{{ langData.portfolio[lang ? "en" : "ru"] }}</h1>

                <ul class="header__top-list" :class="toggleBurger ? 'active' : ''">
                    <li>
                        <a href="#header" class="header__list-items">
                            <i class=" fas fa-home"></i>
                            <span>{{ langData.home[lang ? "en" : "ru"] }}</span>
                        </a>
                    </li>
                    <li>
                        <a href="#about" class="header__list-items">
                            <i class="fas fa-user"></i>
                            <span> <span>{{ langData.about[lang ? "en" : "ru"] }}</span></span>
                        </a>
                    </li>
                    <li>
                        <a href="#skills" class="header__list-items">
                            <i class="far fa-code"></i>
                            <span>{{ langData.skills[lang ? "en" : "ru"] }}</span>
                        </a>
                    </li>
                    <li>
                        <a href="#projects" class="header__list-items">
                            <i class="fas fa-tasks"></i>
                            <span>{{ langData.project[lang ? "en" : "ru"] }}</span>
                        </a>
                    </li>
                    <li>
                        <a href="#travel" class="header__list-items">
                            <i class="far fa-suitcase-rolling"></i>
                            <span>{{ langData.travel[lang ? "en" : "ru"] }}</span>
                        </a>
                    </li>
                    <li>
                        <a href="#contact" class="header__list-items">
                            <i class="fas fa-phone-alt"></i>
                            <span>{{ langData.contact[lang ? "en" : "ru"] }}</span>
                        </a>
                    </li>
                </ul>

                <div class="header__top-block">

                    <a href="#abc" class="header__top-link" type="button">
                        <i class="fal fa-arrow-to-bottom"></i>
                    </a>

                    <a href="#abv" class="button" type="button">
                        <span class="button__text">{{ langData.cv[lang ? "en" : "ru"] }}</span>
                        <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35"
                                id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg">
                                <path
                                    d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z">
                                </path>
                                <path
                                    d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z">
                                </path>
                                <path
                                    d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z">
                                </path>
                            </svg></span>
                    </a>

                    <button class="header__top-language" @click="lang = !lang">
                        <img src="/src//assets/images/icons8-usa-48.png" alt="" v-if="lang">
                        <img src="/src//assets/images/icons8-russian-federation-48.png" alt="" v-else>
                        <span>{{ lang ? "En" : "Ru" }}</span>
                    </button>

                    <button class="header__top-volume" @click="toggleVolume">
                        <i class="fal fa-volume-mute" v-if="volume"></i>
                        <i class="fal fa-volume" v-else></i>
                    </button>

                    <div class="header-hamburger" :class="toggleBurger ? 'active' : ''"
                        @click="toggleBurger = !toggleBurger">
                        <span class="header-hamburger__bar"></span>
                        <span class="header-hamburger__bar"></span>
                        <span class="header-hamburger__bar"></span>
                    </div>

                </div>

            </div>

            <div class="container header__content-bottom">
                <h2 class="header__bottom-title">{{ langData.welcome[lang ? "en" : "ru"] }}</h2>
                <h3 class="header__bottom-subtitle">{{ langData.hope[lang ? "en" : "ru"] }}</h3>
                <p class="header__bottom-txt">{{ langData.trip[lang ? "en" : "ru"] }}</p>
            </div>

            <div class="layer layer__base"></div>
            <div class="layer layer__middle"></div>
            <div class="layer layer__front"></div>
        </div>

    </header>

    <article ref="article" class="main__article" id="about">
        <div class="container main__article-content">
            <img src="/src/assets/images/self.png" alt="" ref="self" />

            <div class="main__content-right">
                <h2 class="main__right-title">{{ langData.name[lang ? "en" : "ru"] }}</h2>
                <p class="main__right-txt">
                    {{ langData.aboutme[lang ? "en" : "ru"] }}
                </p>
            </div>
        </div>
    </article>

    <section class="skills" id="skills">
        <div class="gradient"></div>
        <div class="skills__content">
            <h3 class="title">{{ langData.skills[lang ? "en" : "ru"] }}</h3>
            <div class="skills__logos">
                <div class="skills__logos-slide">
                    <img src="/src/assets/images/infinite/html.svg" alt="">
                    <img src="/src/assets/images/infinite/css.svg" alt="">
                    <img src="/src/assets/images/infinite/sass.svg" alt="">
                    <img src="/src/assets/images/infinite/js.svg" alt="">
                    <img src="/src/assets/images/infinite/gsap.svg" alt="">
                    <img src="/src/assets/images/infinite/scroll.svg" alt="">
                    <img src="/src/assets/images/infinite/lenis.svg" alt="">
                    <img src="/src/assets/images/infinite/swiper.svg" alt="">
                    <img src="/src/assets/images/infinite/vue.svg" alt="">
                    <img src="/src/assets/images/infinite/tail.svg" alt="">
                </div>
                <div class="skills__logos-slide">
                    <img src="/src/assets/images/infinite/html.svg" alt="">
                    <img src="/src/assets/images/infinite/css.svg" alt="">
                    <img src="/src/assets/images/infinite/sass.svg" alt="">
                    <img src="/src/assets/images/infinite/js.svg" alt="">
                    <img src="/src/assets/images/infinite/gsap.svg" alt="">
                    <img src="/src/assets/images/infinite/scroll.svg" alt="">
                    <img src="/src/assets/images/infinite/lenis.svg" alt="">
                    <img src="/src/assets/images/infinite/swiper.svg" alt="">
                    <img src="/src/assets/images/infinite/vue.svg" alt="">
                    <img src="/src/assets/images/infinite/tail.svg" alt="">
                </div>
                <div class="skills__logos-slide">
                    <img src="/src/assets/images/infinite/html.svg" alt="">
                    <img src="/src/assets/images/infinite/css.svg" alt="">
                    <img src="/src/assets/images/infinite/sass.svg" alt="">
                    <img src="/src/assets/images/infinite/js.svg" alt="">
                    <img src="/src/assets/images/infinite/gsap.svg" alt="">
                    <img src="/src/assets/images/infinite/scroll.svg" alt="">
                    <img src="/src/assets/images/infinite/lenis.svg" alt="">
                    <img src="/src/assets/images/infinite/swiper.svg" alt="">
                    <img src="/src/assets/images/infinite/vue.svg" alt="">
                    <img src="/src/assets/images/infinite/tail.svg" alt="">
                </div>
                <div class="skills__logos-slide">
                    <img src="/src/assets/images/infinite/html.svg" alt="">
                    <img src="/src/assets/images/infinite/css.svg" alt="">
                    <img src="/src/assets/images/infinite/sass.svg" alt="">
                    <img src="/src/assets/images/infinite/js.svg" alt="">
                    <img src="/src/assets/images/infinite/gsap.svg" alt="">
                    <img src="/src/assets/images/infinite/scroll.svg" alt="">
                    <img src="/src/assets/images/infinite/lenis.svg" alt="">
                    <img src="/src/assets/images/infinite/swiper.svg" alt="">
                    <img src="/src/assets/images/infinite/vue.svg" alt="">
                    <img src="/src/assets/images/infinite/tail.svg" alt="">
                </div>
            </div>
            <div class="skills__media">
                <h4 class="title">{{ langData.skills[lang ? "en" : "ru"] }}</h4>
                <div class="skills__media-block">
                    <div class="skills__media-card">
                        <img src="/src/assets/images/infinite/html.svg" alt="">
                    </div>
                    <div class="skills__media-card">
                        <img src="/src/assets/images/infinite/css.svg" alt="">
                    </div>
                    <div class="skills__media-card">
                        <img src="/src/assets/images/infinite/sass.svg" alt="">
                    </div>
                    <div class="skills__media-card">
                        <img src="/src/assets/images/infinite/js.svg" alt="">
                    </div>
                    <div class="skills__media-card">
                        <img src="/src/assets/images/infinite/gsap.svg" alt="">
                    </div>
                    <div class="skills__media-card">
                        <img src="/src/assets/images/infinite/scroll.svg" alt="">
                    </div>
                    <div class="skills__media-card">
                        <img src="/src/assets/images/infinite/lenis.svg" alt="">
                    </div>
                    <div class="skills__media-card">
                        <img src="/src/assets/images/infinite/swiper.svg" alt="">
                    </div>
                    <div class="skills__media-card">
                        <img src="/src/assets/images/infinite/vue.svg" alt="">
                    </div>
                    <div class="skills__media-card">
                        <img src="/src/assets/images/infinite/tail.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
