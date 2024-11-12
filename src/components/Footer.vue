<template>
    <footer class="footer page-width">
        <Logo />
        <p class="text-small">&copy; 2024 Venty - Designed and developed by <a href="https://linkedin.com/in/serragonzalo" target="_blank">Gonzalo Serra</a></p>
    </footer>
</template>

<script setup lang="ts">
    import Logo from "@/components/Logo.vue"
</script>

<style scoped lang="scss">
    .footer {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        padding-top: 60px;
        padding-bottom: 40px;

        @include mobile-only {
            margin-bottom: 64px;
        }
    }
</style>