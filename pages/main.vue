<template>
    <div class="container">
        <div class="container_welcome">
            <h1>Welcome</h1>
            <p>This is my website for my portfolio</p>
            <p>You can check out my projects from the Projects page.</p>
            <NuxtLink to="/" class="container_welcome__button"
                >Go back to landing page</NuxtLink
            >
        </div>
    </div>
</template>

<style lang="scss">
.container {
    display: flex;
    flex-direction: column;
    padding-left: 25px;
    align-items: center;
    &_welcome {
        width: 50dvw;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 5px;
        &__button {
            margin-top: 30px;
            font-size: large;
            padding: 5px;
            border-radius: 25px;
            border: solid 1px black;
        }
    }

    @media screen and (max-width: 900px) {
        justify-content: flex-start;
    }
}
</style>
