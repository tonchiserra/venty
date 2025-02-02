<template>
    <CustomButtom v-if="!!!isAuthenticated" level="primary" label="Iniciar sesión" type="button" :click="loginAction" />
    <CustomButtom v-else level="secondary" label="Cerrar sesión" type="button" :click="logoutAction" />
</template>

<script setup lang="ts">
    import CustomButtom from "@/components/CustomButton.vue"
    import { useAuth0 } from '@auth0/auth0-vue'

    const { logout, isAuthenticated, loginWithRedirect } = useAuth0()

    const loginAction = () => loginWithRedirect()
    const logoutAction = () => logout({ logoutParams: { returnTo: window.location.origin}})
</script>