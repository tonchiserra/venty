<template>
    <main>
        <div class="page-width feed">
            <template v-for="event in eventStore.state.events">
                <EventCard :event="event" />
            </template>
        </div>
    </main>
</template>

<script setup lang="ts">
    import EventCard from '@/components/EventCard.vue'
    import { eventStore } from '@/stores/EventStore'
</script>

<style lang="scss" scoped>
    .feed {
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
    }
</style>