<template>
  <div id="app">
    <h1>{{app_name}}</h1>
    <router-view></router-view>
  </div>  
</template>

<script>

import { APP_NAME } from '~/helpers/dictionary';

export default {
  name: 'app',
  props: {
    //TODO: REFACTOR
    app_name: {
      default: APP_NAME
    }
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
  margin-top: 20px;
  align-content: center;
  width: 100%;
}
</style>
