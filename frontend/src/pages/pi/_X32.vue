<script lang="ts">
import PiLayout from "../../layouts/PiLayout.vue";

export default {
    components: {
        PiLayout,
    },
    data() {
        return {
            scenes: ["Default"],
        };
    },
    methods: {},
};
</script>

<template>
    <PiLayout>
        <template #vcard_left>
            <VCardTitle> Mikrofone </VCardTitle>
            <VCardItem>
                <div class="channel">
                    <h3>M1</h3>
                    <VBtn rounded="0" width="64px" height="42px" variant="flat" icon="mdi-volume-off" />
                    <VBtn rounded="0" width="64px" height="42px" variant="flat" icon="mdi-volume-plus" />
                    <VBtn rounded="0" width="64px" height="42px" variant="flat" icon="mdi-volume-minus" />
                </div>
                <div class="channel">
                    <h3>M2</h3>
                    <VBtn rounded="0" width="64px" height="42px" variant="flat" icon="mdi-volume-off" />
                    <VBtn rounded="0" width="64px" height="42px" variant="flat" icon="mdi-volume-plus" />
                    <VBtn rounded="0" width="64px" height="42px" variant="flat" icon="mdi-volume-minus" />
                </div>
                <div class="channel">
                    <h3>M3</h3>
                    <VBtn rounded="0" width="64px" height="42px" variant="flat" icon="mdi-volume-off" />
                    <VBtn rounded="0" width="64px" height="42px" variant="flat" icon="mdi-volume-plus" />
                    <VBtn rounded="0" width="64px" height="42px" variant="flat" icon="mdi-volume-minus" />
                </div>
                <div class="channel">
                    <h3>H1</h3>
                    <VBtn rounded="0" width="64px" height="42px" variant="flat" icon="mdi-volume-off" />
                    <VBtn rounded="0" width="64px" height="42px" variant="flat" icon="mdi-volume-plus" />
                    <VBtn rounded="0" width="64px" height="42px" variant="flat" icon="mdi-volume-minus" />
                </div>
            </VCardItem>
        </template>

        <template #vcard_right>
            <VCardTitle> Multimedia </VCardTitle>
            <VCardItem>
                <div class="channel has-icon">
                    <VIcon style="margin-bottom: 2px">mdi-bluetooth</VIcon>
                    <VBtn rounded="0" width="64px" height="42px" variant="flat" icon="mdi-volume-off" />
                    <VBtn rounded="0" width="64px" height="42px" variant="flat" icon="mdi-volume-plus" />
                    <VBtn rounded="0" width="64px" height="42px" variant="flat" icon="mdi-volume-minus" />
                </div>
                <div class="channel has-icon">
                    <VIcon style="margin-bottom: 2px">mdi-projector</VIcon>
                    <VBtn rounded="0" width="64px" height="42px" variant="flat" icon="mdi-volume-off" />
                    <VBtn rounded="0" width="64px" height="42px" variant="flat" icon="mdi-volume-plus" />
                    <VBtn rounded="0" width="64px" height="42px" variant="flat" icon="mdi-volume-minus" />
                </div>
                <div class="channel has-icon">
                    <VIcon style="margin-bottom: 2px">mdi-audio-input-stereo-minijack</VIcon>
                    <VBtn rounded="0" width="64px" height="42px" variant="flat" icon="mdi-volume-off" />
                    <VBtn rounded="0" width="64px" height="42px" variant="flat" icon="mdi-volume-plus" />
                    <VBtn rounded="0" width="64px" height="42px" variant="flat" icon="mdi-volume-minus" />
                </div>
                <div class="channel has-icon">
                    <VIcon style="margin-bottom: 2px">mdi-surround-sound</VIcon>
                    <VBtn rounded="0" width="64px" height="42px" variant="flat" icon="mdi-volume-off" />
                    <VBtn rounded="0" width="64px" height="42px" variant="flat" icon="mdi-volume-plus" />
                    <VBtn rounded="0" width="64px" height="42px" variant="flat" icon="mdi-volume-minus" />
                </div>
            </VCardItem>
        </template>

        <template #vcard_bottom>
            <VCardTitle> Scenen </VCardTitle>
            <VCardItem>
                <VBtn variant="flat" width="200px" height="42px" v-for="scene in scenes" :key="scene">{{ scene }}</VBtn>
            </VCardItem>
        </template>
    </PiLayout>
</template>

<style scoped>
.channel {
    display: flex;
    align-items: center;
    justify-content: end;
    height: 100%;
    gap: 6px;
    flex-direction: column;
    padding-top: 1px;
    flex: 0 1 calc(50% - 12px);
}

.channel.has-icon {
    padding-top: 3px;
}

.channel h3 {
    font-weight: 500;
}

@media screen and (max-width: 700px) {
    .channel:not(:nth-child(1)):not(:nth-child(2)) {
        margin-top: 16px;
    }
}
</style>
