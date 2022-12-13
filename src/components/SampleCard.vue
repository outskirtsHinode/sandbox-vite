<script setup lang="ts">
const props = defineProps({
  n: {
    type: Number,
    default: '0'
  },
})
</script>

<template>
  <div ref="sampleCard" class="sample-card">
    <img :src="'https://source.unsplash.com/random?' + props.n" alt="">
  </div>
</template>

<style scoped lang="scss">
.sample-card {
  display: flex;
  width: 100vw;
  height: 100vw;
  box-shadow: rgba(255,255,255, 0.1) 0px 1px 0px, rgba(255,255,255, 0.1) 0px 8px 24px, rgba(255,255,255, 0.1) 0px 16px 48px;
  color: white;
  background: black;
  margin: 1rem;
  border-radius: 4px;
  border: 1px solid rgba(255,255,255, 0.3);
  box-sizing: border-box;
}
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
