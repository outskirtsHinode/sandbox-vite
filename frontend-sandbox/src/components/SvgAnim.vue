<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const targetLine = ref();

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".line",
      // markers: true,
      scrub: true,
      start: "top+=100 top",
      end: "bottom bottom"
    }
  });
  const svgPath = targetLine.value as SVGGeometryElement
  const svgPathLength = Math.floor(svgPath.getTotalLength())
  tl.set(
    svgPath,
    {
      'stroke-width': '12vmax'
    }
  ).fromTo(
    svgPath,
    {
      'stroke-dasharray': svgPathLength,
      'stroke-dashoffset': svgPathLength,
    },
    {
      'stroke-dashoffset': '0'
    }
  );
})
</script>

<template>
  <svg class="line" viewBox="0 0 892 3137" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path ref="targetLine" d="M333.612 26C205.278 52 -22.4881 206 93.1119 614C237.612 1124 129.112 1244.5 45.1118 1496.5C-38.8882 1748.5 167.029 1934.5 320 1934.5C493.388 1934.5 662.753 1745.39 807.612 1912C954.112 2080.5 721.5 2208 759 2421.5C797.531 2640.87 933.612 2637 825.612 3111" stroke="#D7D7D7" stroke-width="50" stroke-linecap="round"/>
  </svg>
</template>

<style scoped lang="scss">
.line {
  position: absolute;
  left: 0;
  width: 100%;
  z-index: -1;
  opacity: 0.3;
}
</style>
