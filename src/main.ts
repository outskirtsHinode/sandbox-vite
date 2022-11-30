import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { blurDirective } from './directives/blur'

const main = createApp(App)
main.directive('blur', blurDirective)
main.mount('#app')
