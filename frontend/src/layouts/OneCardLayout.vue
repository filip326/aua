<script lang="ts">
import "../styles/layouts/single-card.css";

export default {};
</script>

<template>
    <div class="single_card__wrapper">
        <VCard class="centered_content_card" color="darker" variant="flat">
            <slot />
        </VCard>
    </div>
</template>
