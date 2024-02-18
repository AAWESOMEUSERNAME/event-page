<script setup lang='ts'>
import pageArr from '@/constants/pages'
import { useRouter } from 'vue-router';

const router = useRouter()

function navTo(path: string) {
    router.push(path)
}

</script>

<template>
    <nav :class="$style.nav">
        <div v-for="item in pageArr"
            :class="$style.item + ' ' + (router.currentRoute.value.path === item.path ? $style.current : '')"
            @click="navTo(item.path)">
            <div>{{ item.nameCn }}</div>
            <div>{{ item.nameEn }}</div>
        </div>
    </nav>
</template>

<style module>
.nav {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    font-size: var(--font-small);
    line-height: 3rem;
    background-color: var(--main-color-black);
    box-shadow: 0px 0px 5px var(--main-color-black);
    z-index: 1;
}

.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: max-content;
    padding: 0 1.5rem;
    min-width: 16rem;
    height: 11.2rem;
    cursor: pointer;
}

.item.current {
    background-color: var(--main-color-purple);
    cursor: initial;
}
</style>