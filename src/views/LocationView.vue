<template>
    <div id="Map"></div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from "vue"

    onMounted(async () => {
        await initMap()
    })

    const map = ref()

    const initMap = async () => {
    }
</script>