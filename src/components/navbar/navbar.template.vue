<template>
    <b-navbar toggleable="md" type="light" variant="light">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="/">Home</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="#/games">Games</b-nav-item>
          <b-nav-item href="#/stats">Stats</b-nav-item>
          <b-nav-item href="#/about">About</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
      </b-collapse>
    </b-navbar>
</template>

<!-- Component Loader -->
<script src='./navbar.controller.js' />
<style src='./navbar.style.scss' scoped />