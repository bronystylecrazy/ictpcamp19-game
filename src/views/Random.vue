<template>
    <div class="random">
        <v-container>
            <v-row class="text-center" :class="{blury: isPopup}">
                <v-col md="12">
                    <div
                        style="font-family: 'Pridi', serif !important;"
                        class="display-1 white--text"
                    >
                        <v-icon left color="white" size="25" class="mb-2">mdi-cake</v-icon>มาให้คุกกี้ทำนายกัน!
                    </div>
                </v-col>
            </v-row>
            <v-row justify="center" :class="{blury: isPopup}">
                <v-col md="8">
                    <v-card
                        tile
                        class="elevation-4"
                        style="background-color: rgba(255,255,255,.05); width: 100%; position: relative;"
                    >
                        <div class="case-box">
                            <transition name="fade">
                                <div
                                    v-if="!isClick"
                                    class="text-center"
                                    id="case-img"
                                    style="position: relative; top: 50px"
                                >
                                    <transition name="fade" mode="out-in">
                                        <div
                                            class="case-item elevation-4"
                                            :key="caseData.name"
                                            :style="{ position: 'absolute', left: '50%', transform: 'translateX(-50%)',background: `radial-gradient(
        circle at bottom,
        ${caseData.bgColor || 'rgba(175, 175, 175, 1)'} 35%,
        rgba(25, 25, 25, 1) 110%
    )`}"
                                        >
                                            <div class="case-item-shadow"></div>
                                            <img
                                                draggable="false"
                                                :src="caseData.icon"
                                                style="width:180px; height:120px; position: relative; "
                                            />
                                            <div class="case-item-value white--text text-left">
                                                <div
                                                    style="max-height:55px; overflow: hidden; padding: 5px;"
                                                >
                                                    <div v-html="caseData.name"></div>
                                                    <span
                                                        class="truncate light"
                                                        v-html="caseData.description"
                                                    ></span>
                                                </div>
                                            </div>
                                        </div>
                                    </transition>
                                </div>
                            </transition>
                            <transition name="fade">
                                <div
                                    v-if="isClick"
                                    ref="case-container"
                                    class="case-container elevation-4"
                                >
                                    <div
                                        class="case-inner"
                                        style="transform: translateX(0) translateZ(0px) scale(.9, 0.835);"
                                    >
                                        <div
                                            class="case-item elevation-10"
                                            v-for="(item,index) in items"
                                            :key="`${item.getTitle()}-${index}`"
                                        >
                                            <div class="case-item-shadow"></div>
                                            <img
                                                draggable="false"
                                                :src="item.getIcon()"
                                                style="width:180px; height:120px; position: relative; "
                                            />
                                            <div
                                                class="case-item-value white--text"
                                                :style="{background: `linear-gradient(to right,rgba(0, 0, 0, 0.2) 0%,rgba(0, 0, 0, 0.6) 100%),${item.getHTMLColor()}`}"
                                            >
                                                <div
                                                    style="max-height:55px; overflow: hidden; padding: 5px;"
                                                >
                                                    <div>{{item.getTitle()}}</div>
                                                    <span
                                                        class="truncate light"
                                                    >{{item.getDescription()}}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="case-marker"></div>
                                    <div class="case-gradient"></div>
                                </div>
                            </transition>

                            <v-btn
                                @click="spin"
                                :disabled="isClick"
                                tile
                                dark
                                color="teal"
                                large
                                style="position: absolute; bottom: 30px; left: 50%; transform: translateX(-105%);"
                            >
                                <v-icon left>mdi-dice-multiple</v-icon>โอเค มาลุ้นกัน!
                            </v-btn>
                            <v-btn
                                @click="viewChance"
                                :disabled="isClick"
                                tile
                                dark
                                color="info"
                                large
                                style="position: absolute; bottom: 30px; left: 50%; transform: translateX(0%);"
                            >
                                <v-icon left>mdi-briefcase-search</v-icon>ตรวจสอบรางวัล
                            </v-btn>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <v-row justify="center" :class="{blury: isPopup}">
                <!-- <v-col md="12" sm="12" class="text-center white--text pa-0">
                    <div class="title">
                        <v-icon left size="50" color="white">mdi-cube</v-icon>กล่องทั้งหมด
                    </div>
                </v-col>-->
                <v-col md="8" sm="12">
                    <v-layout wrap row class="pr-2">
                        <v-flex
                            md3
                            sm6
                            xs6
                            :class="{'px-2': true}"
                            v-for="(_case,index) in cases"
                            :key="`${_case.name}-${index}`"
                        >
                            <div
                                class="case-item elevation-10"
                                @click="selectCase(_case)"
                                :style="{ width: '100%',opacity: isClick == 1 ? '.3' : .8, background: `radial-gradient(
        circle at bottom,
        ${_case.bgColor || 'rgba(175, 175, 175, 1)'} 35%,
        rgba(25, 25, 25, 1) 110%
    )`}"
                                v-ripple
                            >
                                <div class="case-item-shadow"></div>
                                <img
                                    draggable="false"
                                    :src="_case.icon"
                                    :style="{filter: _case.type == 'bonus' ? 'saturate(5.5)' : 'saturate(1)',width:'180px', height:'120px', position:'relative'} "
                                />
                                <div class="case-item-value white--text">
                                    <div style="max-height:55px; overflow: hidden; padding: 5px;">
                                        <div v-html="_case.name"></div>
                                        <span class="truncate light" v-html="_case.description"></span>
                                    </div>
                                </div>
                            </div>
                        </v-flex>
                    </v-layout>
                </v-col>
            </v-row>
        </v-container>
        <v-overlay :value="isPopup" class="text-center">
            <div class="display-1 shadow" style="font-family: 'Pridi', serif !important;">
                ยินดีด้วยครับ <span  v-if="caseData.type == 'bonus'" :class="{'red--text': who == 'ทีมที่แพ้','blue--text': who == 'ทีมที่ชนะ'}">{{ who }} </span><span v-else>น้องๆ</span>ได้รับ
                <span
                    :style="{color:winitem.getHTMLColor()}"
                    class="shadow"
                ><span  v-if="caseData.type == 'bonus'">โบนัส</span>{{ winitem.baseItem.name }}</span> จ้า~~
            </div>
            <v-img v-if="winitem != {}" :src="winitem.getIcon()" :lazy-src="winitem.getIcon()"></v-img>
            <div class="description">
                <span class="ml-1 shadow info--text">
                    <v-icon size="15" color="info">mdi-hexagon-slice-6</v-icon>
                    {{ winitem.baseItem.description.split('|')[0] }}
                </span>

                <span class="ml-1 shadow orange--text">
                    <v-icon size="15" color="orange">mdi-hexagon-multiple</v-icon>
                    {{ winitem.baseItem.description.split('|')[1] }}
                </span>

                <span class="ml-1 shadow" :style="{color: winitem.getHTMLColor()}">
                    <v-icon size="15" color="green">mdi-clover</v-icon>
                    {{ winitem.getThaiRarity() }}
                </span>
            </div>
        
<div class="description green--text shadow">
                "
                <span v-html="winitem.getFuckingJoke()"></span>"
            </div>
            <v-btn tile class="mt-4" x-large outlined dark @click="isClick = isPopup = false">
                <v-icon left>mdi-check-bold</v-icon>รับทราบ
            </v-btn>
        </v-overlay>
    </div>
</template>

<script>
import anime from "animejs";
import CaseManager from "../caseManager";
import ItemManager, { Item, BaseItem } from "../itemManager";
import $ from "jquery";
import {
    click,
    buttonClick,
    blue,
    purple,
    pink,
    red,
    gold
} from "../soundManager";
import "../plugins";

export default {
    data: () => ({
        last: 0,
        isClick: false,
        isPopup: false,
        cases: CaseManager,
        caseData: {},
        items: [],
        winitem: new Item("blue", new BaseItem("", "", ""), false),
        masterVolume: 1,
        who: ''
    }),
    methods: {
        getWho(){
            return ['ทีมที่ชนะ','ทีมที่แพ้'][Math.round( Math.random())];
        },
        viewChance() {
            this.$store.state.caseData = this.caseData;
            this.$router.push({ path: "/view" });
        },
        selectCase(current) {
            if (this.isClick) return false;
            this.caseData = current;
            // console.log(current);
            // console.log(this.$store.state.guildData);
            if(current.type == 'bonus'){
                this.who = this.getWho();
            }
            this.$vuetify.goTo(0);
            // this.$store.state.bgColor =
            //     this.caseData.bgColor || "grey-blud darken-4";
        },
        spin() {
            this.isClick = true;
            const caseOpen = new Audio(buttonClick);
            caseOpen.volume = this.masterVolume * 0.5;
            caseOpen.play();
            setTimeout(() => this.animate(-1, 37, 9500), 100);
        },
        initializeItem(number) {
            this.items = ItemManager.generateItems(
                this.caseData.name,
                number + 10
            );
        },
        animate(offsetOverride, number, duration) {
            this.initializeItem(number);
            var n = 0;
            this.last = 0;
            let markerOffset =
                (this.$refs["case-container"].clientWidth / 2 - 5) * 0.9;
            let offset = 0;

            if (offsetOverride >= 0 && offsetOverride <= 10)
                offset = offsetOverride;
            else offset = 10 * 0.9 * Math.random();

            let finalSpinnerPosition =
                -191 * number * 0.9 + markerOffset - offset * 180;

            let clicks = [];
            for (var i = 0; i < number; i++) {
                clicks.push(new Audio(click));
                clicks[i].volume = this.masterVolume * 0.5;
            }
            // var style = window.getComputedStyle(
            //     document.querySelector(".case-inner")
            // );
            // anime({
            //     targets: ".case-inner",
            //     translateX: [0, finalSpinnerPosition],
            //     easing: "cubicBezier(.31,.9985,.31,.9985)",
            //     duration: duration,
            //     complete: () => {
            //         alert(`your item is '${-this.last}'`);
            //         this.isClick = false;
            //     },
            //     change: () => {
            //         var matrix = new WebKitCSSMatrix(style.webkitTransform);
            //         var now = matrix.m41;
            //         if (
            //             this.last >
            //             Math.floor((now - markerOffset - 5) / (191 * 0.9))
            //         ) {
            //             clicks[n++ % 20].play();
            //             this.last = Math.floor(
            //                 (now - markerOffset - 5) / (191 * 0.9)
            //             );
            //         }
            //     }
            // });
            $(".case-inner")
                .addClass("rolling")
                .css({
                    transition: `all ${duration /
                        1000}s cubic-bezier(0.31, 0.9985, 0.31, 0.9985)`
                })
                .css({
                    transform:
                        "translateX(" +
                        finalSpinnerPosition * 0.9 +
                        "px) translateZ(0) scale(0.9, 0.835)"
                });

            $({ tracker: 500 }).animate(
                { tracker: finalSpinnerPosition },
                {
                    duration: duration,
                    easing: $.bez([0.31, 0.9985, 0.31, 0.9985]),
                    step: now => {
                        // called every frame
                        if (
                            this.last >
                            Math.floor((now - markerOffset - 27) / 191)
                        ) {
                            clicks[n++ % number].play();
                            this.last = Math.floor(
                                (now - markerOffset - 27) / 191
                            );
                        }
                    }
                }
            );
            let case_done = {};

            case_done.blue = new Audio(blue);
            case_done.blue.volume = this.masterVolume * 0.5;

            case_done.purple = new Audio(purple);
            case_done.purple.volume = this.masterVolume * 0.5;

            case_done.pink = new Audio(pink);
            case_done.pink.volume = this.masterVolume * 0.6;

            case_done.red = new Audio(red);
            case_done.red.volume = this.masterVolume * 0.8;

            case_done.gold = new Audio(gold);
            case_done.gold.volume = this.masterVolume * 0.8;

            setTimeout(() => {
                this.winitem = this.items[-this.last - 1];
                console.log(this.winitem);
                case_done[this.winitem.rarity].play();
                this.isPopup = true;
            }, duration);
        },
        getCaseData(){
            this.caseData = CaseManager.filter(
                x => x.selection == this.$store.state.guildData.name
            )[0];
        }
    },
    mounted(){
        this.getCaseData();
        console.log(this.cases);
    },
    created() {
        console.clear();
        console.log("Odds:");
        ItemManager.oddsOfEach();
    }
};
</script>

<style scoped>
.case-container {
    position: absolute;
    top: 40px;
    width: 100%;
    left: 0;
    background: #0a030e;
    user-select: none;
    overflow: hidden;
}
.case-inner {
    white-space: nowrap;
    position: relative;
    margin-top: 2.5px;
    margin-bottom: 2.5px;
    height: 195px;
    will-change: transform;
    transition: all 9.5s cubic-bezier(0.31, 0.9985, 0.31, 0.9985);
}
.case-marker {
    position: absolute;
    left: 50%;
    background-color: gold;
    width: 2px;
    top: 0px;
    height: 100%;
}
.case-gradient {
    content: " ";
    position: absolute;
    width: 100%;
    height: 200px;
    top: 0;
    left: 0px;
    transform: scaleX(1.1);
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.9) 0%,
        rgba(0, 0, 0, 0.67) 5%,
        rgba(0, 0, 0, 0) 40%,
        rgba(0, 0, 0, 0) 60%,
        rgba(0, 0, 0, 0.67) 95%,
        rgba(0, 0, 0, 0.9) 100%
    );
}

.case-gradient::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 300px;
    top: -120px;
    left: 25%;
    transform: rotate(-20deg);
    background: linear-gradient(
        to bottom,
        rgba(240, 240, 255, 0.2) 0%,
        rgba(240, 240, 255, 0) 50%
    );
}

.case-item {
    margin-top: 7.5px;
    margin-bottom: 7.5px;
    width: 180px;
    height: 180px;
    position: relative;
    display: inline-block;
    image-rendering: auto;
    will-change: transform;
    background: radial-gradient(
        circle at bottom,
        rgba(175, 175, 175, 1) 35%,
        rgba(25, 25, 25, 1) 110%
    );
    margin-left: 5.5px;
    margin-right: 5.5px;
}

.case-item-shadow {
    position: absolute;
    left: 40px;
    bottom: 10px;
    border-radius: 20%;
    width: 100px;
    height: 100px;
    background: black;
    opacity: 0.28;
    filter: blur(17px);
    transform: scale(1, 0.12);
}
.case-item-value {
    cursor: default;
    text-shadow: 1px 1px 3px rgba(10, 10, 10, 1);
}

.case-box {
    position: relative;
    width: 548px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0 0 2px 2px;
    height: 350px;
}

.case-image {
    width: 180px;
    height: 134px;
    position: relative;
    border: 1px solid rgba(44, 44, 44, 0.75);
}

.truncate {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.fade-leave-active {
    transition: all 0.25s ease-in-out;
}
.fade-enter-active {
    transition: all 0.25s ease-in-out;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
    transform: scale(0.8);
}
.fade-leave,
.fade-enter-to {
    opacity: 1;
    transform: scale(1);
}

.logo-leave-active {
    transition: all 0.25s ease-in-out;
}
.logo-enter-active {
    transition: all 0.25s ease-in-out;
}
.logo-enter,
.logo-leave-to {
    opacity: 0;
    transform: scale(0.8);
}
.logo-leave,
.logo-enter-to {
    opacity: 1;
    transform: scale(1);
}

.blury {
    filter: blur(10px) grayscale(1);
    transition: all 0.5s ease-in-out;
}

.shadow {
    text-shadow: 1px 1px 3px rgba(10, 10, 10, 1);
}
</style>