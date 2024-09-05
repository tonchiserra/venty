<template>
    <nav class="main-menu">
        <ul>
            <li><RouterLink to="/location"><IconLocation /></RouterLink></li>
            <li><RouterLink to="/"><IconFeed /></RouterLink></li>
            <li><RouterLink to="/add"><IconNew /></RouterLink></li>
            <li><RouterLink to="/search"><IconSearch /></RouterLink></li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
    import IconFeed from '@/assets/IconFeed.vue'
    import IconLocation from '@/assets/IconLocation.vue'
    import IconNew from '@/assets/IconNew.vue'
    import IconSearch from '@/assets/IconSearch.vue'
</script>

<style lang="scss" scoped>
    .main-menu {
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
</style>