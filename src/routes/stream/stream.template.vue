<template>
    <div>
        <p>Welcome to {{ getStreamName }}'s Stream!</p>
        <StreamPlayer v-bind:stream="getStreamName" />
    </div>
</template>

<!-- Component Loader -->
<script src='./stream.controller.js' />
<style src='./stream.style.scss' scoped />