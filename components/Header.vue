<template>
    <div class="header">
        <div class="header_content">
            <NuxtLink to="/main">
                <div class="text text--bold text--white header_content_logo">
                    <slot name="logo" />
                </div>
            </NuxtLink>
            <div class="header_content_nav">
                <slot name="nav" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "assets/sass/_variables";

.header {
    display: flex;
    // flex-direction: row;
    align-items: center;
    padding: 15px 0 15px 0;

    background: linear-gradient(to right, $blue 40%, $blue);
    padding-left: 25px;
    padding-right: 25px;
    margin-bottom: 3rem;

    &_content {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        width: 100vw;
        justify-content: space-between;

        &_logo {
            font-size: larger;
            font-size: 2rem;
            text-overflow: ellipsis;
            &::before {
                content: "Jeffrey Huang";
            }
            @media screen and (max-width: 900px) {
                &::before {
                    content: "JH";
                }
            }
        }

        &_nav {
            display: flex;
            align-items: center;
            // justify-content: flex-end;

            gap: 25px;
        }
    }
}
</style>
