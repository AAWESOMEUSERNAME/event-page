<script setup lang='ts'>
import { defineProps } from 'vue'
const props = defineProps<{
    imgPosition: 'left' | 'right',
    imgSrc: string
    name: string
    text: string
}>()
</script>

<template>
    <div :class="$style.container">
        <div :class="$style.img" v-if="props.imgPosition === 'left'">
            <div :style="{ backgroundImage: `url(${props.imgSrc})` }"></div>
            <div> {{ props.name }} </div>
        </div>
        <div :class="$style.desc">{{ text }}</div>
        <div :class="$style.img" v-if="props.imgPosition === 'right'">
            <div :style="{ backgroundImage: `url(${props.imgSrc})` }"></div>
            <div> {{ props.name }} </div>
        </div>
    </div>
</template>

<style module>
.container {
    display: flex;
    column-gap: 4em;
}

.img {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.img div:first-child {
    width: 40rem;
    aspect-ratio: 1;
    background-position: center;
    background-size: cover;
    border-radius: 100%;
}

.img div:last-child {
    font-size: var(--font-h2);
}
</style>