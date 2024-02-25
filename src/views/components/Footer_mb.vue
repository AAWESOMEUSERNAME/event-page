<script setup lang='ts'>
import wx from '@/assets/images/wx_assistent.jpg'
</script>

<template>
    <footer :class="$style.container">
        <div :class="$style.title">关于我们 About Us</div>
        <div :class="$style.content">
            活动主办 | Organizer<br>
            爵对莱斯工作室 Laisi Swing Studio<br>
            策划/运营/统筹 | Planning, Operation, Coordination<br>
            爵对莱斯南京林迪节活动工作组 <br>
            <br>
            Facebook：Nanjing Lindy Festival 2024<br>
            微信公众号：爵对莱斯南京摇摆舞<br>
            邮箱 Email：nanjinglindyfestival@gmail.com
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
    flex-direction: column;
    justify-content: space-between;
    column-gap: 5rem;
    padding: 10rem 5rem;
}

.container .title {
    font-size: var(--font-h2);
    margin-bottom: 1em;
}

.container .content {
    line-height: 1.7em;
}

.qr {
    display: flex;
    flex-direction: column;
    font-size: var(--font-p);
    text-align: center;
    align-items: center;
    line-height: 1.5em;
    margin-top: 2em;
}

.qr img {
    width: 30rem;
    height: 30rem;
    margin-bottom: 0.5em;
}
</style>