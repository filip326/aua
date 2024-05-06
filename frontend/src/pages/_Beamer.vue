<script lang="ts">
import SquareIconBtn from "../components/SquareIconBtn.vue";
import Beamer from "../controller/Beamer";
import Layout from "../layouts/OneCardLayout.vue";

export default {
    components: {
        SquareIconBtn,
        Layout,
    },
    methods: {
        async powerOn() {
            await Beamer.powerOn();
        },
        async powerOff() {
            await Beamer.powerOff();
        },
    },
};
</script>

<template>
    <Layout>
        <VCardTitle> An/ Aus</VCardTitle>
        <VCardItem>
            <SquareIconBtn @click="powerOn" class="square_icon_btn" icon="mdi-projector" text="Beamer an" />
            <SquareIconBtn @click="powerOff" class="square_icon_btn" icon="mdi-projector-off" text="Beamer aus" />
        </VCardItem>
    </Layout>
</template>
