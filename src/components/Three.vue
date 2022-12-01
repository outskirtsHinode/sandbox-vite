<template>
  <div ref="container" class="three"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { GridHelper, PerspectiveCamera, Scene, WebGLRenderer } from "three";

// 描画するDOMの指定
const container = ref();
const scene = new Scene();
const camera = new PerspectiveCamera();
const renderer = new WebGLRenderer();
// 初期化
const init = () => {
  if (container.value instanceof HTMLElement) {
    // DOMのサイズを取得
    const { clientWidth, clientHeight } = container.value;
    // 背景のグリッドの追加
    scene.add(new GridHelper());
    // カメラの設定
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
    camera.position.set(10, 10, 0);
    camera.lookAt(0, 0, 0);
    // rendererの設定
    renderer.setSize(clientWidth, clientHeight);
    renderer.setPixelRatio(clientWidth / clientHeight);
    container.value.appendChild(renderer.domElement);
    // 描画
    animate();
  }
};
// 描画
const animate = () => {
  const frame = () => {
    // 描画
    renderer.render(scene, camera);
    // 画面を更新
    requestAnimationFrame(frame);
  };
  frame();
};

// マウント時に初期化して描画
onMounted(() => {
  init();
});

</script>
<style scoped lang="scss">
.three{
  position: relative;
  width: 100vw;
  height: 100vh;

}
</style>
