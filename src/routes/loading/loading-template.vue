<template>
    <div>
        <img class="spinner rotating" src="~/assets/logo.png">
        <h1 class="stream-loading">{{ getRandomMessage }}</h1>
    </div>
</template>

<!-- Component Loader -->
<script src='./loading-controller.js' />
<style src='./loading-style.scss' scoped />