<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { isMobile } from './utils/device';
import { MOBILE_PREFIX } from './constants/pages';
import { watchEffect } from 'vue';
const router = useRouter()

watchEffect(() => {
  const currentPath = router.currentRoute.value.path
  if (isMobile && currentPath.indexOf(MOBILE_PREFIX) < 0) {
    router.replace({ path: MOBILE_PREFIX + currentPath })
  } else if (!isMobile && currentPath.indexOf(MOBILE_PREFIX) >= 0) {
    router.replace({ path: currentPath.replace(MOBILE_PREFIX, '') })
  }
})

</script>

<template>
  <RouterView />
</template>

<style></style>
