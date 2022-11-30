<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { gsap } from 'gsap'

const headingText = ref<HTMLElement|null>();
const ball = ref<HTMLElement|null>();
const dvh = ref(window.innerHeight)

let timeoutID:number
window.addEventListener('resize', () => {
  clearTimeout(timeoutID);
  timeoutID = setTimeout(() => dvh.value = window.innerHeight, 300);
})

onMounted(() => {
  if(headingText.value){
    const headingTextChars = headingText.value.textContent!.split('')
    const headingTextCharsSpan = headingTextChars.map(x => '<span style="display:inline-block">' + x + '</span>')
    headingText.value.innerHTML = headingTextCharsSpan.join('');

    const tl = gsap.timeline();

    tl.set(
      ball.value!,
      {
        x: '-50vw',
        y: '-20vh',
      }
    ).to(
      ball.value!,
      {
        y: 0,
        duration: 1,
        ease: "Bounce.easeOut",
      }
    ).to(
      ball.value!,
      {
        x: '54vw',
        duration: 3,
        delay: -1,
        ease: "Power.easeOut",
      },
    ).fromTo(
      '.first-view span',
      {
        opacity: 0,
        y: -10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: -2.6,
        stagger: {
          each: 0.09,
        },
        ease: "Bounce.easeOut",
      },
    )
  }
})
</script>

<template>
  <div class="first-view" :style="`height:${dvh}px`">
    <div ref="ball" class="ball"></div>
    <h1 ref="headingText">Frontend砂遊びしてみた</h1>
  </div>
</template>

<style scoped lang="scss">
.first-view {
  position: relative;
  width: 100vw;
  overflow: hidden;
}
h1 {
  display: block;
  position: absolute;
  inset: 0;
  margin: auto;
  width: fit-content;
  height: 1em;
  letter-spacing: 2px;
  font-size: 5vw;
  white-space: nowrap;

}
.ball {
  position: absolute;
  inset: -150vmax;
  margin: auto;
  width: 4vw;
  height: 4vw;
  border-radius: 150vmax;
  background-color: #213547;
}
</style>
