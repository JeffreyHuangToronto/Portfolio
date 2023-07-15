<template>
    <div class="projects">
        <Project>
            <template #title> Sheep Of The Four Kingdoms </template>
            <template #date> May 2020 – June 2020 </template>
            <template #description>
                My brother and I joined the UTSC Game Jam Summer Series I,
                creating a game using Unity.
            </template>
            <template #link>
                <NuxtLink
                    to="https://itch.io/jam/utsc-summer-series-i-2020/rate/670435"
                    target="_blank"
                    >Link to project</NuxtLink
                ></template
            >
        </Project>
        <Project>
            <template #title> BooksWeeR</template>
            <template #date> Feb 2020 – Feb 2020</template>
            <template #description>
                This is the first Hackathon I had attended, this project was
                made using Python and runs in the terminal as our team wasn't
                experienced in connecting the backend to the front end. As a
                result I learnt that there was still many things I could learn
                in the future to add to my repertoire.
            </template>
            <template #link>
                <NuxtLink
                    to="https://devpost.com/software/booksweer"
                    target="_blank"
                    >Link to project</NuxtLink
                ></template
            >
        </Project>
        <Project>
            <template #title> MinBatTon</template>
            <template #date> Feb 14, 2020 – Feb 24, 2020</template>
            <template #description>
                MinBatTon is a game for playing badminton, inspired by our love
                for badminton as a sport. After creating this game, we improved
                understanding of Unity’s UI system and also learnt how to
                manipulate UI from scripts
            </template>
            <template #link>
                <NuxtLink
                    to="https://devpost.com/software/booksweer"
                    target="_blank"
                    >Link to project</NuxtLink
                ></template
            >
        </Project>
    </div>
</template>

<style lang="scss">
.projects {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 25px;
}
</style>
