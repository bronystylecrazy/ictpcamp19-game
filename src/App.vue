<template>
    <div class="app">
        <v-app dark>
            <v-content :class="`${bgColor}`" :style="publicStyle">
                <router-view></router-view>
            </v-content>
            <v-overlay :absolute="true" :value="overlay" opacity="0.9">
                <v-progress-circular indeterminate size="32"></v-progress-circular>
            </v-overlay>
        </v-app>
    </div>
</template>

<script>
export default {
    data: () => ({
        overlay: false
    }),
    computed: {
        bgColor() {
            return this.$store.state.bgColor;
        },
        publicStyle() {
            return this.$store.state.publicStyle;
        }
    },
    methods: {
        getGuilds() {
            this.$store.state.guilds = [];
        }
    },
    created() {
        this.getGuilds();
    }
};
</script>