<template>
    <div>
        <h1>Stream Stats</h1>
        <table>
            <tbody>
                <tr>
                    <td><b>Language</b></td>
                    <td>{{stream.language}}</td>
                </tr>
                <tr>
                    <td><b>Followers</b></td>
                    <td>{{stream.followers}}</td>
                </tr>
                <tr>
                    <td><b>Views</b></td>
                    <td>{{stream.views}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<!-- Component Loader -->
<script src='./stream-stats.controller.js' />
<style src='./stream-stats.style.scss' scoped />