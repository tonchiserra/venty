<template>
    <div class="event-card">
        <div class="event-card__image">
            <img v-if="!!event.images" :src="event.images[0]" :alt="event.title" loading="lazy" />
        </div>

        <div class="event-card__info">
            <div class="event-card__info-container">
                <div class="event-owner">
                    <!-- <img :src="event.company.avatar" :alt="event.company.name" loading="lazy" /> -->
                    <!-- <p class="text-small">{{ event.company.name }}</p> -->
                    <!-- <VerifiedIcon v-if="event.company.virified" /> -->
                </div>
                <p v-if="!!event.date" class="event-date text-small">
                    {{ event.date }}
                </p>
            </div>

            <div class="event-card__info-container">
                <h2 v-if="!!event.title" class="event-title">{{ event.title }}</h2>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps(['event'])
</script>

<style lang="scss">
    .event-card {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;

        &__image {
            width: 100%;
            height: auto;
            aspect-ratio: 4/3;
            border-radius: 8px;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &__info {
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 0 4px;

            &-container {
                display: flex;
                justify-content: space-between;
                gap: 8px;
                overflow: hidden;
            }

            .event-owner {
                display: flex;
                align-items: center;
                gap: 4px;

                img {
                    border-radius: 100px;
                    height: 20px;
                    width: 20px;
                }

                p {
                    font-weight: 600;
                }
            }

            .event-date {
                color: $color-tertiary;
                display: flex;
                align-items: center;
            }

            .event-title {
                width: 100%;
                text-wrap: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
    }
</style>