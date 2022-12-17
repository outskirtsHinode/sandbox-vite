<template>
  <div ref="container" class="three"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import * as three from 'three';
import { BufferAttribute, BufferGeometry, Color, PerspectiveCamera, Points, Scene, ShaderMaterial, Vector3, WebGLRenderer } from "three";

const container = ref();

const CAMERA_PARAM = {
  fovy: 60,
  aspect: window.innerWidth / window.innerHeight,
  near: 0.1,
  far: 30.0,
  x: 0.0,
  y: 5.0,
  z: 7.0,
  lookAt: new Vector3(0.0, 0.0, 0.0),
};
const RENDERER_PARAM = {
  clearColor: 0x000000,
  width: window.innerWidth,
  height: window.innerHeight,
};

let globalColor = [0.3, 0.3, 0.3, 0.6];
let pointSize = 8.0;

// scene
const scene = new Scene();

const camera = new PerspectiveCamera(
  CAMERA_PARAM.fovy,
  CAMERA_PARAM.aspect,
  CAMERA_PARAM.near,
  CAMERA_PARAM.far
);
const renderer = new WebGLRenderer();

let startTime = Date.now();
let nowTime:number;
const geometry = new BufferGeometry();

const uniforms = {
  pointSize:{
    value: pointSize
  },
  time: {
    value: 0
  },
  globalColor: {
    value: globalColor
  },
  power: {
    value: 0.5
  }
}
// scroller
const scroller = {
  beforeY: window.pageYOffset,
  currentY:window.pageYOffset
}

const init = () => {
  if (container.value instanceof HTMLElement) {

    // camera
    camera.updateProjectionMatrix();
    camera.position.set(CAMERA_PARAM.x, CAMERA_PARAM.y, CAMERA_PARAM.z);
    camera.lookAt(CAMERA_PARAM.lookAt);

    // renderer
    renderer.setClearColor(new Color(RENDERER_PARAM.clearColor));
    renderer.setSize(RENDERER_PARAM.width, RENDERER_PARAM.height);
    container.value.appendChild(renderer.domElement);

    // material
    const shaderMaterial = new ShaderMaterial({
      uniforms: uniforms,
      blending:     three.AdditiveBlending,
      depthWrite:   false,
      transparent:  true,
      vertexShader:`
        attribute vec4 randomValue;

        uniform float pointSize;
        uniform float time;

        void main(){
            float width = randomValue.x;
            float sinScale = randomValue.y * 0.1 + 0.1;
            float cosScale = randomValue.z * 0.1 + 0.1;
            float pointScale = randomValue.w * 1.2 + 0.3;
            vec3 offset = vec3(cos(time * cosScale), sin(time * sinScale), 0.0) * width;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position + offset, 1.0);
            gl_PointSize = pointSize * pointScale;
        }
      `,
      fragmentShader:`
        precision mediump float;

        uniform vec4 globalColor;
        uniform float power;

        void main(){
            vec2 p = gl_PointCoord.st * 2.0 - 1.0;
            float len = length(p);
            float dest = power / len;
            dest = pow(dest, 5.0);
            gl_FragColor = vec4(vec3(dest), 1.0) * globalColor;
        }
      `
    });

    // particle
    const COUNT = 100;
    const SIZE = 6.0;
    const vertices = [];
    const randomValue = [];

    for(let i = 0; i <= COUNT; ++i){
        const x = (Math.random() - 0.5) * 2.0 * SIZE;
        const y = (Math.random() - 0.5) * 2.0 * SIZE;
        const z = (Math.random() - 0.5) * 2.0 * SIZE;
        vertices.push(x, y, z);
        randomValue.push(
          Math.random(),
          Math.random(),
          Math.random(),
          Math.random()
        );
    }

    const attribute = new BufferAttribute(new Float32Array(vertices), 3);
    geometry.setAttribute('position', attribute);
    geometry.setAttribute('randomValue', new BufferAttribute(new Float32Array(randomValue), 4));

    const points = new Points(geometry, shaderMaterial);

    scene.add(points);

    animate();
  }
};
const animate = () => {
  const frame = () => {
    nowTime = (Date.now() - startTime) / 1000;

    renderer.render(scene, camera);
    uniforms.time.value = nowTime;
    scroller.currentY = window.pageYOffset;
    scene.rotation.y += (scroller.currentY - scroller.beforeY) / 500
    scroller.beforeY = scroller.currentY

    requestAnimationFrame(frame);
  };
  frame();
};

onMounted(() => {
  init();
});

</script>
<style scoped lang="scss">
.three{
  position: sticky;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
}
</style>
