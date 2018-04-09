<template>
    <div>
        <p>Welcome to {{ stream.data.display_name }}'s Stream!</p>
        <button v-on:click="getRandomStream">Next Stream</button>
        <StreamPlayer v-bind:stream="stream.data" />
        <StreamStats v-bind:stream="stream.data" />
    </div>
</template>

<!-- Component Loader -->
<script src='./stream.controller.js' />
<style src='./stream.style.scss' scoped />