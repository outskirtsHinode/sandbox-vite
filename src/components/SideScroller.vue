<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const hoge = ref<HTMLElement|null>(null);

onMounted(() => {
  gsap.to(
    hoge.value,
    {
      x: hoge.value!.offsetWidth * -1,
      scrollTrigger: {
        trigger: hoge.value,
        scrub: true,
        pin: true,
        end: () => "+=" + hoge.value!.offsetWidth
      }
    }
  );
})
</script>

<template>
  <section ref="hoge">
    <slot></slot>
  </section>
</template>

<style scoped lang="scss">

</style>
