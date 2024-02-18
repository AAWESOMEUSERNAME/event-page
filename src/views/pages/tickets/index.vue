<script setup lang='ts'>
import Content from '@/views/components/Content.vue';
import TicketCards from '@/views/components/TicketCards.vue';
import { ref } from 'vue';
import { TICKET } from '@/constants/tickets'

const currentTicket = ref<TICKET>(TICKET.full)
const onChange = (k: TICKET) => {
    currentTicket.value = k
}

</script>

<template>
    <Content :custom-cls="{ container: $style.container, inner: $style.inner }">
        <div :class="$style.title">
            注意事项<br>
            Attention
        </div>
        <div>
            无法单独购买课程，所有课程不接受Drop in<br>
            为了更好的学习体验，请仔细阅读报名要求。舞龄自行评估。<br>
            林迪舞表演班需要搭档报名且共同上课，报名时请确保你所填写的搭档名字和对方所使用的是同一名字。<br>
            报名Add on课程，需要持有本次活动的Full Pass或Party Pass。<br><br>
            (以下应替换为英文)无法单独购买课程，所有课程不接受Drop in<br>
            为了更好的学习体验，请仔细阅读报名要求。舞龄自行评估。<br>
            林迪舞表演班需要搭档报名且共同上课，报名时请确保你所填写的搭档名字和对方所使用的是同一名字。<br>
            报名Add on课程，需要持有本次活动的Full Pass或Party Pass。
        </div>
        <div :class="$style.help">点击票种查看对应可报名课程</div>
        <div :class="$style.cards">
            <TicketCards :current="currentTicket" :on-change="onChange" />
        </div>
        <div :class="$style.classes">
            <div :class="$style.classes__card" v-if="currentTicket === TICKET.full">
                <div :class="$style.classes__title">林迪舞中高级 Lindy Hop Pre(此处需要修正英文)</div>
                <div :class="$style.classes__desc">
                    <div>
                        包含课时<br>Including(此处需要修正英文)
                    </div>
                    <div>
                        Ryan & Sing 2h<br>
                        Nathan & Ramona 2h<br>
                        Zeng & Bei 1h<br>
                    </div>
                    <div>
                        适合人群<br>Suit For
                    </div>
                    <div>适合林迪舞舞龄1-3年的舞者，即2023年6月1日之前开始学习摇摆舞。<br>
                        (需要英文)
                    </div>
                    <div>
                        是否轮换舞伴<br>Change？
                    </div>
                    <div>是 Yes</div>
                </div>
            </div>
            <div :class="$style.classes__card" v-if="currentTicket === TICKET.full_performance">
                <div :class="$style.classes__title">林迪舞表演班 Lindy Hop Pre(此处需要修正英文)</div>
                <div :class="$style.classes__desc">
                    <div>
                        包含课时<br>Including(此处需要修正英文)
                    </div>
                    <div>
                        Ryan & Sing 4h<br>
                        Zeng & Bei 2h<br>
                        * 本课程最后将完成1支编舞。
                    </div>
                    <div>
                        适合人群<br>Suit For
                    </div>
                    <div>适合林迪舞舞龄3年及以上的舞者，即2021年6月1日之前开始学习摇摆舞。或舞龄2-3年，但明显超越同舞龄舞者。<br>
                        (需要英文)
                    </div>
                    <div>
                        是否轮换舞伴<br>Change？
                    </div>
                    <div>否 No</div>
                </div>
            </div>
            <div :class="$style.classes__card" v-if="currentTicket === TICKET.full">
                <div :class="$style.classes__title">爵士单人舞中高级 Lindy Hop Pre(此处需要修正英文)</div>
                <div :class="$style.classes__desc">
                    <div>
                        包含课时<br>Including(此处需要修正英文)
                    </div>
                    <div>
                        Nathan 2h<br>
                        Ramona 2h<br>
                        Ryan 1h
                    </div>
                    <div>
                        适合人群<br>Suit For
                    </div>
                    <div>适合爵士单人舞舞龄1-3年的舞者<br>
                        (需要英文)
                    </div>
                </div>
            </div>
            <div :class="$style.classes__card" v-if="currentTicket === TICKET.full_performance">
                <div :class="$style.classes__title">爵士单人舞表演班 Lindy Hop Pre(此处需要修正英文)</div>
                <div :class="$style.classes__desc">
                    <div>
                        包含课时<br>Including(此处需要修正英文)
                    </div>
                    <div>
                        Nathan 3h<br>
                        Ramona 3h
                    </div>
                    <div>
                        适合人群<br>Suit For
                    </div>
                    <div>适合爵士单人舞舞龄3年及以上的舞者。或舞龄2-3年，但明显超越同舞龄舞者。<br>
                        (需要英文)
                    </div>
                </div>
            </div>
            <div :class="$style.classes__card">
                <div :class="$style.classes__title">附加课 Add On</div>
                <div>* 不同票种本课程无差别</div>
                <div>* 课程将于3月推出</div>
                <!-- <div :class="$style.classes__desc">
                    <div>
                        包含课时<br>Including(此处需要修正英文)
                    </div>
                    <div>
                        Nathan 3h<br>
                        Ramona 3h
                    </div>
                    <div>
                        适合人群<br>Suit For
                    </div>
                    <div>适合爵士单人舞舞龄3年及以上的舞者。或舞龄2-3年，但明显超越同舞龄舞者。<br>
                        (需要英文)
                    </div>
                </div> -->
            </div>
        </div>
    </Content>
    <Content :custom-cls="{inner: $style.register__container}">
        <div :class="$style.register">
            <div :class="$style.register__title">
                如何报名？<br>
                How To Register?
            </div>
            <div>
                以下应为具体报名说明
            </div>
        </div>
    </Content>
</template>

<style module>
.container {
    background-color: var(--main-color-purple);
}

.inner {
    padding-top: 15rem;
    padding-bottom: 10rem;
}

.cards {
    display: flex;
    justify-content: space-between;
}

.title,.register__title {
    font-size: var(--font-h1);
    margin-top: 1em;
    margin-bottom: 0.5em;
    line-height: 1.5em;
}

.help {
    margin-top: 3em;
    margin-bottom: 1em;
}

.classes {
    margin-top: 5em;
}

.classes__title {
    font-size: var(--font-h2);
    font-weight: bold;
    border-bottom: 6px double var(--main-color-white);
    line-height: 2em;
    margin-bottom: 0.5em;
}

.classes__desc {
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: 2em;
    row-gap: 1em;
}

.classes__card:not(:first-child) {
    margin-top: 2em;
}

.register__container{
    padding-top: 10rem;
}
</style>