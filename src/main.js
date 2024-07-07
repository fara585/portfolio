import App from './App.vue';
import { createApp } from 'vue';
import "@/assets/styles/main.scss"
import "@/assets/styles/all.min.css"
import "@/components/header/header.js";
import Lenis from 'lenis';
const lenis = new Lenis({
    duration: 2.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
};
requestAnimationFrame(raf);
const app = createApp(App);
app.mount('#app');