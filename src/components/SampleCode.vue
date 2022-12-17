<script setup lang="ts">
import { onMounted, useSlots} from 'vue'
import Prism from 'prismjs'
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import "prismjs/themes/prism-tomorrow.min.css";

const props = defineProps({
  type: {
    type: String,
    default: 'javascript'
  },
  caption: {
    type: String,
    default: null
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
  <figure v-if="$slots.default!()[0].type === 'pre'">
    <pre><code :class="'language-' + type"><slot></slot></code></pre>
    <figcaption v-if="caption">{{caption}}</figcaption>
  </figure>
  <figure v-else class="inline">
    <code :class="'language-' + type"><slot></slot></code>
  </figure>
</template>

<style scoped lang="scss">
pre {
  max-width: 640px;
  border-radius: 8px;
  backdrop-filter: blur(24px);
  background: black;
  border: 1px solid white;
}
figure {
  margin: 0;
}
.inline {
  display: inline-block;
}
figcaption {
  font-size: .8em;
  color: #aaa;
}
</style>
