<script setup lang='ts'>
import Content from '@/views/components/Content.vue';


</script>

<template>
    <Content :custom-cls="{ container: $style.container }">
        <div>
            注意事项：<br>
            - 报名比赛需持有本次活动的Party Pass或Full Pass<br>
            - 报名名额不得转让、若放弃不退款<br>
            <br>
            Attention: <br>
            You should hold Party Pass or Full Pass to participate the competition.<br>
            You can choose not to compete but you cannot tranfer your competition slot.<br>
        </div>
        <div :class="$style.title">林迪舞固定搭赛（公开组）<br>Lindy Hop Open Strictly</div>
        <div :class="$style.grid">
            <div>报名要求<br>Registration</div>
            <div>搭档报名，舞龄不限<br>Lead+Follow, No limitation on experience</div>

            <div>报名费用<br>Fee</div>
            <div>240元/对<br>240RMB/Couple</div>

            <div>比赛规则<br>Rules</div>
            <ol>
                <li>
                    预赛：N进8（8强赛）。所有选手分成4小组，每一小组所有选手同时跳，时长约2分钟。由DJ播放音乐。每一小组选出2对选手进入下一轮（半决赛）。 <br>
                    Prelim. All competitors will be divided into 4 groups. Dancers in same group will dance to DJ music for
                    about 2 minutes at the same time. In each group, judges will pick up two couples who will attend the
                    semi final.
                </li>
                <li>
                    半决赛：8进4（4强赛）。8对选手分成2小组，每小组4对选手，每一小组所有选手同时跳，时长约2分钟。现场乐队伴奏。每一小组选出2对选手进入下一轮（决赛）。 <br>
                    Semi Final. 8 couples who survives the prelim will be divided into 2 groups. Same rules with prelim but
                    dancers dance to live music.
                </li>
                <li>
                    决赛。4对选手同时跳，时长约2分钟。现场乐队伴奏。现场选出冠军，同时，在颁奖环节评选第二、三名。<br>
                    Final. 4 couples who survives the semi final will dance in one group. Same rules with semi final. Live
                    music. Judges will choose the Champion couple who will get the bonus of RMB 6000. During the awarding
                    session, we will announce the 2nd and 3rd place.
                </li>
            </ol>

            <div>音乐形式和速度<br>Music Information</div>
            <div>
                摇摆乐，结构为12小节或32小节（12 Bar or 32 Bar Structure），DJ或现场乐队决定。速度190-250BPM<br>
                12 Bar or 32 Bar structure up to DJ or live band. BPM 190-250.
            </div>

            <div>冠军奖金<br>Bonus For Champions</div>
            <div>
                6000 RMB
            </div>
        </div>

        <div :class="$style.title"> 林迪舞随机搭档赛（公开组）<br>Lindy Hop Open Mix & Match</div>
        <div :class="$style.grid">
            <div>报名要求<br>Registration</div>
            <div>单人报名，舞龄不限<br>No limitation on experience</div>

            <div>报名费用<br>Fee</div>
            <div>120元/人<br>120 RMB/Person</div>

            <div>比赛规则<br>Rules</div>
            <ol>
                <li>
                    预赛。海选，所有选手同时跳（若人数较多，会分成2组进行）。DJ播放音乐，3首歌（即3轮），每首歌播放1分钟左右。每首歌结束后将根据裁判要求更换舞伴。裁判将分别选出7位Lead选手和7位Follow选手进入决赛。<br>
                    Prelim. As most open mix&match competition goes, all dancers will randomly get a partner and change
                    partner each song played by DJ. Judges will choose 7 leads and 7 follows respectively into Final.
                </li>
                <li>
                    决赛，Spotlight。进入决赛的选手，根据裁判要求，在比赛现场随机搭配舞伴。每一对选手依次轮流出场，第一轮出场16*8，第二轮出场12*8，第二轮结束后All
                    Skate。国际裁判将评选出三对选手分别获得第一、二、三名。<br>
                    Final. Spotlight. Every couple will dance two rounds. Bpm 110-200. Live Band. 32 bar structure the first
                    round and 12 bar structure the second round
                </li>
            </ol>

            <div>音乐形式和速度<br>Music Information</div>
            <ol>
                <li>
                    预赛音乐由DJ现场决定，速度110Bpm-200Bpm，12 Bar or 32 Bar Structure。决赛由乐队现场伴奏，第一轮32 Bar Structure，第二轮12 Bar
                    Structure。<br>
                    Prelim. 12 Bar or 32 Bar structure up to DJ. BPM 110-200.
                    Final. Spotlight. Every couple will dance two rounds. Bpm 110-200. Live Band. 32 bar the first round and 12 bar the second round and all skate.
                </li>
            </ol>
        </div>

        <div :class="$style.title">随机搭档赛（新人组）<br>Lindy Hop Rookie Mix & Match</div>
        <div :class="$style.grid">
            <div>报名要求<br>Registration</div>
            <div>单人报名，舞龄自我评估2年以内<br>Less than 2 years of experience</div>

            <div>报名费用<br>Fee</div>
            <div>120元/人<br>120 RMB/Person</div>

            <div>比赛规则<br>Rules</div>
            <ol>
                <li>
                    预赛，海选，所有选手同时跳（若人数较多，会分成2组进行）。DJ播放音乐，3首歌（即3轮），每首歌播放1分钟左右。每首歌结束后将根据裁判要求更换舞伴。裁判将分别选出6位Lead选手和6位Follow选手进入决赛。<br>
                    Prelim. As most open mix&match competition goes, all dancers will randomly get a partner and change
                    partner each song played by DJ. Judges will choose 6 leads and 6 follows respectively into Final.
                </li>
                <li>
                    决赛，Spotlight。进入决赛的选手，根据裁判要求，在比赛现场随机搭配舞伴。每一对选手依次轮流出场，第一轮出场16*8，第二轮出场12*8，第二轮结束后All
                    Skate。国际裁判将评选出三对选手分别获得第一、二、三名。<br>
                    Final. Spotlight. Every couple will dance two rounds. Bpm 110-200. Live Band. 32 bar the first round and
                    12 bar the second round and all skate.
                </li>
            </ol>

            <div>音乐形式和速度<br>Music Information</div>
            <div>
                预赛和决赛音乐均由DJ播放。预赛音乐由DJ现场决定，速度110Bpm-200Bpm，12 Bar or 32 Bar Structure。决赛音乐由DJ播放，第一轮32 Bar Structure，第二轮12 Bar
                Structure。速度现场决定。<br>
            </div>
        </div>

        <div :class="$style.title">林迪舞团体表演赛<br>Lindy Hop Team Showcase</div>
        <div :class="$style.grid">
            <div>报名要求<br>Registration</div>
            <div>
                团体报名，5人以上<br>
                Register as a team consisting of at least 5 persons.
            </div>

            <div>报名费用<br>Fee</div>
            <div>300元/团体<br>300 RMB/Group</div>

            <div>比赛规则<br>Rules</div>
            <div>
                自选音乐，Swing Jazz，完成一支时长不超过3分钟的团体编舞表演。国际裁判将评选出第一、二、三名。<br>
                The team do the performance with the music they choose which should not exceed 3 minutes.
            </div>
        </div>
    </Content>
</template>

<style module>
.container {
    background-color: var(--main-color-purple);
}

.title {
    background-color: var(--main-color-purple);
    position: sticky;
    top: 11.2rem;
    font-size: var(--font-h2);
    border-top: 2px solid var(--main-color-white);
    border-bottom: 2px solid var(--main-color-white);
    text-align: center;
    line-height: 2em;
    margin: 3em 0 1em 0;
}

.grid {
    display: grid;
    grid-template-columns: max-content 1fr;
    row-gap: 1.5em;
    column-gap: 1em;
}</style>