<template>
  <canvas id="canv"></canvas>
</template>

<script  lang="ts">
//  import {Application} from 'pixi.js';
//  import {Graphics} from 'pixi.js';

//  import App1 from '../game/src/app/App'
//  import {Monster} from "../game/src/app/actors/Monster";
//  import Test from "./Test";
  //  document.body.appendChild(app.view);
//  console.log(Test);

//  console.log(Monster);
//
//
//  console.log(Graphics);

  export default {
    name: 'home',
    mounted() {
      console.log('Mounted home, ready to PIXI');
      console.log(this.$el)
//      let application = new Application({
//        view: this.$el,
////        width: 500,
////        height: 500,
//        autoStart: true,
//        transparent: true,
//        antialias: true,
//        autoResize:true,
//        roundPixels: true
//      });
//      console.log(application);
//      var g = new Graphics();
//      g.beginFill(0xff0000, 0.5);
//      g.drawRect(5, 5, 20, 30);
//      application.stage.addChild(g)
//      let app = new App1(application)

    },

    data() {
      return {
        'test': 'asdfasdasdsdf',
      }
    }
  }
</script>

<style>

  #canv {
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100px;
    height: 100px;
    background-color: #2f324b;
  }

</style>
