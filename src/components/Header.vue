<template>
    <header class="header">
        <div class="header__container page-width">
            <h1>
                <Logo />
                <span class="hidden">Venty</span>
            </h1>
            <nav class="header__main-menu">
                <ul>
                    <li><RouterLink to="/location"><IconLocation /></RouterLink></li>
                    <li><RouterLink to="/"><IconFeed /></RouterLink></li>
                    <li><RouterLink to="/add"><IconNew /></RouterLink></li>
                    <li><RouterLink to="/search"><IconSearch /></RouterLink></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
    import Logo from './Logo.vue'
    import IconFeed from '@/assets/IconFeed.vue'
    import IconLocation from '@/assets/IconLocation.vue'
    import IconNew from '@/assets/IconNew.vue'
    import IconSearch from '@/assets/IconSearch.vue'
</script>

<style lang="scss">
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

        &__main-menu {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 64px;
            border-top: 1px solid $color-tertiary;
            padding: 0 24px;
            background-color: #fff;

            ul {
                display: flex;
                align-items: center;
                justify-content: space-around;
                list-style: none;
                height: 100%;

                li {
                    list-style: none;
                }

                svg {
                    width: 28px;
                    height: auto;
                }
            }
        }
    }
</style>