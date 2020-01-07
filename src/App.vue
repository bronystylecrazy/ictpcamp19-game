<template>
    <div class="app">
        <v-app dark>
            <v-content :class="`${bgColor}`" :style="publicStyle">
                <transition
                    :name="transitionName"
                    :mode="transitionMode"
                    :enter-active-class="transitionEnterActiveClass"
                    @beforeLeave="beforeLeave"
                    @enter="enter"
                    @afterEnter="afterEnter"
                >
                    <router-view></router-view>
                </transition>
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
        overlay: false,
        transitionName: "fade",
        transitionMode: "out-in",
        transitionEnterActiveClass: ""
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
        beforeLeave(element) {
            this.prevHeight = getComputedStyle(element).height;
        },
        enter(element) {
            const { height } = getComputedStyle(element);

            element.style.height = this.prevHeight;

            setTimeout(() => {
                element.style.height = height;
            });
        },
        afterEnter(element) {
            element.style.height = "auto";
        }
    },
    created() {
        this.$router.beforeEach((to, from, next) => {
            let transitionName =
                to.meta.transitionName || from.meta.transitionName || "fade";

            if (transitionName === "slide") {
                const toDepth = to.path.split("/").length;
                const fromDepth = from.path.split("/").length;
                transitionName =
                    toDepth < fromDepth ? "slide-right" : "slide-left";
            }

            this.transitionMode = "out-in";
            this.transitionEnterActiveClass = `${transitionName}-enter-active`;

            if (to.meta.transitionName === "zoom") {
                this.transitionMode = "in-out";
                this.transitionEnterActiveClass = "zoom-enter-active";
                // Disable scrolling in the background.
                document.body.style.overflow = "hidden";
            }

            if (from.meta.transitionName === "zoom") {
                this.transitionMode = null;
                this.transitionEnterActiveClass = null;
                // Enable scrolling again.
                document.body.style.overflow = null;
            }

            this.transitionName = transitionName;
            next();
        });
    }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
    transition-duration: 0.5s;
    transition-property: height, opacity, transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
    overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
    opacity: 0;
    transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
    opacity: 0;
    transform: translate(-2em, 0);
}

.zoom-enter-active,
.zoom-leave-active {
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-name: zoom;
}

.zoom-leave-active {
    animation-direction: reverse;
}

@keyframes zoom {
    from {
        opacity: 0;
        transform: scale3d(0.3, 0.3, 0.3);
    }

    100% {
        opacity: 1;
    }
}
</style>