<script setup lang="ts">
import { onMounted } from 'vue'
import Prism from 'prismjs'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import "prismjs/themes/prism-tomorrow.min.css";

const props = defineProps({
  type: {
    type: String,
    default: 'css'
  }
})

onMounted(() => {
  window.Prism = window.Prism || {};
  window.Prism.manual = true;
  window.Prism.plugins.NormalizeWhitespace.setDefaults({
    'remove-trailing': true,
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true
  })
  Prism.highlightAll();
})
</script>

<template>
  <pre><code :class="'language-' + type"><slot></slot></code></pre>
</template>

<style scoped lang="scss">
pre {
  max-width: 640px;
  border-radius: 8px;
  backdrop-filter: blur(24px);
  background: black;
  border: 1px solid white;
}
</style>
