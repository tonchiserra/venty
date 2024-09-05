<template>
    <header class="header">
        <div class="header__container page-width">
            <h1>
                <Logo />
                <span class="hidden">Venty</span>
            </h1>
            <MainNav />
        </div>
    </header>
</template>

<script setup lang="ts">
    import Logo from './Logo.vue'
    import MainNav from './MainNav.vue'
</script>

<style lang="scss" scoped>
    .header {
        background-color: #fff;
        border-bottom: 1px solid $color-tertiary;
        height: 64px;

        &__container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;
        }

        .main-menu {
            position: unset;

            @include mobile-only {
                display: none;
            }
        }
    }
</style>