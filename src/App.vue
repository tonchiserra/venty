<template>
    <Header />
    
    <LoadingSpinner v-if="isLoading" />
    <template v-else>
        <MainNav v-if="isAuthenticated" />
        <main v-if="isAuthenticated">
            <RouterView />
        </main>
    </template>

    <Footer />
</template>

<script setup lang="ts">
    import { watchEffect } from "vue"

    import Header from "@/components/Header.vue"
    import MainNav from "@/components/MainNav.vue"
    import Footer from "@/components/Footer.vue"
    import LoadingSpinner from "@/components/LoadingSpinner.vue"

    import { useAuth0 } from "@auth0/auth0-vue"

    const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0()

    watchEffect(() => {
        if(!isLoading.value && isAuthenticated.value === false) loginWithRedirect()
    })
</script>

<style lang="scss">
    #app {
        min-height: 80dvh;
    }
</style>