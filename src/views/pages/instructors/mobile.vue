<script setup lang='ts'>
import instructors from '@/constants/instructors';
import Content from '@/views/components/Content_mb.vue';

const instructorArr = Object.entries(instructors)
</script>

<template>
    <Content with-bottom-border :custom-cls="{ inner: $style.inner }">
        <div :class="$style.container" v-for="([key, info], inx) in instructorArr" :key="key">
            <div :class="$style.img">
                <div :style="{ backgroundImage: `url(${info.img})` }"></div>
                <div> {{ info.name }} </div>
            </div>
            <div :class="$style.desc">{{ info.introCn }}</div>
            <div :style="{ marginTop: '1em' }">{{ info.introEn }}</div>
        </div>
    </Content>
</template>

<style module>
.inner {
    display: flex;
    flex-direction: column;
    row-gap: 16rem;
}

.img {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1em;
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