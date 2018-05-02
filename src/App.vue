<template>
  
  <div id="app">
    <Navbar />
    <router-view class="container"></router-view>
  </div>  
</template>

<script>

import { APP_NAME } from '~/helpers/dictionary';
import Navbar from '~/components/navbar/navbar.template';

export default {
  name: 'app',
  props: {
    //TODO: REFACTOR
    app_name: {
      default: APP_NAME
    }
  },
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  align-content: center;
  width: 100%;
}

.container {
  margin-top: 1em;
}
</style>
