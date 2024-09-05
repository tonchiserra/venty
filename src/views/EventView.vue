<template>
    <div class="event" v-if="!!eventStore.state.event.id">
        <div class="event-gallery" v-if="!!eventStore.state.event.images.length">
            <Carousel :images="eventStore.state.event.images" />
        </div>

        <div class="event-info">

        </div>
    </div>
</template>

<script setup lang="ts">
    import { useRoute } from 'vue-router'
    import { eventStore } from '@/stores/EventStore'
    import Carousel from '@/components/Carousel.vue'

    const route = useRoute()
    eventStore.getEventById(route.params.id as string)
</script>