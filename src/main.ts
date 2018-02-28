import Vue from 'vue'
import App from './App.vue'
import Button from './components/Button.vue'
import DisplayGame from './components/DisplayGame.vue'
import ElementUI from 'element-ui'
import {Application} from 'pixi.js';

Vue.component('Button', Button);
Vue.component('DisplayGame', DisplayGame);
Vue.use(ElementUI);

import App1 from './game/app/App'

// window.addEventListener('load', function () {
//   new Vue({
//     el: '#app',
//     render: h => h(App)
//   })
// });
let application = new Application({
  // view: this.$el,
//        width: 500,
//        height: 500,
  autoStart: true,
  transparent: true,
  antialias: true,
  autoResize: true,
  roundPixels: true
});
let app = new App1(application);

console.log(app);
let v = new Vue({
  el: '#app',
  render: h => h(App),
});

