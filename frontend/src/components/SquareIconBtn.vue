<script lang="ts">
export default {
    props: {
        text: String,
        icon: String,
        color: {
            type: String,
            default: "surface",
        },
        height: {
            type: String,
            default: "130px",
        },
        width: {
            type: String,
            default: "130px",
        },
        iconSize: {
            type: String,
            default: "40px",
        },
        textSize: {
            type: String,
            default: "13px",
        },
    },
};
</script>

<template>
    <VBtn variant="flat" :color="color" :height="height" :width="width" style="position: relative">
        <VIcon :size="iconSize">{{ icon }}</VIcon>
        <span
            :style="`position: absolute; bottom: 10px; left: 0; width: 100%; text-align: center; font-size: ${textSize}`"
        >
            {{ text }}
        </span>
    </VBtn>
</template>
