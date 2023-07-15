<template>
    <div class="container">
        <div class="container_banner">
            <div
                class="container_banner__background"
                :style="`background-image: url(${novel.cover_url})`"
            ></div>
            <div class="container_banner_info">
                <div
                    class="container_banner_info__cover"
                    :style="`background-image: url(${novel.cover_url})`"
                ></div>
                <p class="text text--white container_banner_info__title">
                    {{ novel.novel_title }}
                </p>
            </div>
        </div>
        <div class="container_content">
            <div class="container_content__description">
                <p class="text text--black" v-for="sentence in novel.summary">
                    {{ sentence }}
                </p>
            </div>
            <div class="container_content_chapters">
                <NuxtLink
                    v-for="chapter in novel.total_chapters"
                    :to="`/novel/chapter/${novel._id}-chapter-${chapter}`"
                    >Chapter {{ chapter }}</NuxtLink
                >
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["obj"]);
const novel = props.obj.data[0];
</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    &_content {
        margin-left: 25px;

        &__description {
            width: 80vw;
        }

        &_chapters {
            // display: flex;
            display: grid;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            grid-template-columns: 1fr 1fr;
        }
    }

    &_banner {
        width: 100%;
        &_info {
            display: flex;
            flex-direction: row;

            &__cover {
                // width: 200px;
                // height: 284px;
                width: 20em;
                height: 16.5em;
                background-position: center 25%;
                background-size: contain;
                background-repeat: no-repeat;
                margin-left: 3rem;
            }

            &__title {
                display: -webkit-box;
                width: 100%;
                font-size: 4vmax;
                font-size-adjust: 0.6;
                padding-left: 15px;
                margin: 0;
                font-weight: 900;

                overflow-wrap: break-word;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
            }
        }

        &__background {
            width: 100%;
            height: 175px;

            background-position: center 25%;
            background-size: cover;
            background-repeat: no-repeat;
            position: absolute;
            padding: 25px 0 40px 0;

            z-index: -2;

            filter: brightness(0.2);
        }
    }
}
</style>
