<template>
    <div class="event-card">
        <a :href="`/events/` + event.id" class="event-card__image">
            <img v-if="!!event.images" :src="event.images[0]" :alt="event.title" loading="lazy" />
        </a>

        <div class="event-card__info">
            <div class="event-card__info-container">
                <div class="event-owner">
                    <!-- <img :src="event.company.avatar" :alt="event.company.name" loading="lazy" /> -->
                    <!-- <p class="text-small">{{ event.company.name }}</p> -->
                    <!-- <VerifiedIcon v-if="event.company.virified" /> -->
                    <img src="https://via.placeholder.com/20" alt="Company" loading="lazy" />
                    <p class="text-small">Autogenerado</p>
                </div>
                <p v-if="!!event.dates && !!event.dates[0].date" class="event-date text-small">
                    {{ event.dates[0].date }}
                </p>
            </div>

            <a :href="`/events/` + event.id" class="event-card__info-container">
                <h2 v-if="!!event.title" class="event-title">{{ event.title }}</h2>
            </a>
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

        @include mobile-up {
            &:only-child {
                max-width: 400px;
            }
        }

        &__image {
            width: 100%;
            height: auto;
            aspect-ratio: 4/3;
            border-radius: 8px;
            overflow: hidden;

            &:hover {
                img {
                    transform: scale(1.1);
                }
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: all 300ms ease;
            }
        }

        &__info {
            display: flex;
            flex-direction: column;
            padding: 0 2px;

            &-container {
                display: flex;
                justify-content: space-between;
                gap: 8px;
                overflow: hidden;
            }

            .event-owner {
                display: flex;
                align-items: center;
                gap: 8px;

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
                color: $color-text-light;
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