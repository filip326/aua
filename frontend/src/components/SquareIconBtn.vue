<script lang="ts">
export default {
    props: {
        text: String,
        icon: String,
        color: {
            type: String,
            default: "surface",
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
    <VBtn variant="flat" :color="color" style="position: relative">
        <VIcon :size="iconSize">{{ icon }}</VIcon>
        <span class="square_icon_btn__text" :style="`font-size: ${textSize}`">
            {{ text }}
        </span>
    </VBtn>
</template>

<style scoped>
.square_icon_btn__text {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    padding: 0 10px;
    text-align: center;
}

@media screen and (max-width: 480px) {
    .square_icon_btn__text {
        display: none;
    }
}
</style>
