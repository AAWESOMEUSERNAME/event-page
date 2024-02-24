<script setup lang='ts'>
import Banner from './Banner.vue';
import Navigator from './Navigator.vue';
import { PATH } from '@/constants/pages';
import Footer from './Footer.vue';
import bigBanner from '@/assets/images/banner/big.jpg'
import { usePage } from '../utils/functions';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { isMobile } from '@/utils/device';
const router = useRouter()
const currentPath = router.currentRoute.value.path
if (isMobile && !currentPath.indexOf('mobile')) {
    router.replace('/mobile/' + currentPath)
}

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