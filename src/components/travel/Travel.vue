<script setup>
import langData, { lang } from "@/lang.js";
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    gsap.fromTo(plane.value, { x: 100, opacity: 0 }, {
        opacity: 1, x: 0, duration: 1.5,
        scrollTrigger: {
            trigger: plane.value,
            toggleActions: "restart pause resume none",
            start: '50px 80%',
        }
    });
    const mm = gsap.matchMedia();
    gsap.fromTo(".travel__content p", { opacity: 0 }, {
        opacity: 1, duration: 1.5, delay: .3,
        scrollTrigger: {
            trigger: ".travel__content p",
            toggleActions: "restart pause resume none",
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


        </div>
    </section>
</template>
