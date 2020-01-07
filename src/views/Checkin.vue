<template>
    <div class="check-in">
        <v-container fluid class="fill-height" style="height: 100vh;">
            <v-row class="fill-height" align="center" justify="center">
                <v-col cols="12" sm="12" md="4" class="text-center">
                    <transition name="logo" mode="out-in">
                        <v-avatar size="300" class="mb-1" :key="guildData.image">
                            <img :lazy-src="guildData.image" :src="guildData.image" alt="John" />
                        </v-avatar>
                    </transition>
                    <transition name="fade" mode="out-in">
                        <div
                            :class="{'display-2': $vuetify.breakpoint.smAndDown, 'display-3': $vuetify.breakpoint.mdAndUp,'white--text':true,'text-center': true}"
                            style="font-family: 'Pridi', serif !important;"
                            :key="guildData.name"
                        >
                            <span
                                style="font-family: 'Pridi', serif !important;"
                                class="title"
                                v-if="$vuetify.breakpoint.mdAndUp"
                            >กูอยู่...</span>
                            {{ guildData.name }}
                        </div>
                    </transition>
                    <v-select
                        dark
                        :items="guilds"
                        v-model="guild"
                        item-text="name"
                        item-value="case"
                        filled
                        :label="textTitle"
                        @change="setGuild"
                        class="mt-10 mr-0"
                    ></v-select>
                    <v-btn
                        :style="{opacity: disabledAll == true ? .3 : 1}"
                        @click="next"
                        tile
                    >ใช้! นี่แหละตระกูลกู</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { buttonClick } from "../soundManager";

export default {
    data: () => ({
        textTitle: "พวกมึงอยู่ตระกูลไหนกันวะ",
        guild: "",
        guildData: {
            name: "ตระกูลไหนวะ?",
            image: "images/avatar.jpg"
        },
        stop: false,
        disabledAll: false
    }),
    methods: {
        setGuild() {
            this.disabledAll = true;
            var _buttonClick = new Audio(buttonClick);
            setTimeout(() => _buttonClick.play(), 500);
            setTimeout(() => {
                this.disabledAll = false;
            }, 500);
            this.guildData =
                this.guilds.filter(x => x.case == this.guild)[0] || [];
            this.stop = true;
        },
        next() {
            if (this.disabledAll) return false;
            this.$store.state.guildData = this.guildData;
            this.$router.push({ path: "/random" });
        }
    },
    computed: {
        guilds() {
            console.log("guilds", this.$store.state.guilds);
            return this.$store.state.guilds.sort((x, y) => y.id - x.id) || [];
        }
    },
    created() {}
};
</script>

<style scoped>
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
    transition: all 0.5s ease-in-out;
}
.logo-enter-active {
    transition: all 0.12s ease-in-out;
}

.logo-enter,
.logo-leave-to {
    opacity: 0;
    transform: scale(2) rotate(20deg);
    filter: blur(4px);
}
.logo-leave,
.logo-enter-to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
    filter: blur(0px);
}
</style>