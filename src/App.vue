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
import { db } from "./firebase";
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
            db.collection("guilds")
                .get()
                .then(querySnapshot => {
                    this.$store.state.guilds = querySnapshot.docs.map(doc =>
                        doc.data()
                    );
                });
        }
    },
    created() {
        this.getGuilds();
        db.collection("guilds").onSnapshot(doc => {
            db.collection("guilds")
                .get()
                .then(querySnapshot => {
                    this.guilds = querySnapshot.docs.map(doc => doc.data());
                    this.overlay = false;
                });
        });
    }
};
</script>