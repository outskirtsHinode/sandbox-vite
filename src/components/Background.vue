<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const activator = ref();
const box = ref();

onMounted(() => {
  gsap.to(
    box.value,
    {
      'width': '500vw',
      'height': '500vw',
      scrollTrigger: {
        trigger: activator.value,
        // markers: true,
        scrub: true,
        start: "top center",
        end: "bottom top"
      }
    },
  );
})

</script>

<template>
  <div ref="activator"></div>
  <div ref="box" class="box"></div>
</template>

<style scoped lang="scss">
.box {
  width: 0;
  height: 0;
  border-radius: 600vw;
  background-color: black;
  position: fixed;
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
  transform-origin: center center;
  z-index: -1;
}
</style>
