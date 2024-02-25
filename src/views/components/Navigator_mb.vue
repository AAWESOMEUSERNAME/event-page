<script setup lang='ts'>
import pageArr, { MOBILE_PREFIX } from '@/constants/pages'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const mobilePageArr = pageArr.map(p => ({ ...p, path: p.path }))
const router = useRouter()
const show = ref()

function navTo(path: string) {
    router.push(path)
    show.value = false
}

</script>

<template>
    <nav :class="$style.nav">
        爵对莱斯 NLF 2024
        <div @click="show = !show"></div>
        <ul :style="{ display: show ?  undefined: 'none' }">
            <li v-for="item in mobilePageArr"
                :class="$style.item + ' ' + (router.currentRoute.value.path === item.path ? $style.current : '')"
                @click="navTo(item.path)">
                {{ item.nameCn + ' ' + item.nameEn }}
            </li>
        </ul>
    </nav>
</template>

<style module>
.nav {
    display: flex;
    justify-content: space-between;
    font-size: var(--font-h3);
    line-height: 2.5em;
    background-color: var(--main-color-black);
    padding: 0 0.5em;
    box-shadow: 0px 0px 5px var(--main-color-black);
    z-index: 1;
    align-items: center;
    position: relative;
}

.nav div {
    background-image: url('@/assets/images/menu.svg');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 30px;
    width: 30px;
}

.nav ul {
    position: absolute;
    bottom: 0;
    left: 0;
    list-style: none;
    transform: translateY(calc(100%));
    width: 100vw;
    transition: opacity 0.3s;
    box-shadow: 0px 0px 5px var(--main-color-black);
}

.nav ul li {
    text-align: center;
    line-height: 2.5em;
    cursor: pointer;
    background-color: var(--main-color-black);
    margin-top: -1px;
}

.nav ul li.current {
    background-color: var(--main-color-purple);
    cursor: initial;
}
</style>