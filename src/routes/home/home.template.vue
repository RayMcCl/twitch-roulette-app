<template>
    <div>
        <b-jumbotron>
            <template slot="header">
                Stream Roulette
            </template>
            <template slot="lead">
                Welcome to Stream Roulette, a site built to discover new streamers by providing a random viewing experience.
            </template>
            <hr class="my-4">
            <b-btn variant="info" @click="getRandomStream">Show me a stream!</b-btn>
        </b-jumbotron>
    </div>
</template>

<script src="./home.controller.js" />
<style src="./home.style.scss" scoped />