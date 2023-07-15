<template>
    <div class="header">
        <div class="text text--bold text--white header_logo">
            <slot name="logo" />
        </div>
        <div class="header_nav">
            <slot name="nav" />
        </div>
        <div></div>
    </div>
</template>

<style lang="scss" scoped>
@import "assets/sass/_variables";

.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px 0 15px 0;

    background: linear-gradient(to right, $blue 40%, $blue);

    &_logo {
        width: fit-content;
        font-size: larger;
        pointer-events: none;
        font-size: 2rem;
    }
    padding-left: 25px;

    &_nav {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 25px;
    }
    padding-right: 25px;
}
</style>
