<template>
    <NuxtLink
        class="text text--bold text--white text--large"
        :to="props.to"
        :target="props.target"
    >
        <slot />
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    to: {
        type: String,
        default: "/",
        required: true,
    },
    target: {
        type: String,
        default: "",
        required: false,
    },
});
</script>

<style lang="scss">
@import "~/assets/sass/main";
</style>
