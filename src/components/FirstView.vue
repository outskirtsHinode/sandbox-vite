<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const base = ref<HTMLElement|null>();
const headingText = ref<HTMLElement|null>();
const ball = ref<HTMLElement|null>();
const dvh = ref(window.innerHeight)

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
    ).set(
      'body',
      {
        overflow: 'hidden'
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
    ).to(
      base.value!,
      {
        autoAlpha: 0,
        scale: 1.2,
        duration: 0.6,
        ease: "Power.easeOut",
      },
    ).to(
      'body',
      {
        overflow: 'auto'
      }
    )
  }
})
</script>

<template>
  <div class="first-view" ref="base" :style="`height:${dvh}px`">
    <div ref="ball" class="ball"></div>
    <h1 ref="headingText">Frontend砂遊びしてみた</h1>
  </div>
</template>

<style scoped lang="scss">
.first-view {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  height: 100mvh;
  overflow: hidden;
  z-index: 1;
  background-color: #fff;
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
