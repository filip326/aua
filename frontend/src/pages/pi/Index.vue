<script lang="ts">
import SquareIconBtn from "../../components/SquareIconBtn.vue";
import "../../styles/pi/beamer.css";

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
            <div class="pi__content_wrapper">
                <VCard class="centered_content_card" color="darker" variant="flat">
                    <VCardTitle> An/ Aus</VCardTitle>
                    <VCardItem>
                        <SquareIconBtn class="square_icon_btn" icon="mdi-projector" text="Beamer an" />
                        <SquareIconBtn class="square_icon_btn" icon="mdi-projector-off" text="Beamer aus" />
                    </VCardItem>
                </VCard>

                <VCard class="centered_content_card" color="darker" variant="flat">
                    <VCardTitle> Bild-Format </VCardTitle>
                    <VCardItem>
                        <SquareIconBtn class="square_icon_btn" icon="mdi-monitor" text="16 / 9" textSize="14px" />
                        <SquareIconBtn class="square_icon_btn" icon="mdi-monitor-small" text="4 / 3" textSize="14px" />
                    </VCardItem>
                </VCard>

                <VCard class="video_selection_card" color="darker" variant="flat">
                    <VCardTitle> Bildquelle </VCardTitle>
                    <VCardItem>
                        <VBtn variant="flat" width="200px" height="42px" v-for="src in video_srces" :key="src">
                            {{ src }}
                        </VBtn>
                    </VCardItem>
                </VCard>
            </div>
        </VWindowItem>
    </VWindow>
</template>
