<template>
  
  <div id="app">
    <b-navbar toggleable="md" type="light" variant="light">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="/">Home</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="#/games">Games</b-nav-item>
          <b-nav-item href="#/stats">Stats</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
      </b-collapse>
    </b-navbar>
    <router-view class="container"></router-view>
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
  align-content: center;
  width: 100%;
}

.container {
  margin-top: 1em;
}
</style>
