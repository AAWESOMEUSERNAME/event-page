<script setup lang='ts'>
import Content from '@/views/components/Content_mb.vue';
import TicketCards from '@/views/components/TicketCards_mb.vue';
import { ref } from 'vue';
import { TICKET, ticketInfos, type TicketInfo } from '@/constants/tickets'

const currentTicket = ref<TicketInfo>(ticketInfos[0])
const showOption = ref(true)

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
            ·Please read the track information before you buy. <br>
            ·The requirement on dancing experience is based on self evaluation.<br>
            ·You should find a partner before you register for the Lindy Hop performance track and fill in your partner’s
            name exactly.<br>
            ·You should firstly buy Full Pass or Party Pass before you register for add-on class which will be notified soon
            in March.<br>
        </div>
        <div :class="$style.help">点击票种查看对应可报名课程<br>Click the ticket type to see the relative class</div>
        <div :class="$style.classes__container">
            <div :class="`${$style.cards__select} ${showOption ? $style.open : ''}`">
                <div :class="$style.cards__select__value" @click="showOption = !showOption">
                    {{ currentTicket.nameCn }}<br>
                    {{ currentTicket.nameEn }}<br>
                    {{ currentTicket.price }}<br>
                </div>
                <ul v-if="showOption">
                    <li v-for="info in ticketInfos" :class="currentTicket.type === info.type ? $style.current : ''"
                        @click="() => { currentTicket = info; showOption = false }">
                        {{ info.nameCn }}<br>
                        {{ info.nameEn }}<br>
                        {{ info.price }}<br>
                    </li>
                </ul>
            </div>
            <div :class="$style.classes__detail">

            </div>
            <div :class="$style.classes">
                <div :class="$style.classes__card" v-if="currentTicket.type === TICKET.full_lindy">
                    <div :class="$style.classes__title">林迪舞中高级 Lindy Hop Inter-Adv</div>
                    <div :class="$style.classes__desc">
                        <div>
                            包含课时<br>Class Hours
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
                            1-3 years' dancing experience required
                        </div>
                        <div>
                            是否轮换舞伴<br>Change Partner
                        </div>
                        <div>是 Yes</div>
                    </div>
                </div>
                <div :class="$style.classes__card" v-if="currentTicket.type === TICKET.full_lindy_performance">
                    <div :class="$style.classes__title">林迪舞表演班 Lindy Hop Performance</div>
                    <div :class="$style.classes__desc">
                        <div>
                            包含课时<br>Class Hours
                        </div>
                        <div>
                            Ryan & Sing 4h<br>
                            Zeng & Bei 2h<br>
                            * 本课程最后将完成1支编舞。<br>
                            * Will complete a showcase after this class
                        </div>
                        <div>
                            适合人群<br>Suit For
                        </div>
                        <div>适合林迪舞舞龄3年及以上的舞者，即2021年6月1日之前开始学习摇摆舞。或舞龄2-3年，但明显超越同舞龄舞者。<br>
                            3 years' dancing experience required
                        </div>
                        <div>
                            是否轮换舞伴<br>Change Partner
                        </div>
                        <div>否 No</div>
                    </div>
                </div>
                <div :class="$style.classes__card" v-if="currentTicket.type === TICKET.full_solo">
                    <div :class="$style.classes__title">爵士单人舞中高级 Solo Jazz Inter-Adv</div>
                    <div :class="$style.classes__desc">
                        <div>
                            包含课时<br>Class Hours
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
                            1-3 years' dancing experience required
                        </div>
                    </div>
                </div>
                <div :class="$style.classes__card" v-if="currentTicket.type === TICKET.full_solo_performance">
                    <div :class="$style.classes__title">爵士单人舞表演班 Solo Jazz Performance</div>
                    <div :class="$style.classes__desc">
                        <div>
                            包含课时<br>Class Hours
                        </div>
                        <div>
                            Nathan 3h<br>
                            Ramona 3h
                        </div>
                        <div>
                            适合人群<br>Suit For
                        </div>
                        <div>适合爵士单人舞舞龄3年及以上的舞者。或舞龄2-3年，但明显超越同舞龄舞者。<br>
                            3 years' dancing experience required
                        </div>
                    </div>
                </div>
                <div :class="$style.classes__card">
                    <div :class="$style.classes__title">附加课 Add On</div>
                    <div>* 课程将于3月推出</div>
                    <div>* Details will be released on March</div>
                </div>
            </div>
        </div>

    </Content>
    <Content :custom-cls="{ inner: $style.register__container }" with-bottom-border>
        <div :class="$style.register">
            <div :class="$style.register__title">
                如何报名？<br>
                How To Register?
            </div>
            <div>
                <div :class="$style.detail__title">国内舞者：</div>
                1. 请使用微信扫码进入报名程序，根据提示完成报名和付费流程。<br>
                <div :class="$style.qr"></div>
                2. 报名后需等待审核，可在小程序内查看审核结果。通过后会收到凭证，活动当天须出示此凭证。<br>
                3. 特殊情况：选择报名林迪舞中高级课程的,若因Le /Fo比例暂时未能确认报名成功，可选择退费或继续等待。我们将依照报名的时间顺序逐一确认名额。<br>
                其他：
                3月31（含）前可申请退票，我们将退还所付款的60%；<br>
                3月31日之后，官方不接受退票，可自行转票。<br>
                可自行转让，确认变更后请联系客服微信，提供所需转让资料。<br>
                转让成功后，受让人将得到官方邮件确认。<br>
                转票截止日期，5月29日晚18:00。<br>

                <div :class="$style.detail__title">For Foreign Dancers</div>
                Please follow the link(<a href="https://forms.gle/GvTN2Htksi5Wcpzn6"
                    target="">https://forms.gle/GvTN2Htksi5Wcpzn6</a>) to
                finish the registration.<br>
                * 50 tickets limited for overseas dancers. Please deposit 50 USD through PayPal and the rest at the door.You
                will get an email on payment method.<br>
                * You will be put on the waiting list if it is full.<br>
                * Your deposit is transferable but non-refundable.
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


.title,
.register__title {
    font-size: var(--font-h1);
    margin-top: 1em;
    margin-bottom: 0.5em;
    line-height: 1.5em;
}

.help {
    margin-top: 3em;
    margin-bottom: 1em;
}


.classes__container {
    display: flex;
    flex-direction: column;
    row-gap: 1em;
}

.cards__select ul {
    list-style: none;
}
.cards__select li {
    padding: 0.5em 1em;
    background-color: var(--main-color-white);
    color: var(--main-color-purple);
    border-top: 1px solid;
    border-bottom: 1px solid;
}
.cards__select li:first-child {
    margin-top: 0.2em;
}
.cards__select li.current {
    background-color: var(--main-color-purple);
    color: var(--main-color-white);
    border: 2px solid var(--main-color-white);
    position: relative;
}
.cards__select li.current::after {
    content: '√';
    font-weight: bold;
    position: absolute;
    font-size: 4rem;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
}


.cards__select__value {
    border: 2px solid var(--main-color-white);
    padding: 0.5em;
    position: relative;
}

.cards__select__value::after {
    position: absolute;
    content: '';
    top: 50%;
    right: 1em;
    border-top: 8px solid var(--main-color-white);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    transform: translateY(-50%);
}

.open .cards__select__value::after {
    transform: rotateX(180deg);
}


.classes {
    flex: 1;
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

.register__container {
    padding-top: 10rem;
}

.detail__title {
    font-size: var(--font-h2);
    margin-bottom: 0.5em;
    margin-top: 1em;
}

.qr {
    background-image: url('@/assets/images/registerQR.jpg');
    width: 10em;
    margin: 0.5em 0;
    aspect-ratio: 1;
    background-size: contain;
    background-repeat: no-repeat;
}

.register a {
    color: var(--main-color-purple);
}
</style>