<script lang="ts">
import SquareIconBtn from "../../components/SquareIconBtn.vue";
import PiLayout from "../../layouts/PiLayout.vue";

export default {
    components: {
        SquareIconBtn,
        PiLayout,
    },
    methods: {},
};
</script>

<template>
    <PiLayout>
        <template #vcard_left>
            <VCardTitle> Theater </VCardTitle>
            <VCardItem class="grid3x2">
                <SquareIconBtn class="square_icon_btn" icon="mdi-light-flood-down" text="Bühne WW" textSize="14px" />
                <SquareIconBtn class="square_icon_btn" icon="mdi-light-flood-down" text="Bühne CW" textSize="14px" />
                <SquareIconBtn class="square_icon_btn" icon="mdi-wall-sconce-flat" text="Bühne Aus" textSize="14px" />
                <SquareIconBtn class="square_icon_btn" icon="mdi-lightbulb-on" text="Bühne V1" textSize="14px" />
                <SquareIconBtn class="square_icon_btn" icon="mdi-lightbulb-on" text="Bühne V2" textSize="14px" />
                <SquareIconBtn class="square_icon_btn" icon="mdi-lightbulb-on" text="Bühne V3" textSize="14px" />
            </VCardItem>
        </template>

        <template #vcard_right>
            <VCardTitle> Spot und Co </VCardTitle>
            <VCardItem class="grid3x2">
                <SquareIconBtn class="square_icon_btn" icon="mdi-track-light" text="Spot Links" textSize="14px" />
                <SquareIconBtn class="square_icon_btn" icon="mdi-track-light" text="Spot Mitte" textSize="14px" />
                <SquareIconBtn class="square_icon_btn" icon="mdi-track-light-off" text="Spot Aus" textSize="14px" />
                <SquareIconBtn class="square_icon_btn" icon="mdi-monitor" text="Aktzent V1" textSize="14px" />
                <SquareIconBtn class="square_icon_btn" icon="mdi-monitor" text="Aktzent V2" textSize="14px" />
                <SquareIconBtn class="square_icon_btn" icon="mdi-monitor" text="Disko Party" textSize="14px" />
            </VCardItem>
        </template>

        <template #vcard_bottom>
            <VCardTitle> Master </VCardTitle>
            <VCardItem>
                <VBtn variant="flat" width="200px" height="42px">Anlage An</VBtn>
                <VBtn variant="flat" width="200px" height="42px">Clear Active</VBtn>
                <VBtn variant="flat" width="200px" height="42px">Anlage Aus</VBtn>
            </VCardItem>
        </template>
    </PiLayout>
</template>
