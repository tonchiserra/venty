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
        setAnimationDelay()
    })

    watch(() => eventStore.state.events, () => {
        locationStore.setEventsPositions(eventStore.state.events)
        setAnimationDelay()
    })

    const setAnimationDelay = () => {
        let allMapMarkers = [...document.querySelectorAll<HTMLElement>('.leaflet-marker-icon')]
        if(!!!allMapMarkers.length) return

        allMapMarkers.forEach((marker: HTMLElement) => {
            marker.style.animationDelay = `${Math.random() * 2}s`
        })
    }
</script>

<style lang="scss">
    #map {
        width: 100dvw;
        height: calc(100dvh - 64px);

        .leaflet-marker-icon {
            border-radius: 100px;

            &:not([src="userMarker.png"]) {
                outline: 2px solid $color-primary;
                outline-offset: 0px;
                animation: pulse 2s infinite;
                border: 2px solid #fff;
            }

            &[src="userMarker.png"] {
                border: 6px solid #A3C19E99;
            }
        }

        .leaflet-control-attribution {
            display: none;
        }
    }

    @keyframes pulse {
        0% {
            outline-offset: 0px;
            -moz-outline-radius: 100px;
            outline-color: $color-primary;
        }
        50% {
            outline-offset: 3px;
            outline-color: $color-primary;
        }
        100% {
            outline-offset: 7px;
            outline-color: transparent;
        }
    }
</style>