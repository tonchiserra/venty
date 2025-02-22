<template>
    <div class="map">
        <l-map ref="map" v-model:zoom="zoom" v-model:center="center" :useGlobalLeaflet="false">
        <l-tile-layer 
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
            layer-type="base"
            name="Stadia Maps Basemap"
        >
        </l-tile-layer>
      </l-map>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from "vue"
    import "leaflet/dist/leaflet.css"
    import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet"

    const zoom = ref(5)
    const center = ref([-31, -61])
    
    onMounted(() => {
        setTimeout(() => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 3000 })
            } 
        }, 2000)
    })

    const onSuccess = (position: any) => {
        center.value = [position.coords.latitude, position.coords.longitude]
        zoom.value = 15
    }

    const onError = (error: any) => {
        console.error(error)
    }
</script>

<style scoped lang="scss">
    .map {
        width: 100dvw;
        height: calc(100dvh - 64px);
    }
</style>