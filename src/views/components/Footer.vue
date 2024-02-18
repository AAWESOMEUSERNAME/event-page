<script setup lang='ts'>
import wx from '@/assets/images/wx_assistent.jpg'
</script>

<template>
    <footer :class="$style.container">
        <div :class="$style.desc">
            <div>关于我们 About Us</div>
            <div>
                一些关于NJLH的介绍，一些关于NJLH的介绍，一些关于NJLH的介绍，一些关于NJLH的介绍，一些关于NJLH的介绍，一些关于NJLH的介绍， <br>
                <br>
                微信公众号：爵对莱斯南京摇摆舞<br>
                Facebook：Nanjing Lindy Festival 2024<br>
                邮箱 Email：test@test.com
            </div>
        </div>
        <div :class="$style.contact">

        </div>
        <div :class="$style.qr">
            <img :src="wx" alt="wx QR">
            客服微信<br>
            Wechat Customer Service
        </div>
    </footer>
</template>

<style module>
.container {
    background-color: var(--main-color-black);
    display: flex;
    justify-content: space-between;
    column-gap: 5rem;
    padding: 10rem 20rem;
}

.desc {
    flex: 1;
}

.desc div:first-child {
    font-size: var(--font-h2);
    margin-bottom: 1em;
}

.desc div:last-child {
    font-size: var(--font-small);
    line-height: 1.7em;
}

.contact {
    font-size: var(--font-small);
}

.qr {
    display: flex;
    flex-direction: column;
    font-size: var(--font-small);
    text-align: center;
    align-items: center;
    line-height: 1.2em;
}

.qr img {
    width: 20rem;
    height: 20rem;
}
</style>