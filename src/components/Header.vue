<template>
    <header class="header" :class="{ 'show-in-desktop': showHeader }">
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
    import { computed } from 'vue'
    import { useRoute } from 'vue-router'

    const route = useRoute()
    const showHeader = computed(() => route.path === '/')
</script>

<style lang="scss" scoped>
    .header {
        background-color: #fff;
        border-bottom: 1px solid $color-tertiary;
        height: 64px;

        @include mobile-only {
            &:not(.show-in-desktop) {
                display: none;
            }
        }

        &__container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;
        }
    }
</style>