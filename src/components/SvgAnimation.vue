<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const targetLine = ref();

onMounted(() => {
  setTimeout(() => {
    const svgPath = targetLine.value as SVGGeometryElement
    const svgPathLength = Math.floor(svgPath.getTotalLength())
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgPath,
        // markers: true,
        scrub: true,
        start: "top+=100 top",
        end: "bottom bottom"
      }
    });
    tl.set(
      svgPath,
      {
        'stroke-width': '100px'
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
  }, 300)
})
</script>

<template>
  <div>
    <svg preserveAspectRatio="xMidYMin meet" class="line" viewBox="0 0 942 3187" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path ref="targetLine" d="M358.612 51C230.278 77 2.51186 231 118.112 639C262.612 1149 154.112 1269.5 70.1118 1521.5C-13.8882 1773.5 192.029 1959.5 345 1959.5C518.388 1959.5 687.753 1770.39 832.612 1937C979.112 2105.5 746.5 2233 784 2446.5C822.531 2665.87 958.612 2662 850.612 3136" stroke="#D7D7D7" stroke-width="100" stroke-linecap="round"/>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.line {
  aspect-ratio: 942/3187;
  position: absolute;
  margin: 20px;
  width: calc(100vw - 40px);
  z-index: -1;
  opacity: 0.3;
}
</style>
