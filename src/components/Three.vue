<template>
  <div ref="container" class="three"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { AmbientLight, Color, DirectionalLight, Fog, Group, Mesh, MeshPhongMaterial, PerspectiveCamera, Scene, SphereGeometry, Vector3, WebGLRenderer } from "three";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const container = ref();

const SCENE_PARAM = {
  fogColor: 0x000000,
  fogNear: 1.0,
  fogFar: 27.0
};
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
const MATERIAL_PARAM = {
  color: 0xfdfdf0,
  specular: 0xffffff,
};
const DIRECTIONAL_LIGHT_PARAM = {
  color: 0xda9a88,
  intensity: 1.0,
  x: 1.0,
  y: 1.0,
  z: 1.0
};
const AMBIENT_LIGHT_PARAM = {
  color: 0xffffff,
  intensity: 0.2,
};

// scene
const scene = new Scene();
scene.fog = new Fog(
  SCENE_PARAM.fogColor,
  SCENE_PARAM.fogNear,
  SCENE_PARAM.fogFar
);
const camera = new PerspectiveCamera(
  CAMERA_PARAM.fovy,
  CAMERA_PARAM.aspect,
  CAMERA_PARAM.near,
  CAMERA_PARAM.far
);
const renderer = new WebGLRenderer();
const composer = new EffectComposer(renderer);

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

    // composer
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
    const glitchPass = new GlitchPass();
    composer.addPass(glitchPass);
    glitchPass.renderToScreen = true;

    // group
    const group = new Group();

    // material
    const material = new MeshPhongMaterial(MATERIAL_PARAM);

    // Geometry and Mesh
    const sphereGeometry = new SphereGeometry(1.0, 16, 16);
    const sphere = new Mesh(sphereGeometry, material);
    group.add(sphere);
    scene.add(group);

    // directionalLight
    const directionalLight = new DirectionalLight(
      DIRECTIONAL_LIGHT_PARAM.color,
      DIRECTIONAL_LIGHT_PARAM.intensity
    );
    directionalLight.position.x = DIRECTIONAL_LIGHT_PARAM.x;
    directionalLight.position.y = DIRECTIONAL_LIGHT_PARAM.y;
    directionalLight.position.z = DIRECTIONAL_LIGHT_PARAM.z;
    scene.add(directionalLight);

    // ambientLight
    const ambientLight = new AmbientLight(
      AMBIENT_LIGHT_PARAM.color,
      AMBIENT_LIGHT_PARAM.intensity
    );
    scene.add(ambientLight);

    // const axesHelper = new AxesHelper(5.0);
    // scene.add(axesHelper);

    // controls
    const controls = new OrbitControls(camera, renderer.domElement);

    animate();
  }
};
const animate = () => {
  const frame = () => {
    composer.render();
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
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>
