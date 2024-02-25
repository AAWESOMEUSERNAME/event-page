<script setup lang='ts'>
const props = defineProps<{
    withBottomBorder?: boolean
    customCls?: {
        container?: string
        inner?: string
    }
}>()
</script>

<template>
    <div :class="`${$style.container} ${props.withBottomBorder ? $style.border : ''} ${props.customCls?.container ?? ''}`">
        <div :class="`${$style.inner} ${props.customCls?.inner ?? ''}`">
            <slot></slot>
        </div>
    </div>
</template>

<style module>
.container {
    display: flex;
    justify-content: center;
}

.border {
    border-bottom: 1px solid var(--main-color-grey);
}

.inner {
    padding: 10rem 4rem;
    width: 100%;
}
</style>