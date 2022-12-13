<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const sideScroller = ref<HTMLElement|null>(null);
const overflowWidth = () => {
  if(sideScroller.value) {
    return sideScroller.value.clientWidth - window.innerWidth
  }else{
    return 0
  }
}

onMounted(() => {
  const scrollTween = gsap.to(
    sideScroller.value,
    {
      x: - overflowWidth(),
      ease: "none",
      scrollTrigger: {
        trigger: sideScroller.value!,
        scrub: true,
        pin: true,
        end: "+=" + overflowWidth(),
        invalidateOnRefresh: true
      }
    },
  );
  ScrollTrigger.addEventListener("refreshInit", () => {
    scrollTween.vars.x = - overflowWidth()
    scrollTween.vars.scrollTrigger = { end: "+=" + overflowWidth() }
  })
})

</script>

<template>
  <div ref="sideScroller" class="side-scroller">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.side-scroller {
  display: flex;
  align-items: center;
  width: max-content;
  padding: 2rem;
  height: 100vh;
  box-sizing: border-box;
  background-color: #fbfdff;
}
</style>
