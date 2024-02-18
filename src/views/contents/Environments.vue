<script setup lang='ts'>
import _pic1701 from '@/assets/2024/images/1701.jpg'
import _picBand from '@/assets/2024/images/band.jpg'
import _picDJ from '@/assets/2024/images/DJ.jpg'
import { ref } from 'vue';
import _config from '../utils/config'

const pic1701 = ref(_pic1701)
const picBand = ref(_picBand)
const picDJ = ref(_picDJ)
const config = ref(_config)
</script>

<template>
    <div :class="$style.container">
        <div :class="$style.desc">
            <h3>专业场地</h3>
            <p>{{config.environments.venue}}</p>
        </div>
        <div :class="$style.pic" :style="{backgroundImage: `url(${pic1701})`}"></div>
        <div :class="$style.pic" :style="{backgroundImage: `url(${picBand})`}"></div>
        <div :class="$style.desc">
            <h3>现场乐队</h3>
            <p>{{config.environments.band}}</p>
        </div>
        <div :class="$style.desc">
            <h3>热门DJ</h3>
            <p>{{config.environments.DJ}}</p>
        </div>
        <div :class="$style.pic" :style="{backgroundImage: `url(${picDJ})`}"></div>
    </div>
</template>

<style module>
.container{
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(3, min(100vh, 28rem));
}

.pic{
    background-size: cover;
}

.desc {
    padding: 0 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>