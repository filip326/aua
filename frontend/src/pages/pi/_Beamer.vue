<script lang="ts">
import SquareIconBtn from "../../components/SquareIconBtn.vue";
import PiLayout from "../../layouts/PiLayout.vue";

export default {
    components: {
        SquareIconBtn,
        PiLayout,
    },
    data() {
        return {
            video_srces: ["Bühne Links", "Regie"],
        };
    },
};
</script>

<template>
    <PiLayout>
        <template #vcard_left>
            <VCardTitle> An/ Aus</VCardTitle>
            <VCardItem>
                <SquareIconBtn class="square_icon_btn" icon="mdi-projector" text="Beamer an" />
                <SquareIconBtn class="square_icon_btn" icon="mdi-projector-off" text="Beamer aus" />
            </VCardItem>
        </template>

        <template #vcard_right>
            <VCardTitle> Bildformat </VCardTitle>
            <VCardItem>
                <SquareIconBtn class="square_icon_btn" icon="mdi-monitor" text="16 / 9" textSize="14px" />
                <SquareIconBtn class="square_icon_btn" icon="mdi-monitor-small" text="4 / 3" textSize="14px" />
            </VCardItem>
        </template>

        <template #vcard_bottom>
            <VCardTitle> Bildquelle </VCardTitle>
            <VCardItem>
                <VBtn variant="flat" width="200px" height="42px" v-for="src in video_srces" :key="src">
                    {{ src }}
                </VBtn>
            </VCardItem>
        </template>
    </PiLayout>
</template>
