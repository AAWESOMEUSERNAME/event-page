<script setup lang='ts'>
import imgSrc from '@/assets/2024/images/comingSoon.jpg'
</script>

<template>
    <div>
        <img :src="imgSrc" alt="schedule">
    </div>
</template>

<style module>
img {
    object-fit: contain;
    width: 100%;
}
</style>