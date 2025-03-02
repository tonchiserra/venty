<template>    
    <div class="page-width profile">
        <template v-if="!!!isAuthenticated">
            <CustomButtom level="primary" label="Iniciar sesión" type="button" :click="loginAction" />
        </template>

        <template v-else>
            <div v-if="!!user" class="profile__container">
                <div class="profile__picture">
                    <img :src="user.picture" :alt="user.name" />
                </div>

                <div class="profile__info">
                    <h2 v-if="!!user.name" class="h1">{{ user.name }}</h2>
                    <p v-if="!!user.nickname" class="text">{{ user.nickname }}</p>
                    <p v-if="!!user.email" class="text">{{ user.email }}</p>
                    <p v-if="!!user.phone_number" class="text">{{ user.phone_number }}</p>
                    <p v-if="!!user.address" class="text">{{ user.address }}</p>
                </div>
            </div>

            <CustomButtom level="secondary" label="Cerrar sesión" type="button" :click="logoutAction" />
        </template>
    </div>
</template>

<script setup lang="ts">
    import CustomButtom from "@/components/CustomButton.vue"
    import { useAuth0 } from '@auth0/auth0-vue'

    const { logout, isAuthenticated, loginWithRedirect, user } = useAuth0()

    const loginAction = () => loginWithRedirect()
    const logoutAction = () => logout({ logoutParams: { returnTo: window.location.origin}})
</script>

<style lang="scss">
    .profile {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        min-height: calc(100dvh - $header-height);

        button {
            width: max-content;
        }

        &__container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 40px;
        }

        &__picture {
            width: 100%;
            max-width: 300px;
            border-radius: 900px;
            overflow: hidden;
            border: 1px solid $color-grey;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &__info {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;

            * {
                text-align: center;
            }
        }
    }
</style>