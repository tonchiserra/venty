<template>
    <Header />
    <MainNav />
    <main>
        <RouterView />
    </main>
    <Footer />
</template>

<script setup lang="ts">
    import Header from "@/components/Header.vue"
    import MainNav from "@/components/MainNav.vue"
    import Footer from "@/components/Footer.vue"
</script>

<style lang="scss">
    #app {
        min-height: 80dvh;
    }
</style>