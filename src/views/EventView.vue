<template>
    <div class="event" v-if="!!eventStore.state.event.id">
        <div class="event-gallery" v-if="!!eventStore.state.event.images.length">
            <Carousel :images="eventStore.state.event.images" />
        </div>

        <div class="event-info">
            <div class="event-caption">
                <!-- <p v-if="!!eventStore.state.event.company && !!eventStore.state.event.company.name">{{ eventStore.state.event.company.name }} - </p> -->
                <p v-if="!!eventStore.state.event.dates[0] && !!eventStore.state.event.dates[0].date" class="text-small text-bold">{{ eventStore.state.event.dates[0].date }}</p>
            </div>

            <h2 class="event-title">{{ eventStore.state.event.title }}</h2>

            <div class="event-categories">
                <div v-for="category in eventStore.state.event.categories" class="category">
                    <span class="text-extra-small">{{ category }}</span>
                </div>
            </div>

            <div class="event-dates">
                <div v-for="date in eventStore.state.event.dates" class="date">
                    <span
                        :class="{
                            'success': date.availableTickets >= (date.totalTickets * 0.50),
                            'warning': date.availableTickets < (date.totalTickets * 0.50) && date.availableTickets > 0,
                            'critical': date.availableTickets <= 0
                        }"
                    >
                        {{ date.startsAt }} -
                        <span v-if="date.availableTickets >= (date.totalTickets * 0.50)">Lugares disponibles</span>
                        <span v-else-if="date.availableTickets < (date.totalTickets * 0.50) && date.availableTickets > 0">Últimos lugares disponibles</span>
                        <span v-else>Sin lugares disponibles</span>
                    </span>
                </div>
            </div>

            <div class="event-location" v-if="!!eventStore.state.event.location">
                <IconLocation />
                <p class="location">{{ eventStore.state.event.location }}</p>
            </div>

            <CustomButton v-if="!!eventStore.state.event.cta" 
                :href="eventStore.state.event.cta" 
                level="primary" 
                label="Reservar ahora"
                type="anchor"
                class="button button--primary" 
            />

            <div class="event-description">
                <p>{{ eventStore.state.event.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router'
    import { eventStore } from '@/stores/EventStore'
    import Carousel from '@/components/Carousel.vue'
    import IconLocation from '@/assets/IconLocation.vue'
    import CustomButton from '@/components/CustomButton.vue'

    const route = useRoute()
    eventStore.getEventById(route.params.id as string)
</script>

<style lang="scss">
    @import '@/styles/views/eventView.scss';
</style>