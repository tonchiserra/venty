<template>
    <div class="page-width feed">
        <template v-for="event in eventStore.state.events">
            <EventCard :event="event" />
        </template>
    </div>
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
        padding-top: 16px;
        min-height: calc(100dvh - $header-height);

        @include mobile-up {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
    }
</style>