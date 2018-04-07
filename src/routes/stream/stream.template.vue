<template>
    <div>
        <p>Welcome to {{ getStreamName }}'s Stream!</p>
        <button>Next Stream</button>
        <StreamPlayer v-bind:stream="getStreamName" />
        <StreamStats v-bind:stream="getStreamName" />
    </div>
</template>

<!-- Component Loader -->
<script src='./stream.controller.js' />
<style src='./stream.style.scss' scoped />