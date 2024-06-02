<script setup>
import langData, { lang } from "@/lang.js";
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCards } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/effect-cards';
const modules = [EffectCards];
gsap.registerPlugin(ScrollTrigger);
const plane = ref(null);
onMounted(() => {
    gsap.fromTo(".title3", { x: -100, opacity: 0 }, {
        opacity: 1, x: 0, duration: 1.5,
        scrollTrigger: {
            trigger: ".title3",
            toggleActions: "restart pause resume none",
            start: '50px 80%',
        }
    });
    gsap.fromTo(plane.value, { x: 150, opacity: 0 }, {
        opacity: 1, x: 0, duration: 1.5,
        scrollTrigger: {
            trigger: plane.value,
            toggleActions: "restart pause resume none",
            start: '50px 80%',
        }
    });
    gsap.fromTo(".travel__content-swiper", { x: -100, opacity: 0 }, {
        opacity: 1, x: 0, duration: 1.5,
        scrollTrigger: {
            trigger: ".travel__content-swiper",
            toggleActions: "restart pause resume none",
            start: '50px 80%',
        }
    });
    gsap.fromTo(".travel__content p", { opacity: 0 }, {
        opacity: 1, duration: 1.5, delay: .9,
        scrollTrigger: {
            trigger: ".travel__content p",
            // toggleActions: "restart pause resume none",
            start: '50px 80%',
        }
    });
});
</script>

<template>
    <section class="travel" id="travel">
        <div class="gradient3"></div>

        <div class="container travel__content">

            <h2 class="title3">{{ langData.travel[lang ? "en" : "ru"] }}</h2>

            <div class="travel__content-flags">
                <div class="travel__content-flags-blocks">
                    <img src="/src/assets/images/aflag.png" alt="">
                    <img src="/src/assets/images/iflag.png" alt="">
                    <img src="/src/assets/images/fflag.png" alt="">
                    <img src="/src/assets/images/sflag.png" alt="">
                    <img src="/src/assets/images/gflag.png" alt="">
                </div>
                <img src="/src/assets/images/plane3.svg" alt="" ref="plane" class="travel__content-flags-plane">
            </div>

            <p>{{ langData.travelinfo[lang ? "en" : "ru"] }}</p>

            <swiper :effect="'cards'" :grabCursor="true" :loop="true" :modules="modules" class="travel__content-swiper">
                <swiper-slide class="travel__content-card">
                    <img src="/src/assets/travel/center.png" alt="">
                </swiper-slide>
                <swiper-slide class="travel__content-card">
                    <img src="/src/assets/travel/polizei.png" alt="">
                </swiper-slide>
                <swiper-slide class="travel__content-card">
                    <video src="/src/assets/travel/work.mp4" autoplay loop muted></video>
                </swiper-slide>
                <swiper-slide class="travel__content-card">
                    <video src="/src/assets/travel/work2.mp4" autoplay loop muted></video>
                </swiper-slide>
                <swiper-slide class="travel__content-card">
                    <img src="/src/assets/travel/rhainfall.png" alt="">
                </swiper-slide>
                <swiper-slide class="travel__content-card">
                    <img src="/src/assets/travel/group.png" alt="">
                </swiper-slide>
                <swiper-slide class="travel__content-card">
                    <img src="/src/assets/travel/uzbflag.png" alt="">
                </swiper-slide>
                <swiper-slide class="travel__content-card">
                    <img src="/src/assets/travel/eifel.png" alt="">
                </swiper-slide>
                <swiper-slide class="travel__content-card">
                    <img src="/src/assets/travel/fpolice.png" alt="">
                </swiper-slide>
                <swiper-slide class="travel__content-card">
                    <img src="/src/assets/travel/luvr.png" alt="">
                </swiper-slide>
                <swiper-slide class="travel__content-card">
                    <img src="/src/assets/travel/park.png" alt="">
                </swiper-slide>
                <swiper-slide class="travel__content-card">
                    <img src="/src/assets/travel/park2.png" alt="">
                </swiper-slide>
                <swiper-slide class="travel__content-card">
                    <img src="/src/assets/travel/park3.png" alt="">
                </swiper-slide>
                <swiper-slide class="travel__content-card">
                    <img src="/src/assets/travel/dolomitres.png" alt="">
                </swiper-slide>
                <swiper-slide class="travel__content-card">
                    <img src="/src/assets/travel/spider.png" alt="">
                </swiper-slide>
                <swiper-slide class="travel__content-card">
                    <img src="/src/assets/travel/inight.png" alt="">
                </swiper-slide>
                <swiper-slide class="travel__content-card">
                    <img src="/src/assets/travel/river.png" alt="">
                </swiper-slide>
            </swiper>

        </div>
    </section>
</template>
