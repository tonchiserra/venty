<template>
    <nav class="main-menu">
        <ul>
            <li>
                <RouterLink to="/location">
                    <IconLocation />
                    <span class="label">Ubicación</span>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/">
                    <IconFeed />
                    <span class="label">Inicio</span>
                </RouterLink>
            </li>
            <li v-if="!!isAuthenticated">
                <RouterLink to="/new">
                    <IconNew />
                    <span class="label">Añadir</span>
                </RouterLink>
            </li>
            <!-- <li>
                <RouterLink to="/search">
                    <IconSearch />
                    <span class="label">Buscar</span>
                </RouterLink>
            </li> -->
            <li>
                <RouterLink to="/profile">
                    <img v-if="!!isAuthenticated && !!user && !!user.picture" :src="user.picture" class="profile-picture" />
                    <template v-else>
                        <IconProfile />
                        <span class="label">Iniciar sesión</span>
                    </template>
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
    import IconFeed from '@/assets/IconFeed.vue'
    import IconLocation from '@/assets/IconLocation.vue'
    import IconNew from '@/assets/IconNew.vue'
    // import IconSearch from '@/assets/IconSearch.vue'
    import IconProfile from '@/assets/IconProfile.vue'
    import { useAuth0 } from '@auth0/auth0-vue'

    const { user, isAuthenticated } = useAuth0()
</script>

<style lang="scss" scoped>
    .main-menu {
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 3;
        width: 100%;
        height: 64px;
        border-top: 1px solid $color-tertiary;
        padding: 0 24px;
        background-color: #fff;

        @include mobile-up {
            border: none;
            height: 63px;
        }

        ul {
            display: flex;
            align-items: center;
            justify-content: space-around;
            list-style: none;
            height: 100%;

            li {
                list-style: none;

                .label {
                    display: none;
                }
            }

            svg {
                width: 28px;
                height: auto;
                transition: all 300ms ease;
            }
        }

        .profile-picture {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            border: 1px solid $color-grey;
        }
    }

    .header .main-menu {
        position: unset;
        display: none;
        padding: 0;

        @include mobile-up {
            display: block;
        }

        ul {
            justify-content: flex-end;
            gap: 36px;

            li {
                svg {
                    display: none;
                }

                .label {
                    display: block;
                    font-weight: 600;
                }
            }
        }
    }

    #app > .main-menu {
        @include mobile-up {
            display: none;
        }
    }
</style>