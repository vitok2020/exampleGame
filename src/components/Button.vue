<template>
  <div>

  <el-button @click="visible = true">Button</el-button>
  <!--<button class="alert alert-primary" v-on:click="counter += 1">{{tittle}}, {{counter}}</button>-->
  </div>
</template>

<script lang="ts">
  export default {
    data () {
      return {
        tittle: 'Button',
        counter: 0
      }
    }
  }
</script>

<style>

</style>
