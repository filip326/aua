<script lang="ts">
import SquareIconBtn from "../components/SquareIconBtn.vue";
import Layout from "../layouts/ThreeCardLayout.vue";
import DMX from "../controller/DMX";

export default {
    components: {
        SquareIconBtn,
        Layout,
    },
    methods: {
        async stageWW() {
            await DMX.stageWW();
        },
        async stageCW() {
            await DMX.stageCW();
        },
        async stageOff() {
            await DMX.stageOff();
        },
        async stageV1() {
            await DMX.stageV1();
        },
        async stageV2() {
            await DMX.stageV2();
        },
        async stageV3() {
            await DMX.stageV3();
        },
        async spotLeft() {
            await DMX.spotLeft();
        },
        async spotMiddle() {
            await DMX.spotMid();
        },
        async spotOff() {
            await DMX.spotOff();
        },
        async accentV1() {
            await DMX.accentV1();
        },
        async accentV2() {
            await DMX.accentV2();
        },
        async discoParty() {
            await DMX.discoParty();
        },
        async allOn() {
            await DMX.sceneAnlageAn();
        },
        async clearActive() {
            await DMX.clearScenes();
        },
        async allOff() {
            await DMX.sceneAnlageAus();
        },
    },
};
</script>

<template>
    <Layout>
        <template #vcard_left>
            <VCardTitle> Theater </VCardTitle>
            <VCardItem class="grid3x2">
                <SquareIconBtn
                    @click="stageWW"
                    class="square_icon_btn"
                    icon="mdi-light-flood-down"
                    text="Bühne WW"
                    textSize="14px"
                />
                <SquareIconBtn
                    @click="stageCW"
                    class="square_icon_btn"
                    icon="mdi-light-flood-down"
                    text="Bühne CW"
                    textSize="14px"
                />
                <SquareIconBtn
                    @clcick="stageOff"
                    class="square_icon_btn"
                    icon="mdi-wall-sconce-flat"
                    text="Bühne Aus"
                    textSize="14px"
                />
                <SquareIconBtn
                    @click="stageV1"
                    class="square_icon_btn"
                    icon="mdi-lightbulb-on"
                    text="Bühne V1"
                    textSize="14px"
                />
                <SquareIconBtn
                    @click="stageV2"
                    class="square_icon_btn"
                    icon="mdi-lightbulb-on"
                    text="Bühne V2"
                    textSize="14px"
                />
                <SquareIconBtn
                    @click="stageV3"
                    class="square_icon_btn"
                    icon="mdi-lightbulb-on"
                    text="Bühne V3"
                    textSize="14px"
                />
            </VCardItem>
        </template>

        <template #vcard_right>
            <VCardTitle> Spot und Co </VCardTitle>
            <VCardItem class="grid3x2">
                <SquareIconBtn
                    @click="spotLeft"
                    class="square_icon_btn"
                    icon="mdi-track-light"
                    text="Spot Links"
                    textSize="14px"
                />
                <SquareIconBtn
                    @click="spotMiddle"
                    class="square_icon_btn"
                    icon="mdi-track-light"
                    text="Spot Mitte"
                    textSize="14px"
                />
                <SquareIconBtn
                    @click="spotOff"
                    class="square_icon_btn"
                    icon="mdi-track-light-off"
                    text="Spot Aus"
                    textSize="14px"
                />
                <SquareIconBtn
                    @click="accentV1"
                    class="square_icon_btn"
                    icon="mdi-monitor"
                    text="Aktzent V1"
                    textSize="14px"
                />
                <SquareIconBtn
                    @click="accentV2"
                    class="square_icon_btn"
                    icon="mdi-monitor"
                    text="Aktzent V2"
                    textSize="14px"
                />
                <SquareIconBtn
                    @click="discoParty"
                    class="square_icon_btn"
                    icon="mdi-monitor"
                    text="Disko Party"
                    textSize="14px"
                />
            </VCardItem>
        </template>

        <template #vcard_bottom>
            <VCardTitle> Master </VCardTitle>
            <VCardItem>
                <VBtn @click="allOn" variant="flat" width="200px" height="42px">Anlage An</VBtn>
                <VBtn @click="clearActive" variant="flat" width="200px" height="42px">Clear Active</VBtn>
                <VBtn @click="allOff" variant="flat" width="200px" height="42px">Anlage Aus</VBtn>
            </VCardItem>
        </template>
    </Layout>
</template>
