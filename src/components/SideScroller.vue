<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const sideScroller = ref<HTMLElement|null>(null);

onMounted(() => {
  // setTimeout(() => {
    gsap.to(
      sideScroller.value,
      {
        x: (sideScroller.value!.clientWidth - window.innerWidth) * -1,
        scrollTrigger: {
          trigger: sideScroller.value!,
          scrub: true,
          pin: true,
          end: () => "+=" + (sideScroller.value!.clientWidth - window.innerWidth),
        }
      }
    );
  // }, 300)
})

</script>

<template>
  <section ref="sideScroller" class="side-scroller">
    <slot></slot>
  </section>
</template>

<style scoped lang="scss">
.side-scroller {
  display: flex;
  width: max-content;
  padding: 2rem;
}
</style>
