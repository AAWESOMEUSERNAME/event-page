<script setup lang='ts'>
import { ref } from 'vue';
import PersonCard from '../components/PersonCard.vue';
import picRyan from '@/assets/2024/images/teachers/Ryan.jpg'
import picNathan from '@/assets/2024/images/teachers/Nathan.jpg'
import picRamona from '@/assets/2024/images/teachers/Ramona.jpg'
import picSing from '@/assets/2024/images/teachers/Sing.jpg'
import picZeng from '@/assets/2024/images/teachers/Zeng.jpg'
import picBei from '@/assets/2024/images/teachers/Bei.jpg'

const infoMap: Record<string, {
    pic: string,
    name: string
}> = {
    Ryan: {
        pic: picRyan,
        name: 'Ryan Francois'
    },
    Sing: {
        pic: picSing,
        name: 'Sing Yuen Lim'
    },
    Nathan: {
        pic: picNathan,
        name: 'Nathan Bugh'
    },
    Ramona: {
        pic: picRamona,
        name: 'Ramona Staffeld'
    },
    Zeng: {
        pic: picZeng,
        name: 'WeiMing Zeng'
    },
    Bei: {
        pic: picBei,
        name: 'BeiBei Huang'
    }
}

const teachersInfo = ref(Object.entries(infoMap).map(([key, info]) => ({
    name: info.name, srcImg: info.pic
})))

</script>

<template>
    <div :class="$style.container">
        <PersonCard v-for="(teacher, index) in teachersInfo" :name="teacher.name"
            :img-src="teacher.srcImg" />
    </div>
</template>

<style module>
.container {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
    column-gap: 2.6rem;
    row-gap: 3.6rem;
}
</style>