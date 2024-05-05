<script lang="ts">
import X32 from "../../controller/X32";
import PiLayout from "../../layouts/PiLayout.vue";

export default {
    components: {
        PiLayout,
    },
    methods: {
        async loadDefault() {
            await X32.loadSceneDefault();
        },
        async channelPlus(channel: "m1" | "m2" | "m3" | "h1" | "bluetooth" | "beamer" | "sub") {
            await X32.faderPlus(channel);
        },
        async channelMinus(channel: "m1" | "m2" | "m3" | "h1" | "bluetooth" | "beamer" | "sub") {
            await X32.faderMinus(channel);
        },
        async channelMute(channel: string) {
            await X32.muteToggle(channel);
        },
    },
};
</script>

<template>
    <PiLayout>
        <template #vcard_left>
            <VCardTitle> Mikrofone </VCardTitle>
            <VCardItem>
                <div class="channel">
                    <h3>M1</h3>
                    <VBtn
                        @click="channelMute('m1')"
                        rounded="0"
                        width="64px"
                        height="42px"
                        variant="flat"
                        icon="mdi-volume-off"
                    />
                    <VBtn
                        @click="channelPlus('m1')"
                        rounded="0"
                        width="64px"
                        height="42px"
                        variant="flat"
                        icon="mdi-volume-plus"
                    />
                    <VBtn
                        @click="channelMinus('m1')"
                        rounded="0"
                        width="64px"
                        height="42px"
                        variant="flat"
                        icon="mdi-volume-minus"
                    />
                </div>
                <div class="channel">
                    <h3>M2</h3>
                    <VBtn
                        @click="channelMute('m2')"
                        rounded="0"
                        width="64px"
                        height="42px"
                        variant="flat"
                        icon="mdi-volume-off"
                    />
                    <VBtn
                        @click="channelPlus('m2')"
                        rounded="0"
                        width="64px"
                        height="42px"
                        variant="flat"
                        icon="mdi-volume-plus"
                    />
                    <VBtn
                        @click="channelMinus('m2')"
                        rounded="0"
                        width="64px"
                        height="42px"
                        variant="flat"
                        icon="mdi-volume-minus"
                    />
                </div>
                <div class="channel">
                    <h3>M3</h3>
                    <VBtn
                        @click="channelMute('m3')"
                        rounded="0"
                        width="64px"
                        height="42px"
                        variant="flat"
                        icon="mdi-volume-off"
                    />
                    <VBtn
                        @click="channelPlus('m3')"
                        rounded="0"
                        width="64px"
                        height="42px"
                        variant="flat"
                        icon="mdi-volume-plus"
                    />
                    <VBtn
                        @click="channelMinus('m3')"
                        rounded="0"
                        width="64px"
                        height="42px"
                        variant="flat"
                        icon="mdi-volume-minus"
                    />
                </div>
                <div class="channel">
                    <h3>H1</h3>
                    <VBtn
                        @click="channelMute('h1')"
                        rounded="0"
                        width="64px"
                        height="42px"
                        variant="flat"
                        icon="mdi-volume-off"
                    />
                    <VBtn
                        @click="channelPlus('h1')"
                        rounded="0"
                        width="64px"
                        height="42px"
                        variant="flat"
                        icon="mdi-volume-plus"
                    />
                    <VBtn
                        @click="channelMinus('h1')"
                        rounded="0"
                        width="64px"
                        height="42px"
                        variant="flat"
                        icon="mdi-volume-minus"
                    />
                </div>
            </VCardItem>
        </template>

        <template #vcard_right>
            <VCardTitle> Multimedia </VCardTitle>
            <VCardItem>
                <div class="channel has-icon">
                    <VIcon style="margin-bottom: 2px">mdi-bluetooth</VIcon>
                    <VBtn
                        @click="channelMute('bluetooth')"
                        rounded="0"
                        width="64px"
                        height="42px"
                        variant="flat"
                        icon="mdi-volume-off"
                    />
                    <VBtn
                        @click="channelPlus('bluetooth')"
                        rounded="0"
                        width="64px"
                        height="42px"
                        variant="flat"
                        icon="mdi-volume-plus"
                    />
                    <VBtn
                        @click="channelMinus('bluetooth')"
                        rounded="0"
                        width="64px"
                        height="42px"
                        variant="flat"
                        icon="mdi-volume-minus"
                    />
                </div>
                <div class="channel has-icon">
                    <VIcon style="margin-bottom: 2px">mdi-projector</VIcon>
                    <VBtn
                        @click="channelMute('beamer')"
                        rounded="0"
                        width="64px"
                        height="42px"
                        variant="flat"
                        icon="mdi-volume-off"
                    />
                    <VBtn
                        @click="channelPlus('beamer')"
                        rounded="0"
                        width="64px"
                        height="42px"
                        variant="flat"
                        icon="mdi-volume-plus"
                    />
                    <VBtn
                        @click="channelMinus('beamer')"
                        rounded="0"
                        width="64px"
                        height="42px"
                        variant="flat"
                        icon="mdi-volume-minus"
                    />
                </div>
                <div class="channel"></div>
                <div class="channel">
                    <h3>Sub</h3>
                    <VBtn
                        @click="channelMute('sub')"
                        rounded="0"
                        width="64px"
                        height="42px"
                        variant="flat"
                        icon="mdi-volume-off"
                    />
                    <VBtn
                        @click="channelPlus('sub')"
                        rounded="0"
                        width="64px"
                        height="42px"
                        variant="flat"
                        icon="mdi-volume-plus"
                    />
                    <VBtn
                        @click="channelMinus('sub')"
                        rounded="0"
                        width="64px"
                        height="42px"
                        variant="flat"
                        icon="mdi-volume-minus"
                    />
                </div>
            </VCardItem>
        </template>

        <template #vcard_bottom>
            <VCardTitle> Scenen </VCardTitle>
            <VCardItem>
                <VBtn @click="loadDefault()" variant="flat" width="200px" height="42px">Default</VBtn>
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
    width: 82.5px;
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
