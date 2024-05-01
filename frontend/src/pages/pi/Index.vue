<script lang="ts">
import SquareIconBtn from "../../components/SquareIconBtn.vue";

export default {
    components: {
        SquareIconBtn,
    },
    data() {
        return {
            tab: "beamer",
            video_srces: ["Bühne Links", "Regie"],
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
            <div class="content__wrapper">
                <VCard color="darker" variant="flat" width="calc(50% - 10px)" style="aspect-ratio: 370/252">
                    <VCardTitle> Beamer An/ Aus </VCardTitle>
                    <VCardItem class="centered_content">
                        <SquareIconBtn width="calc(50% - 10px)" icon="mdi-projector" text="Beamer an" />
                        <SquareIconBtn width="calc(50% - 10px)" icon="mdi-projector-off" text="Beamer aus" />
                    </VCardItem>
                </VCard>

                <VCard color="darker" variant="flat" width="calc(50% - 10px)" style="aspect-ratio: 370/252">
                    <VCardTitle> Bild-Format </VCardTitle>
                    <VCardItem class="centered_content">
                        <SquareIconBtn width="calc(50% - 10px)" icon="mdi-monitor" text="16 / 9" textSize="14px" />
                        <SquareIconBtn width="calc(50% - 10px)" icon="mdi-monitor-small" text="4 / 3" textSize="14px" />
                    </VCardItem>
                </VCard>

                <VCard color="darker" variant="flat" width="100%">
                    <VCardTitle> Bildquelle </VCardTitle>
                    <VCardItem id="videosource_selection_button_group">
                        <VBtn width="200px" height="42px" v-for="src in video_srces" :key="src">
                            {{ src }}
                        </VBtn>
                    </VCardItem>
                </VCard>
            </div>
        </VWindowItem>
    </VWindow>
</template>

<style>
@import url(../../styles/pi.__global.css);
</style>

<style scoped>
.content__wrapper {
    height: calc(100svh - 48px);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
    gap: 20px;
}

.content__wrapper > * > .v-card-title {
    text-align: center;
}
</style>
