<script setup lang='ts'>
import Content from '@/views/components/Content_mb.vue';
import img1701 from '@/assets/images/1701.gif'
import img1701_2 from '@/assets/images/1701.jpg'
import imgMap from '@/assets/images/map.png'


</script>

<template>
    <Content with-bottom-border>
        <div :class="$style.img" :style="{ backgroundImage: `url(${img1701_2})` }"></div>
        <div :class="$style.title">1701 MAX</div>
        <div>
            1701 Live House Max 总面积有1000多平，包含观演区、酒水区、 舞台区、后台等，1701 Live House 总面积有400多平。<br>
            1701 Live House Max, the top live house in Asia with 500 ㎡ dancing floor. Fabulous Instructors, first-class
            swing jazz band, hot DJs and full-energy extraordinary dancers in China are all here at Nanjing Lindy Festival
            2024! Save your date!<br>
        </div>

        <div :class="$style.img" :style="{ backgroundImage: `url(${imgMap})` }"></div>
        <div :class="$style.title">地理位置及交通<br>Location & Transport</div>
        <div>
            出发：南京南站<br>
            到达：1701 Live House Max<br>
            驾车：5公里，高峰期16分钟，夜间驾车8分钟。<br>
            地铁：1号线，至天隆寺站，骑车1.2公里约6分钟<br><br>
            From：Nanjing South Railway Station<br>
            To：1701 Live House Max<br>
            Taxi/Car：5 KM. 8-16 minutes<br>
            Subway： Metro Line 1 to Tianlongsi Station and then take a 13 minutes’ walk<br><br>
            <br>
            出发：南京禄口国际机场<br>
            到达：1701 Live House Max<br>
            驾车：33公里，高峰期约30分钟。夜间驾车24分钟。<br>
            地铁：S1号线至南京南站，转S3号线至铁心桥站，骑车900米。<br><br>
            From：Nanjing Luke International Airport<br>
            To：1701 Live House Max<br>
            Taxi/Car：33 KM. 24-30 minutes<br>
            Subway： Take Metro Line S1 to Nanjing South Railway Station, transfer to S3 to Tiexinqiao Station and then take
            a 10 minutes’ walk
        </div>

    </Content>
</template>

<style module>
.img {
    background-position: center;
    background-size: cover;
    height: 45rem;

    /* margin-bottom: 2em; */
}

.img:not(:first-child) {
    margin-top: 2em;
}

.title {
    font-size: var(--font-h2);
    margin: 1em 0 2em 0;
}
</style>