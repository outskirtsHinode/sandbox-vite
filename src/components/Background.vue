<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const activator = ref();
const expandBall = ref();

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: activator.value,
      scrub: true,
      start: "top bottom",
      end: "top center"
    }
  });
  tl.to(
    expandBall.value,
    {
      'width': '300vmax',
      'height': '300vmax',
    },
  ).fromTo(
    expandBall.value,
    {
      autoAlpha: 1
    },
    {
      autoAlpha: 0,
    },
  );
})

</script>

<template>
  <div ref="activator"></div>
  <div ref="expandBall" class="expandBall"></div>
</template>

<style scoped lang="scss">
.expandBall {
  width: 0;
  height: 0;
  border-radius: 600vw;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
  transform-origin: center center;
  z-index: -1;
}
</style>
