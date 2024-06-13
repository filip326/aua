<script lang="ts">
import SubviewBeamer from "./_Beamer.vue";
import SubviewX32 from "./_X32.vue";
import SubviewDMX from "./_DMX.vue";

export default {
    components: {
        SubviewBeamer,
        SubviewX32,
        SubviewDMX,
    },
    data() {
        return {
            tab: "sound",
            mobile: false,
        };
    },
    beforeMount() {
        document.addEventListener("resize", () => {
            this.mobile = window.innerWidth < 350;
        });
        this.mobile = window.innerWidth < 350;
    },
    beforeUnmount() {
        document.removeEventListener("resize", () => {
            this.mobile = window.innerWidth < 350;
        });
    },
};
</script>

<template>
    <VTabs bg-color="secondary" v-model="tab" fixed-tabs>
        <VTab value="beamer">
            <VIcon size="24px" v-if="mobile">mdi-projector</VIcon>
            <span v-else>Beamer</span>
        </VTab>
        <VTab value="dmx">
            <VIcon size="24px" v-if="mobile">mdi-track-light</VIcon>
            <span v-else>Licht</span>
        </VTab>
        <VTab value="sound">
            <VIcon size="24px" v-if="mobile">mdi-volume-high</VIcon>
            <span v-else>Ton</span>
        </VTab>
    </VTabs>

    <VWindow
        :touch="{
            left: () => {},
            right: () => {},
            up: () => {},
            down: () => {},
            move: () => {},
            start: () => {},
            end: () => {},
        }"
        v-model="tab"
    >
        <VWindowItem value="beamer">
            <SubviewBeamer />
        </VWindowItem>
        <VWindowItem value="dmx">
            <SubviewDMX />
        </VWindowItem>
        <VWindowItem value="sound">
            <SubviewX32 />
        </VWindowItem>
    </VWindow>
</template>
