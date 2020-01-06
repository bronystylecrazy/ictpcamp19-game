<template>
    <div class="profile">
        <v-container fluid>
            <v-layout justify-center class="black my-10">
                <v-flex md8 style="position: relative;">
                    <section ref="section" class="card my-10">
                        <v-card
                            :id="`item-${n.id}`"
                            class="card--content"
                            v-for="n in items"
                            :key="n.title"
                            :style="n.style"
                            tile
                        >{{n.title}} {{interpolate}}</v-card>
                    </section>
                    <div class="line white"></div>
                </v-flex>
            </v-layout>
            <v-layout justify-center>
                <v-flex md8>
                    <v-btn
                        outlined
                        x-large
                        dark
                        class="d-block mx-auto"
                        @click="animateScroll"
                    >{{ width }}</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import anime from "animejs";

export default {
    data: () => ({
        interpolate: 0,
        items: [],
        width: ""
    }),
    computed: {
        guildData() {
            return this.$store.state.guildData;
        }
    },
    methods: {
        getOpacityCurve(x) {
            const E = 2.718;
            return (
                ((4 * E) / (1 + Math.pow(E, 2 * x))) * (1 + Math.pow(E, 2 * x))
            );
        },
        animateScroll() {
            const r = this.$refs["section"].scrollWidth;
            let obj = { prop1: 0 };
            anime({
                targets: obj,
                duration: 10000,
                prop1: r - r / 4,
                easing: "linear",
                update: () => {
                    this.$refs["section"].scrollLeft = obj.prop1;
                    this.items.forEach(x => {
                        let __ = document.getElementById(`item-${x.id}`);
                        let center = innerWidth / 2;
                        let left = __.getBoundingClientRect().left;
                        let right = __.getBoundingClientRect().right;
                        let pivot = (right + left) / 2;
                        let width = right - left;
                        this.width = innerWidth / 2;
                        x.style.opacity = this.getOpacityCurve(
                            (center - pivot * 3) / center
                        );
                        // if (
                        //     pivot > center - width / 2 &&
                        //     pivot < center + width / 2
                        // )
                        //     x.style.opacity = getOpacityCurve();
                        // else x.style.opacity = 0.05;
                    });
                }
            });
        }
    },
    created() {
        for (var id = 0; id < 100; id++) {
            this.items.push({
                title: `ไอ้สัส.${id}`,
                x: 0,
                id,
                style: {
                    opacity: 0.1,
                    transition: "all .25s ease-in-out"
                }
            });
        }
    }
};
</script>

<style scoped>
.card {
    display: flex;
    overflow-x: auto;
    min-height: 200px;
    background: black;
}

.card::-webkit-scrollbar {
    display: none;
}

.card--content {
    background-color: #e74c3c;
    min-width: 200px;
    margin: 5px;
}

.line {
    position: absolute;
    left: 50%;
    height: 100%;
    width: 2px;
    top: 0%;
}
</style>