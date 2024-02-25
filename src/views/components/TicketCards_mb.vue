<script setup lang='ts'>
import { ticketInfos } from '@/constants/tickets';

</script>

<template>
    <div v-for="info in ticketInfos" :class="$style.card">
        <div :class="$style.card__title">{{ info.nameCn }}<br>{{ info.nameEn }}</div>
        <ul>
            <li v-for="r in info.rulesCn">
                {{ r }}
            </li>
        </ul>
        <ul>
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
    width: 100%;
    padding: 1em 0.5em;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.card__title {
    font-size: var(--font-h2);
    text-align: center;
}

.card ul {
    margin-top: 1em;
    padding-left: 2em;
}

.card li {
    font-size: var(--font-p);
    line-height: 1.6em;
}

.card__price {
    text-align: center;
    font-size: var(--font-h2);
    border-top: 4px dotted var(--main-color-white);
    padding-top: var(--font-p);
    margin-top: var(--font-p);
}

</style>