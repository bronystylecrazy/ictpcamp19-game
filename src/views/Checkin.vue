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
                        item-value="color"
                        filled
                        :label="textTitle"
                        @change="setGuild"
                        class="mt-10 mr-0"
                    ></v-select>
                    <v-btn @click="next">ใช้! นี่แหละตระกูลกู</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
        textTitle: "พวกมึงอยู่ตระกูลไหนกันวะ",
        guild: "",
        guildData: {
            name: "ตระกูลไหนวะ?",
            image:
                "https://scontent.fbkk7-3.fna.fbcdn.net/v/t31.0-8/p960x960/26170652_1994490490764174_2819356701325830815_o.jpg?_nc_cat=105&_nc_ohc=D0n3xiAgwqkAQn12uKBNUgyjhUCT40t9ISrU-0Pr55HY3J_wOemglN0qA&_nc_ht=scontent.fbkk7-3.fna&oh=6495c13ddbf8f5038959725d6746e98d&oe=5EA605E0"
        },
        stop: false
    }),
    methods: {
        setGuild() {
            this.guildData =
                this.guilds.filter(x => x.color == this.guild)[0] || [];
            this.stop = true;
            this.$store.state.bgColor = this.guild;
        },
        next() {
            this.$store.state.guildData = this.guildData;
            this.$router.push({ path: "/profile" });
        }
    },
    computed: {
        guilds() {
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
    transition: all 0.25s ease-in-out;
}
.logo-enter-active {
    transition: all 0.25s ease-in-out;
}
.logo-enter,
.logo-leave-to {
    opacity: 0;
}
.logo-leave,
.logo-enter-to {
    opacity: 1;
    transform: scale(1);
}
</style>