<script lang="ts">
import X32, { type ChannelType } from "../controller/X32";

export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: false,
        },
        label: {
            type: String,
            required: false,
        },
    },
    methods: {
        async channelPlus() {
            await X32.faderPlus(this.name as ChannelType);
        },
        async channelMinus() {
            await X32.faderMinus(this.name as ChannelType);
        },
        async channelMute() {
            await X32.muteToggle(this.name as ChannelType);
        },
    },
};
</script>

<template>
    <div :class="`channel ${icon ? 'has-icon' : ''}`">
        <VIcon style="margin-bottom: -8px" class="channel_icon" v-if="icon">{{ icon }}</VIcon>
        <h3 style="margin-bottom: -10px" v-else>{{ label ?? "" }}</h3>
        <VBtn @click="channelMute()" rounded="0" width="70px" height="55px" variant="flat" icon="mdi-volume-off" />
        <VBtn @click="channelPlus()" rounded="0" width="70px" height="55px" variant="flat" icon="mdi-volume-plus" />
        <VBtn @click="channelMinus()" rounded="0" width="70px" height="55px" variant="flat" icon="mdi-volume-minus" />
    </div>
</template>

<style scoped>
.channel {
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: column;
    padding-top: 1px;
    flex: 0 1;
    gap: 14px;
}

.channel.has-icon {
    padding-top: 3px;
}

.channel h3 {
    font-weight: 500;
}
</style>
