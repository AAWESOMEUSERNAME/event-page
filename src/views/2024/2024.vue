<script setup lang='ts'>
import Poster from './components/Poster.vue'
import Footer from './components/Footer.vue'
import Teachers from './contents/Teachers.vue'
import Environments from './contents/Environments.vue';
import Competitions from './contents/Competitions.vue';
import Schedule from './contents/Schedule.vue';
</script>

<template>
    <Poster />
    <main>
        <div>
            在这里，你会遇到国际一线
        </div>
        <Teachers id="teachers"/>
        <Environments />
        <Competitions />
        <Schedule />

    </main>
    <Footer></Footer>
</template>

<style module>
main {
    background-color: #2d333b;
    padding: 0 4rem;
    overflow: hidden;
}
</style>