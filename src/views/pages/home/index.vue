<script setup lang='ts'>
import { useRouter } from 'vue-router';
import { PATH } from '@/constants/pages'
import instructors from '@/constants/instructors'

import TicketCards from '@/views/components/TicketCards.vue';

const router = useRouter()
const instructorArr = Object.entries(instructors)

function navTo(path: string) {
    router.push(path)
}

</script>

<template>
    <div :class="$style.intro">
        <div :class="$style.intro__left">
            <div :class="$style.intro__title">爵对莱斯<br>Nanjing Lindy Hop Festival</div>
            <div :class="$style.intro__main">
                一些关于活动的介绍，一些关于活动的介绍，一些关于活动的介绍，一些关于活动的介绍，，一些关于活动的介绍，一些关于活动的介绍，一些关于活动的介绍，一些关于活动的介绍，一些关于活动的介绍，介绍里可以加超链
            </div>
            <div :class="$style.intro__register" @click="navTo(PATH.TICKETS)">报名 REGISTER</div>
        </div>
        <div :class="$style.intro__right"></div>
    </div>
    <div :class="$style.instructors">
        <div :class="$style.instructors__title">教师&nbsp;&nbsp;INSTRUCTORS</div>
        <div :class="$style.instructors__grid">
            <div v-for="([key, info]) in instructorArr" :class="$style.instructors__card">
                <div :class="$style.instructors__img" :style="{ backgroundImage: `url(${info.img})`}"></div>
                <div :class="$style.instructors__name" @click="navTo(PATH.INSTRUCTORS + '?current=' + key)">{{ info.name }}
                </div>
            </div>
        </div>
    </div>
    <div :class="$style.band">
        <div :class="$style.band__title" @click="navTo(PATH.MUSIC)">现场乐队 Live Band<br>Swing Shouters</div>
    </div>
    <div :class="$style.tickets">
        <div :class="$style.tickets__title">
            票种设置&nbsp;&nbsp;TICKETS
        </div>
        <div :class="$style.tickets__cards">
            <TicketCards />
        </div>
        <div :class="$style.tickets__register" @click="navTo(PATH.TICKETS)">
            如何购票？ How To Register?
        </div>
    </div>
</template>

<style module>
.intro,
.instructors,
.tickets {
    padding: 8rem 20rem;
}

.intro {
    display: flex;
    height: max-content;
    column-gap: 20%;
}

.intro__left {
    display: flex;
    flex: 1.5;
    flex-direction: column;
    align-items: left;
    row-gap: 8rem;
}

.intro__title {
    font-size: var(--font-h1);
    line-height: var(--line-height-h1);
}

.intro__register {
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    padding: 1.6rem 3.2rem;
    font-size: var(--font-h2);
    color: #EA2020;
    border: 0.4rem solid #EA2020;
    border-radius: 0.4rem;
    cursor: pointer;
    transition: transform ease-in-out 0.2s;
}

.intro__register:hover {
    transform: scale(1.05, 1.05);
}

.intro__right {
    flex: 1;
    min-width: 0;
    background-image: url('@/assets/images/JIA.jpg');
    background-size: cover;
    background-position: center;
}

.instructors,
.tickets {
    background-color: var(--main-color-purple);
}

.instructors__title,
.tickets__title {
    font-size: var(--font-h1);
    text-align: center;
    margin-bottom: 8rem;
}

.instructors__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 6rem;
}

.instructors__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.instructors__img {
    width: 23rem;
    height: 23rem;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
}

.instructors__name {
    cursor: pointer;
    text-decoration: underline;
}

.band {
    background-image: url('@/assets/images/band.jpg');
    height: 90vh;
    background-position: center;
    background-size: cover;
    padding-top: 40vh;
    cursor: pointer;
}

.band__title {
    font-size: 8rem;
    line-height: 10rem;
    height: 3em;
    display: flex;
    align-items: center;
    padding-left: 20rem;
    backdrop-filter: blur(10px);
}

.tickets {
    display: flex;
    flex-direction: column;
}

.tickets__cards {
    display: flex;
    justify-content: space-between;
}

.tickets__register {
    cursor: pointer;
    text-decoration: underline;
    margin-top: 1em;
}
</style>