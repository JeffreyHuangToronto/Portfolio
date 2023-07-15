<template>
    <div class="container">
        <h1 class="container__title">Jeffrey</h1>
        <div class="container_socials"></div>
        <div class="container_visit_main">
            <NuxtLink to="/main">Vist Main Page</NuxtLink>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "landing",
});
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    position: relative;

    &__title {
        font-size: 5rem;
    }
    &_socials {
    }
    &_visit_main {
        // text-decoration: underline;
        border-radius: 25px;
        border: solid 1px #d2bef5;
        padding: 5px;
        font-size: 2rem;
        background-color: #c190e8;
    }
}
</style>
