<script setup lang='ts'>
import config from '../utils/config'
</script>

<template>
    <div :class="$style.container">
        {{ config.competitions }}
    </div>
</template>

<style module>
.container {
    white-space: break-spaces;
    padding: 0.6rem;
    border: 1.5rem double #423ec6;
}
</style>