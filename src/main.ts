import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { blurDirective } from './directives/blur'
import { budouxDirective } from './directives/budoux'

const main = createApp(App)
main.directive('blur', blurDirective)
main.directive('budoux', budouxDirective)
main.mount('#app')
