<template>
  <div ref="sampleCard" class="sample-card">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.sample-card {
  display: grid;
  place-items: center;
  width: 240px;
  height: 320px;
  box-shadow: rgba(255,255,255, 0.1) 0px 1px 0px, rgba(255,255,255, 0.1) 0px 8px 24px, rgba(255,255,255, 0.1) 0px 16px 48px;
  color: white;
  background: black;
  margin: 1rem;
  border-radius: 4px;
  border: 1px solid rgba(255,255,255, 0.3);
}
</style>
