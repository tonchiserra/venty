<template>
    <div class="carousel">
        <div class="carousel-cell" v-for="image in images">
            <img :src="image" alt="Event image" loading="lazy">
        </div>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue'

    const props = defineProps(['images'])

    onMounted(() => {
        new Flickity( '.carousel', {
            cellAlign: 'left',
            contain: true
        })
    })
</script>

<style lang="scss">
    .carousel {
        &-cell {
            height: 300px;
            width: 100%;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .flickity-page-dots {
            bottom: 8px;

            .dot {
                margin: 0 4px;
                width: 8px;
                height: 8px;
                background: #fff;
                opacity: .5;
                transition: all 300ms ease;

                &.is-selected {
                    opacity: 1;
                }
            }
        }

        .flickity-button {
            background-color: transparent;
            width: 36px;
            height: 36px;

            svg {
                color: #fff;
            }

            &:hover {
                background-color: transparent;
            }
        }
    }
</style>