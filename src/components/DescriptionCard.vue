<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const card = ref(null);
const props = defineProps({
  startX: {
    type: String,
    default: '0'
  },
  startY: {
    type: String,
    default: '0'
  },
})

onMounted(() => {
  gsap.set(
    card.value,
    {
      x: props.startX,
      y: props.startY,
      opacity: 0
    }
  )
  gsap.to(
    card.value,
    {
      x: 0,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: card.value,
        // markers: true,
        // scrub: true,
        toggleActions: "play none none reset",
        start: "top center+=40%",
        end: "top center-=40%"
      }
    }
  );
})
</script>

<template>
  <div class="card" ref="card">
    <h2 class="card__heading" ref="heading">
      <slot name="heading"></slot>
    </h2>
    <div class="card__text">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  padding: 2em;
  // mix-blend-mode: exclusion;
  max-width: 100vw;
  box-sizing: border-box;
}
.card__heading {
  color: white;
  font-size: 2rem;
  line-height: 1.5;
  font-weight: 700;
}
.card__text {
  color: #c1ccd6;
  line-height: 1.5;
  font-size: 1rem;
}
</style>
