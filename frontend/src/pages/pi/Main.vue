<script lang="ts">
import SubviewBeamer from "./_Beamer.vue";

export default {
    components: {
        SubviewBeamer,
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
    </VTabs>

    <VWindow v-model="tab">
        <VWindowItem value="beamer">
            <SubviewBeamer />
        </VWindowItem>
    </VWindow>
</template>
