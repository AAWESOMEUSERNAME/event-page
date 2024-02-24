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
        <div :class="$style.intro__title">爵对莱斯·南京林迪节<br>Nanjing Lindy Fesitival 2024<br>5/31-6/2</div>
        <div :class="$style.intro__content">
            <div :class="$style.intro__left">
                <div :class="$style.intro__main">
                    在这样一个功能齐全、设备顶级的千人演唱会场地（500平舞池）。请来Swing Shouters、Ryan
                    Francois等著名国内外老师、优秀DJ、经验丰富的工作团队和全国甚至世界各地的舞者，能创造什么样的可能？更多活动信息请参照微信公众号：爵对莱斯南京摇摆舞。
                    <br><br>
                    Top live house in Aisa with 500 ㎡ dancing floor
                    Top-tier Instructors
                    First-class Swing Jazz Band and hot DJs
                    First-class dancers in China
                    All meet here in Nanjing Lindy Festival 2024
                    Save your date！

                </div>
                <div :class="$style.intro__register" @click="navTo(PATH.TICKETS)">报名 REGISTER</div>
            </div>
            <div :class="$style.intro__right"></div>
        </div>
    </div>
    <div :class="$style.instructors">
        <div :class="$style.instructors__title">教师&nbsp;&nbsp;INSTRUCTORS</div>
        <div :class="$style.instructors__grid">
            <div v-for="([key, info]) in instructorArr" :class="$style.instructors__card">
                <div :class="$style.instructors__img"
                    :style="{ backgroundImage: `url(${key === 'Ramona' ? info.imgBW : info.img})` }"
                    @click="navTo(PATH.INSTRUCTORS + '?current=' + key)"></div>
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
    flex-direction: column;
    row-gap: 2em;
}

.intro__content {
    display: flex;
    height: max-content;
    column-gap: 10%;
}

.intro__left {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: left;
    row-gap: 8rem;
}

.intro__title {
    font-size: var(--font-h1);
    line-height: var(--line-height-h1);
    text-align: center;
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
    background-image: url('@/assets/images/home_intro.jpg');
    background-size: cover;
    background-position: center;
    margin-bottom: 20rem;
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
    cursor: pointer;
}

.instructors__name {
    cursor: pointer;
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
    justify-content: space-evenly;
    flex-wrap: wrap;
    row-gap: 1em;
}

.tickets__register {
    cursor: pointer;
    text-decoration: underline;
    margin-top: 1em;
}
</style>