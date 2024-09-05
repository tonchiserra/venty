<template>
    <Header v-if="showHeader" />
    <MainNav />
    <RouterView />
</template>

<script setup lang="ts">
    import Header from "@/components/Header.vue";
    import MainNav from "@/components/MainNav.vue"
    import { computed } from 'vue'
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const showHeader = computed(() => route.path === '/')
</script>
