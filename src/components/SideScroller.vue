<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const sideScroller = ref<HTMLElement|null>(null);
const overflowWidth = computed(() => {
  if(sideScroller.value) {
    return sideScroller.value.clientWidth - window.innerWidth
  }else{
    return 0
  }
})

onMounted(() => {
  gsap.to(
    sideScroller.value,
    {
      x: - overflowWidth.value,
      ease: "none",
      scrollTrigger: {
        trigger: sideScroller.value!,
        scrub: true,
        pin: true,
        start: 'top top',
        end: () => "+=" + overflowWidth.value,
      }
    }
  );
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
