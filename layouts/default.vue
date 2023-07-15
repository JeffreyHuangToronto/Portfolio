<template>
    <div class="layout">
        <Header>
            <template #logo>JH</template>
            <template #nav>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/Projects"> Projects </NavItem>
                <NavItem
                    to="https://github.com/JeffreyHuangToronto"
                    target="_blank"
                >
                    Github
                </NavItem>
                <NavItem to="/Resume" target="_blank">Resume</NavItem>
            </template>
        </Header>
        <div class="body">
            <slot />
        </div>
        <Footer class="footer" />
    </div>
</template>

<style lang="scss">
@import "assets/sass/_variables";
* {
    margin: 0;
    padding: 0;
    font-family: "IBM Plex Sans", sans-serif;
    text-decoration: none;
    color: $black;
}

.layout {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
}
</style>
