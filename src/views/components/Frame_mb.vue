<script setup lang='ts'>
import bigBanner from '@/assets/images/banner/big_mb.jpg';
import { MOBILE_PREFIX, PATH } from '@/constants/pages';
import { computed, watchPostEffect } from 'vue';
import { usePage } from '../utils/functions';
import Banner from './Banner.vue';
import Footer from './Footer_mb.vue';
import NavigatorMB from './Navigator_mb.vue';

import { RouterView } from 'vue-router';

const scrollContentId = 'scrollContentId'
const currentPage = usePage()
const isHomePage = computed(() => currentPage?.value?.path === (MOBILE_PREFIX + PATH.HOME))
const currentBannerSrc = computed(() => currentPage?.value?.bannerMB)

watchPostEffect(() => {
    console.debug(currentPage.value)
    const scrollEle = document.querySelector('#' + scrollContentId)
    if (scrollEle) {
        scrollEle.scrollTop = 0
    }
})

</script>

<template>
    <div :class="$style.container">
        <NavigatorMB></NavigatorMB>
        <div :class="$style.content" :id="scrollContentId">
            <Banner v-if="isHomePage" :img-src="currentBannerSrc ?? bigBanner" size="big"></Banner>
            <Banner v-if="!isHomePage" :img-src="currentBannerSrc ?? bigBanner" size="small"></Banner>
            <router-view></router-view>
            <Footer></Footer>
        </div>
    </div>
</template>

<style module>
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.content {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
}
</style>