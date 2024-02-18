<script setup lang='ts'>
import { TICKET } from '@/constants/tickets'
const props = defineProps<{
    current?: TICKET
    onChange?: (key: TICKET) => void
}>()
</script>

<template>
    <div :class="`${$style.card} ${props.current === TICKET.full ? $style.current : ''}`" @click="props.onChange?.(TICKET.full)">
        <div :class="$style.card__title">Full Pass</div>
        <ul>
            <li>5小时课程<br>(林迪舞中高级 或 爵士单人舞中高级)</li>
            <li>3晚舞会</li>
            <li>建议舞龄1-3年</li>
        </ul>
        <ul>
            <li>5 hours of class<br>(Lindy Hop Inter-Adv or Solo Jazz Inter-Adv)</li>
            <li>3 nights of party</li>
            <li>suit for dancers with 1-3 years expirence</li>
        </ul>
        <div :class="$style.card__price">
            ￥1680
        </div>
    </div>
    <div :class="`${$style.card} ${props.current === TICKET.full_performance ? $style.current : ''}`"
        @click="props.onChange?.(TICKET.full_performance)">
        <div :class="$style.card__title">Full Pass Performence</div>
        <ul>
            <li>6小时课程<br>(林迪舞表演班 或 爵士单人舞表演班)</li>
            <li>3晚舞会</li>
            <li>建议舞龄3年以上</li>
        </ul>
        <ul>
            <li>6 hours of class<br>(Lindy Hop Performance or Solo Jazz Performance)</li>
            <li>3 nights of party</li>
            <li>suit for dancers with at least 3 years expirence</li>
        </ul>
        <div :class="$style.card__price">
            ￥1780
        </div>
    </div>
    <div :class="`${$style.card} ${props.current === TICKET.party ? $style.current : ''}`" @click="props.onChange?.(TICKET.party)">
        <div :class="$style.card__title">Party Pass</div>
        <ul>
            <li>3晚舞会</li>
            <li>无单日票</li>
        </ul>
        <ul>
            <li>3 nights of party</li>
            <li>no ticket for single day</li>
        </ul>
        <div :class="$style.card__price">
            ￥880
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

.card.current {
    position: relative;
    /* border: 4px var(--main-color-purple) solid; */
    background-color: var(--main-color-white);
    font-weight: bold;
    color: var(--main-color-purple);
}

.card.current::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 100%);
    border-left: transparent 50px solid;
    border-right: transparent 50px solid;
    border-top: var(--main-color-white) 40px solid;
}

.card__title {
    font-size: var(--font-h2);
    text-align: center;
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

.current .card__price {
    border-top: 4px dotted var(--main-color-purple);
}
</style>