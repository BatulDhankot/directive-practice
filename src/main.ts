import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'
import {changeBtnColor} from './directives/bgChange'

// Directives in main file
const highlightDirective = {
  mounted(el, binding) {
    el.style.backgroundColor = binding.value;
  },
};

const app = createApp(App);

app.directive('highlight', highlightDirective);

//Directive from .ts file
app.directive('bgColor', changeBtnColor);

app.mount('#app');