<script setup lang='ts'>
import Content from '@/views/components/Content.vue';
import img1701 from '@/assets/images/1701.jpg'


</script>

<template>
    <Content with-bottom-border>
        <div :class="$style.img" :style="{ backgroundImage: `url(${img1701})` }"></div>
        <div :class="$style.title">1701 MAX</div>
        <div>
            Bla,bla,Bla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,bla
        </div>
        <div :class="$style.img" :style="{ backgroundImage: `url(${img1701})` }"></div>
        <div :class="$style.title">地理位置及交通</div>
        <div :class="$style.title">Location & Transport</div>
        <div>
            Bla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,blaBla,bla
        </div>
    </Content>
</template>

<style module>
.img {
    background-position: center;
    background-size: cover;
    height: 45rem;

    margin-bottom: 2em;
}

.img:not(:first-child) {
    margin-top: 4em;
}

.title {
    font-size: var(--font-h2);
    /* margin: 2em 0 1em 0; */
}
</style>