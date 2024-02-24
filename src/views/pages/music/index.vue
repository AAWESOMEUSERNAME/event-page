<script setup lang='ts'>
import Content from '@/views/components/Content.vue';
import DJs from '@/constants/DJs'

</script>

<template>
    <Content :custom-cls="{ container: $style.band }">
        <div :class="$style.title">现场乐队&nbsp;&nbsp;LIVE BAND</div>
        <div :class="$style.title">Swing Shouters</div>
        <div :class="$style.desc">
            Swing Shouters is a quintet with a powerful and communicative energy who arranges and plays jazz standards from
            30’s to 40’s.As the band was born within the dance school Swing & Shout (Tours, France) their music is ideal for
            swing dancers.With more than 300 gigs under their belt the Swing Shouters had become one of the most popular
            band of the international Swing community. <br>
            Musicians: <br>
            Tenor Saxophone - Vocals : Sylvain Roudier<br>
            Trombone : Benoist Pasquier<br>
            Doublebass - Vocals : Carl Cordelier<br>
            Drums : Alban Aupert<br>
            Guitar - Vocals : David Ménager
        </div>
        <div :class="$style.img"></div>
    </Content>
    <Content with-bottom-border>
        <div :class="$style.title">
            DJs
        </div>
        <div :class="$style.dj__container">
            <div v-for="item in DJs.filter(info => info.intro)" :class="$style.dj__card">
                <div :class="$style.dj__img" :style="{ backgroundImage: `url(${item.img})` }"></div>
                <div :class="$style.dj__name">{{ item.name }}</div>
                <div :class="$style.dj__intro">{{ item.intro }}</div>
            </div>
        </div>
        <div :class="$style.dj__container">
            <div v-for="item in DJs.filter(info => !info.intro)" :class="$style.dj__card">
                <div :class="$style.dj__img" :style="{ backgroundImage: `url(${item.img})` }"></div>
                <div :class="$style.dj__name">{{ item.name }}</div>
                <div :class="$style.dj__intro">{{ item.intro }}</div>
            </div>
        </div>
    </Content>
</template>

<style module>
.band {
    background-color: var(--main-color-purple);
}

.title {
    font-size: var(--font-h1);
    text-align: center;
    line-height: 1.5em;
}

.desc {
    text-align: center;
    margin-top: 2em;
}

.img {
    width: 100%;
    height: 50rem;
    margin-top: 2em;
    background-image: url('@/assets/images/band.jpg');
    background-size: cover;
    background-position: center;
}

.dj__container {
    margin-top: 8rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    column-gap: 4rem;
    row-gap: 10rem;
}

.dj__card {
    width: 34rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
}

.dj__img {
    width: 25rem;
    aspect-ratio: 1;
    border-radius: 100%;
    background-position: center;
    background-size: cover;
}

.dj__name {
    text-align: center;
    font-size: var(--font-h2);
    margin-bottom: 1em;
}
</style>