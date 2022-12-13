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
  width: 400px;
  height: 70vh;
  color: white;
  margin: 4px;
  border-radius: 2px;
  box-sizing: border-box;
}
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>
