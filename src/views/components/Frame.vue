<script setup lang='ts'>
import bigBanner from '@/assets/images/banner/big.jpg';
import { PATH } from '@/constants/pages';
import { computed } from 'vue';
import { usePage } from '../utils/functions';
import Banner from './Banner.vue';
import Footer from './Footer.vue';
import Navigator from './Navigator.vue';

import { RouterView } from 'vue-router';

const currentPage = usePage()
const currentBannerSrc = computed(() => currentPage?.value?.path === PATH.HOME ? bigBanner : currentPage?.value?.banner ?? '')
</script>

<template>
    <Banner v-if="currentPage?.path === PATH.HOME" :img-src="currentBannerSrc" size="big"></Banner>
    <Navigator></Navigator>
    <Banner v-if="currentPage?.path !== PATH.HOME" :img-src="currentBannerSrc" size="small"></Banner>
    <router-view></router-view>
    <Footer></Footer>
</template>

<style module></style>