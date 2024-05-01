<script lang="ts">
export default {
    props: {
        text: String,
        icon: String,
        color: {
            type: String,
            default: "surface",
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
    <VBtn
        variant="flat"
        :color="color"
        :style="`width: ${width}; aspect-ratio: 1/1; height: auto; position: relative;`"
    >
        <VIcon :size="iconSize">{{ icon }}</VIcon>
        <span class="square_icon_btn__text"
            :style="`position: absolute; bottom: 10px; left: 0; width: 100%; text-align: center; font-size: ${textSize}`"
        >
            {{ text }}
        </span>
    </VBtn>
</template>

<style scoped>
@media screen and (max-width: 480px) {
    .square_icon_btn__text {
        display: none;
    }
}
</style>
