<script lang="ts">
import "../styles/layouts/three-card.css";

export default {};
</script>

<template>
    <div class="three_card__wrapper">
        <VCard class="centered_content_card" color="darker" variant="flat">
            <slot name="vcard_left" />
        </VCard>

        <VCard class="centered_content_card" color="darker" variant="flat">
            <slot name="vcard_right" />
        </VCard>

        <VCard class="full_width_card" color="darker" variant="flat">
            <slot name="vcard_bottom" />
        </VCard>
    </div>
</template>
