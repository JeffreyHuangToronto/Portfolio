<template>
    <div class="project">
        <div class="project_header">
            <h2 class="project_header__title">
                <slot name="title" />
            </h2>
            <h4 class="project_header__date"><slot name="date" /></h4>
        </div>
        <p class="project__description"><slot name="description" /></p>
        <div class="project__link"></div>
        <slot name="link" />
    </div>
</template>

<script setup>
const props = defineProps({
    github: String,
});
</script>

<style lang="scss">
.project {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: flex-start;
    @media screen and (max-width: 900px) {
        // margin-left: 50px;
        padding-left: 50px;
        padding-right: 50px;
        // width: 100%;
        min-width: min-content;
    }

    &_header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 25px;
        &__title {
        }
        &__date {
        }
    }
    &_link {
    }
}
</style>
