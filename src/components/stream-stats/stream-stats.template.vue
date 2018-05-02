<template>
    <div class="container">
        <h1>{{stream.display_name}}'s Stats</h1>
        <b-table stacked :items="[stream]"></b-table>
    </div>
</template>

<!-- Component Loader -->
<script src='./stream-stats.controller.js' />
<style src='./stream-stats.style.scss' scoped />