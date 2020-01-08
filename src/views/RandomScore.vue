<template>
    <div class="score">
        <v-container>
            <v-row class="text-center">
                <v-col md="12">
                    <div
                        style="font-family: 'Pridi', serif !important;"
                        class="display-1 white--text"
                    >
                        <v-icon left color="white" size="30">mdi-candycane</v-icon>กิจกรรมสุ่มมูลค่าลูกอม
                    </div>
                </v-col>
            </v-row>
            <v-row justify="center" class="px-2">
                <transition-group name="flip-list" tag="v-row" class="justify-center">
                    <v-col md="8" v-for="guild in guilds" :key="guild.name">
                        <v-card>
                            <v-list-item two-line>
                                <v-list-item-avatar class="grey lighten-2" size="50">
                                    <v-img :src="cases(guild.name).icon"></v-img>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title
                                        class="headline"
                                        :style="{fontFamily: '\'Pridi\', serif !important',color: cases(guild.name).bgColor}"
                                    >{{ guild.name }}</v-list-item-title>
                                    <v-list-item-subtitle>{{ cases(guild.name).blue.sample().name }}{{ cases(guild.name).blue.sample().description.split('|')[0] }}</v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action-text>มูลค่า {{ guild.score }} คะแนน</v-list-item-action-text>
                            </v-list-item>
                        </v-card>
                    </v-col>
                </transition-group>
            </v-row>
            <v-row justify="center">
                <v-btn @click="randomize(3000)" :disabled="isClick" tile dark color="teal" large>
                    <v-icon left>mdi-dice-multiple</v-icon>สุ่มมูลค่าลูกอม
                </v-btn>
                <v-btn
                    @click="reverse"
                    :disabled="isClick"
                    class="ml-2"
                    tile
                    dark
                    color="teal"
                    large
                >
                    <v-icon left>mdi-dice-multiple</v-icon>มากไปน้อย
                </v-btn>
                <v-btn @click="sort" :disabled="isClick" class="ml-2" tile dark color="teal" large>
                    <v-icon left>mdi-dice-multiple</v-icon>น้อยไปมาก
                </v-btn>
                <v-btn @click="reset" :disabled="isClick" class="ml-2" tile dark color="teal" large>
                    <v-icon left>mdi-dice-multiple</v-icon>คืนค่าเดิม
                </v-btn>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import CaseManager from "../caseManager.js";
import _ from "lodash";
import $ from "jquery";
import "../plugins";

export default {
    data: () => ({
        scores: [1, 2, 3, 4, 5, 6],
        guilds: [],
        isClick: false
    }),
    methods: {
        cases(prop) {
            return CaseManager.filter(x => x.selection == prop)[0];
        },
        randomize(duration) {
            this.clickAndWait(duration);
            $({ tracker: 0 }).animate(
                {
                    tracker: 100
                },
                {
                    duration: duration,
                    easing: $.bez([0.31, 0.9985, 0.31, 0.9985]),
                    step: now => {
                        if (Math.floor(now) % 2 == 0) {
                            console.log("random...");
                            this.scores = _.shuffle(this.scores);
                            for (var i = 0; i < this.guilds.length; i++)
                                this.guilds[i].score = this.scores[i];
                        }
                    },
                    complete: () => {
                        this.sort();
                        console.log("complete!");
                    }
                }
            );
        },
        clickAndWait(ms) {
            this.isClick = true;
            setTimeout(() => {
                this.isClick = false;
            }, ms);
        },
        sort() {
            this.clickAndWait(1000);
            const __ = this.guilds.sort((x, y) => y.score - x.score);
            this.guilds = __;
        },
        reset() {
            this.clickAndWait(1000);
            for (var i = 0; i < this.guilds.length; i++)
                this.guilds[i].score = 0;
            const __ = this.guilds.sort((x, y) => x.id - y.id);
            this.guilds = __;
        },
        reverse() {
            this.clickAndWait(1000);
            const __ = this.guilds.sort((x, y) => x.score - y.score);
            console.log(__);
        }
    },
    created() {
        this.guilds = this.$store.state.guilds;
    }
};
</script>

<style scoped>
.flip-list-move {
    transition: transform 1s;
}
</style>