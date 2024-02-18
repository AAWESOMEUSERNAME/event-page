<script setup lang='ts'>
import instructors from '@/constants/instructors';
import InstructorCard from './InstructorCard.vue';
import Content from '@/views/components/Content.vue';

const instructorArr = Object.entries(instructors)
</script>

<template>
    <Content with-bottom-border :custom-cls="{ inner: $style.inner }">
        <InstructorCard v-for="([key, info], inx) in instructorArr" :img-position="inx % 2 === 0 ? 'left' : 'right'"
            :name="info.name" :img-src="info.img" :text="info.intro" />
    </Content>
</template>

<style module>
.inner {
    display: flex;
    flex-direction: column;
    row-gap: 16rem;
}
</style>