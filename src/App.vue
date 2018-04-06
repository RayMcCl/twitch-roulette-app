<template>
  <div id="app">
    <LoadingTemplate/>
  </div>
</template>

<script>

import LoadingTemplate from './routes/loading/loading-template.vue';

export default {
  name: 'app',
  components: {
    LoadingTemplate
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  align-content: center;
  width: 100%;
}
</style>
