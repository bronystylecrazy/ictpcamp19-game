<template>
    <div class="random-chance">
        <v-container>
            <v-row class="text-center">
                <v-col md="12">
                    <div
                        style="font-family: 'Pridi', serif !important;"
                        class="display-1 white--text"
                    >
                        <v-icon left color="white" size="25" class="mb-2">mdi-briefcase-search</v-icon>ตรวจสอบของรางวัล
                    </div>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col md="8">
                    <v-card
                        tile
                        class="elevation-10"
                        style="background-color: rgba(255,255,255,.05); width: 100%; position: relative;"
                    >
                        <div class="case-box">
                            <div
                                class="text-center"
                                id="case-img"
                                style="position: relative; top: 50px"
                            >
                                <div
                                    class="case-item elevation-4"
                                    style="position: absolute; left: 50%; transform: translateX(-50%);"
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
                            </div>

                            <v-btn
                                @click="backToRandom"
                                tile
                                dark
                                color="secondary"
                                large
                                style="position: absolute; bottom: 30px; left: 51%; transform: translateX(-50%);"
                            >
                                <v-icon left>mdi-dice-multiple</v-icon>กลับไปหน้ากิจกรรม
                            </v-btn>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <v-row justify="center">
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
                            v-for="(item,index) in items"
                            :key="item.getIcon()"
                        >
                            <v-tooltip top color="black">
                                <template v-slot:activator="{ on }">
                                    <div
                                        v-on="on"
                                        class="case-item elevation-10"
                                        :style="{ width: '100%'}"
                                        v-ripple
                                    >
                                        <div class="case-item-shadow"></div>
                                        <img
                                            draggable="false"
                                            :src="`images/${item.icon}`"
                                            style="width:180px; height:120px; position: relative; "
                                        />
                                        <div
                                            class="case-item-value white--text"
                                            :style="{background: `linear-gradient(to right,rgba(0, 0, 0, 0.2) 0%,rgba(0, 0, 0, 0.6) 100%),${item.getHTMLColor()}`}"
                                        >
                                            <div
                                                style="max-height:55px; overflow: hidden; padding: 5px;"
                                            >
                                                <div v-html="item.getTitle()"></div>
                                                <span
                                                    class="truncate light"
                                                    v-html="item.getDescription()"
                                                ></span>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <span>
                                    <span class="ml-1 shadow info--text">
                                        <v-icon size="15" color="info">mdi-hexagon-slice-6</v-icon>
                                        {{ item.baseItem.description.split('|')[0] }}
                                    </span>

                                    <span class="ml-1 shadow orange--text">
                                        <v-icon size="15" color="orange">mdi-hexagon-multiple</v-icon>
                                        {{ item.baseItem.description.split('|')[1] }}
                                    </span>

                                    <span class="ml-1 shadow" :style="{color: item.getHTMLColor()}">
                                        <v-icon size="15" color="green">mdi-clover</v-icon>
                                        {{ item.getThaiRarity() }}
                                    </span>
                                </span>
                            </v-tooltip>
                        </v-flex>
                    </v-layout>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import CaseManager from "../caseManager";
import ItemManager, { Item, BaseItem } from "../itemManager";

export default {
    data: () => ({}),
    methods: {
        backToRandom() {
            this.$router.push({ path: "/random" });
        },
        itemsFromCase() {
            var rarity = ["blue", "purple", "pink", "red", "gold"];
            var items = [];
            for (var i = 0; i < rarity.length; i++) {
                for (var j = 0; j < this.caseData[rarity[i]].length; j++) {
                    items.push(
                        new Item(rarity[i], this.caseData[rarity[i]][j])
                    );
                }
            }
            return items;
        }
    },
    computed: {
        caseData() {
            return this.$store.state.caseData.name == undefined
                ? CaseManager[0]
                : this.$store.state.caseData;
        },
        items() {
            return this.itemsFromCase();
        }
    },
    created() {
        console.log(this.items);
    }
};
</script>

<style scoped>
.case-box {
    position: relative;
    width: 548px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 0 0 2px 2px;
    height: 350px;
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
</style>