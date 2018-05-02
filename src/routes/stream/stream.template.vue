<template>
    <div>
        <b-btn v-if="stream.previousData.length > 1" class="float-left" @click="getPreviousStream">Previous Stream</b-btn>        
        <span>Welcome to <b>{{ stream.data.display_name }}'s</b> Stream!</span>
        <b-btn variant="info" class="float-right" @click="getRandomStream">Random Stream</b-btn>
        <StreamPlayer v-bind:stream="stream.data" />
        <StreamStats v-bind:stream="stream.data" />
    </div>
</template>

<!-- Component Loader -->
<script src='./stream.controller.js' />
<style src='./stream.style.scss' scoped />