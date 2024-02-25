<script setup lang='ts'>

const props = defineProps<{
    imgSrc: string
    size: 'small' | 'big'
}>()
</script>

<template>
    <header :class="$style.header + ' ' + (props.size === 'big' ? $style.big : $style.small)"
        :style="{ backgroundImage: `url(${props.imgSrc})` }">
    </header>
</template>

<style module>
.header {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.header>div {
    display: flex;
    font-size: var(--font-h1);
    column-gap: 1em;
}

.small {
    height: 25rem;
}

.big {
    height: 100vh;
}
</style>