<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Header from '@/components/header/Header.vue';
import Project from '@/components/project/Project.vue';
import Travel from '@/components/travel/Travel.vue';
import Contact from '@/components/contact/Contact.vue';
const isLoading = ref(true);
onMounted(() => {
  const handleLoaded = () => {
    isLoading.value = false;
  };
  window.addEventListener('load', handleLoaded);
  const cleanup = () => {
    window.removeEventListener('load', handleLoaded);
  };
  onUnmounted(cleanup);
  // setTimeout(() => {
  //   isLoading.value = false;
  // }, 10000);
});
</script>

<template>
  <div>
    <div v-if="isLoading" class="mainLoader">
      <div class="loader"></div>
    </div>
    <div v-else>
      <Header />
      <Project />
      <Travel />
      <Contact />
    </div>
  </div>
</template>

<style>
.mainLoader {
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999999;
  background-color: #000000;
}

.loader {
  --c1: #673b14;
  --c2: #f8b13b;
  width: 40px;
  height: 80px;
  border-top: 4px solid var(--c1);
  border-bottom: 4px solid var(--c1);
  background: linear-gradient(90deg, var(--c1) 2px, var(--c2) 0 5px, var(--c1) 0) 50%/7px 8px no-repeat;
  display: grid;
  overflow: hidden;
  animation: l5-0 2s infinite linear;
}

.loader::before,
.loader::after {
  content: "";
  grid-area: 1/1;
  width: 75%;
  height: calc(50% - 4px);
  margin: 0 auto;
  border: 2px solid var(--c1);
  border-top: 0;
  box-sizing: content-box;
  border-radius: 0 0 40% 40%;
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
  background:
    linear-gradient(var(--d, 0deg), var(--c2) 50%, #0000 0) bottom /100% 205%,
    linear-gradient(var(--c2) 0 0) center/0 100%;
  background-repeat: no-repeat;
  animation: inherit;
  animation-name: l5-1;
}

.loader::after {
  transform-origin: 50% calc(100% + 2px);
  transform: scaleY(-1);
  --s: 3px;
  --d: 180deg;
}

@keyframes l5-0 {
  80% {
    transform: rotate(0)
  }

  100% {
    transform: rotate(0.5turn)
  }
}

@keyframes l5-1 {

  10%,
  70% {
    background-size: 100% 205%, var(--s, 0) 100%
  }

  70%,
  100% {
    background-position: top, center
  }
}
</style>
