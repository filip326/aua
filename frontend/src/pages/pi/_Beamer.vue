<script lang="ts">
import SquareIconBtn from "../../components/SquareIconBtn.vue";
import Beamer from "../../controller/Beamer";
import PiLayout from "../../layouts/PiLayout.vue";

export default {
    components: {
        SquareIconBtn,
        PiLayout,
    },
    data() {
        return {
            video_srces: [
                {
                    name: "Bühne links",
                    handler: this.source_stageLeft,
                },
                {
                    name: "Regie",
                    handler: this.source_regie,
                },
            ] as Array<{ name: string; handler: () => void }>,
        };
    },
    methods: {
        async powerOn() {
            await Beamer.powerOn();
        },
        async powerOff() {
            await Beamer.powerOff();
        },
        async imageFormat_16to9() {
            await Beamer.imageFormat_16to9();
        },
        async imageFormat_4to3() {
            await Beamer.imageFormat_4to3();
        },
        async source_stageLeft() {
            await Beamer.source_stageLeft();
        },
        async source_regie() {
            await Beamer.source_regie();
        },
    },
};
</script>

<template>
    <PiLayout>
        <template #vcard_left>
            <VCardTitle> An/ Aus</VCardTitle>
            <VCardItem>
                <SquareIconBtn @click="powerOn" class="square_icon_btn" icon="mdi-projector" text="Beamer an" />
                <SquareIconBtn @click="powerOff" class="square_icon_btn" icon="mdi-projector-off" text="Beamer aus" />
            </VCardItem>
        </template>

        <template #vcard_right>
            <VCardTitle> Bildformat </VCardTitle>
            <VCardItem>
                <SquareIconBtn
                    @click="imageFormat_16to9"
                    class="square_icon_btn"
                    icon="mdi-monitor"
                    text="16 / 9"
                    textSize="14px"
                />
                <SquareIconBtn
                    @click="imageFormat_4to3"
                    class="square_icon_btn"
                    icon="mdi-monitor-small"
                    text="4 / 3"
                    textSize="14px"
                />
            </VCardItem>
        </template>

        <template #vcard_bottom>
            <VCardTitle> Bildquelle </VCardTitle>
            <VCardItem>
                <VBtn
                    @click="src.handler"
                    variant="flat"
                    width="200px"
                    height="42px"
                    v-for="src in video_srces"
                    :key="src.name"
                >
                    {{ src.name }}
                </VBtn>
            </VCardItem>
        </template>
    </PiLayout>
</template>
