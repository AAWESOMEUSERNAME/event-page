<script setup lang='ts'>
import { TICKET, ticketInfos } from '@/constants/tickets'
import { ref } from 'vue';
const props = defineProps<{
    current?: TICKET
    onChange?: (key: TICKET) => void
}>()

const isSmall = ref(!!props.onChange) 
</script>

<template>
    <div v-for="info in ticketInfos"
        :class="`${$style.card} ${props.current === info.type ? $style.current : ''} ${isSmall ? $style.small : ''}`"
        @click="props.onChange?.(info.type)">
        <div :class="$style.card__title">{{ info.nameCn }}<br>{{ info.nameEn }}</div>
        <ul v-if="!isSmall">
            <li v-for="r in info.rulesCn">
                {{ r }}
            </li>
        </ul>
        <ul v-if="!isSmall">
            <li v-for="r in info.rulesEn">
                {{ r }}
            </li>
        </ul>
        <div :class="$style.card__price">
            {{ info.price }}
        </div>
    </div>
</template>

<style module>
.card {
    border: 4px var(--main-color-white) solid;
    width: 35rem;
    padding: 1em 0.5em;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.card.small{
    padding: 0.2em;
}

.card.current {
    position: relative;
    background-color: var(--main-color-white);
    font-weight: bold;
    color: var(--main-color-purple);
}

.card.current::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(100%, -50%);
}

.card__title {
    font-size: var(--font-h2);
    text-align: center;
}

.small .card__title {
    font-size: var(--font-p);
    line-height: 1.2em;
}

.card ul {
    margin-top: 1em;
}

.card li {
    font-size: 1.6rem;
    line-height: 1.6em;
}

.card__price {
    text-align: center;
    font-size: var(--font-h2);
    border-top: 4px dotted var(--main-color-white);
    padding-top: var(--font-p);
    margin-top: var(--font-p);
}
.small .card__price {
    font-size: var(--font-p);
    padding-top: 0;
    margin-top: 0.2em;
}

.current .card__price {
    border-top: 4px dotted var(--main-color-purple);
}
</style>