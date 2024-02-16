<script setup lang='ts'>
import { ref, defineProps } from "vue"
const props = defineProps<{
    imgSrc: string
    name: string
}>()

</script>

<template>
    <div :class="$style.container">
        <div :class="$style.pic" :style="`background-image:url(${props.imgSrc})`"></div>
        <div :class="$style.name">
            <h3>{{ props.name }}</h3>
        </div>
    </div>
</template>

<style module>
.container {
    display: flex;
    flex-direction: column;
    height: min(90vh, 24rem);
    align-items: center;
}

.pic {
    flex: 1;
    background-size: cover;
    border-radius: 100%;
    aspect-ratio: 1;
}

.name{
    margin-top: 0.4rem;
}

</style>