<template>
    <button @click="logoutAction">Cerrar sesión</button>
</template>

<script setup lang="ts">
    import { useAuth0 } from '@auth0/auth0-vue'

    const { logout } = useAuth0()

    const logoutAction = () => logout({ logoutParams: { returnTo: window.location.origin}})
</script>