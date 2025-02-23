<template>
    <div id="map"></div>
</template>

<script setup lang="ts">
    import { eventStore } from '@/stores/EventStore';
    import { locationStore } from '@/stores/LocationStore'
    import { onMounted, watch } from 'vue'

    onMounted(() => {
        locationStore.initMap()
        locationStore.setEventsPositions(eventStore.state.events)
    })

    watch(() => eventStore.state.events, () => {
        locationStore.setEventsPositions(eventStore.state.events)
    })
</script>

<style lang="scss">
    #map {
        width: 100dvw;
        height: calc(100dvh - 64px);

        .leaflet-marker-icon {
            border-radius: 100px;
            border: 2px solid $color-primary;

            &[src="userMarker.png"] {
                animation: pulse 3s infinite;
            }
        }
    }

    @keyframes pulse {
        0% {
            border-color: lighten($color-primary, 0%);
        }
        50% {
            border-color: lighten($color-primary, 70%);
        }
        100% {
            border-color: $color-primary;
        }
    }
</style>