<script lang="ts">
import SubviewBeamer from "./_Beamer.vue";
import SubviewX32 from "./_X32.vue";

export default {
    components: {
        SubviewBeamer,
        SubviewX32
    },
    data() {
        return {
            tab: "beamer",
        };
    },
};
</script>

<template>
    <VTabs bg-color="secondary" v-model="tab" fixed-tabs>
        <VTab value="beamer">Beamer</VTab>
        <VTab value="sound">Ton</VTab>
    </VTabs>

    <VWindow v-model="tab">
        <VWindowItem value="beamer">
            <SubviewBeamer />
        </VWindowItem>
        <VWindowItem value="sound">
            <SubviewX32 />
        </VWindowItem>
    </VWindow>
</template>
