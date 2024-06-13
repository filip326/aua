<script lang="ts">
import X32Channel from "../components/X32Channel.vue";
import X32, { ChannelType } from "../controller/X32";
import Layout from "../layouts/ThreeCardLayout.vue";

export default {
    components: {
        Layout,
        X32Channel,
    },
    data() {
        return {
            channels: [
                {
                    label: "M1",
                    name: "m1",
                },
                {
                    label: "M2",
                    name: "m2",
                },
                {
                    label: "M3",
                    name: "m3",
                },
                {
                    label: "H1",
                    name: "h1",
                },
                {
                    icon: "mdi-bluetooth",
                    name: "bluetooth",
                },
                {
                    icon: "mdi-projector",
                    name: "beamer",
                },
                {
                    label: "Sub",
                    name: "sub",
                },
            ] as Array<{
                label?: string;
                name: ChannelType;
                icon?: string;
            }>,
        };
    },
    methods: {
        async loadDefault() {
            await X32.loadSceneDefault();
        },
    },
};
</script>

<template>
    <Layout>
        <template #vcard_left>
            <!-- <VCardTitle> Mikrofone </VCardTitle> -->
            <VCardItem>
                <X32Channel
                    v-for="channel in channels.slice(0, 4)"
                    :key="channel.name"
                    :name="channel.name"
                    :icon="channel.icon"
                    :label="channel.label"
                />
            </VCardItem>
        </template>

        <template #vcard_right>
            <!-- <VCardTitle> Multimedia </VCardTitle> -->
            <VCardItem>
                <X32Channel
                    v-for="channel in channels.slice(4)"
                    :key="channel.name"
                    :name="channel.name"
                    :icon="channel.icon"
                    :label="channel.label"
                />
            </VCardItem>
        </template>

        <template #vcard_bottom>
            <VCardTitle> Scenen </VCardTitle>
            <VCardItem>
                <VBtn @click="loadDefault()" variant="flat" width="200px" height="48px">Default</VBtn>
            </VCardItem>
        </template>
    </Layout>
</template>
