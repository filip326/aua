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
                <VCard color="darker" variant="flat" width="350px" height="250px">
                    <VCardTitle> Beamer An/ Aus </VCardTitle>
                    <VCardItem class="centered_content">
                        <SquareIconBtn icon="mdi-projector" text="Beamer an" />
                        <SquareIconBtn icon="mdi-projector-off" text="Beamer aus" />
                    </VCardItem>
                </VCard>

                <VCard color="darker" variant="flat" width="350px" height="250px">
                    <VCardTitle> Bild-Format </VCardTitle>
                    <VCardItem class="centered_content">
                        <SquareIconBtn icon="mdi-monitor" text="16 / 9" textSize="14px" />
                        <SquareIconBtn icon="mdi-monitor-small" text="4 / 3" textSize="14px" />
                    </VCardItem>
                </VCard>

                <VCard color="darker" variant="flat" width="720px" height="120px">
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

<style scoped>
.content__wrapper {
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

<style>
#videosource_selection_button_group > .v-card-item__content {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    width: 100%;
    height: 100%;
}

.v-card-item.centered_content {
    height: calc(250px - 2.25rem - 48px);
}

.v-card-item.centered_content > .v-card-item__content {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    width: 100%;
    height: 100%;
}
</style>
