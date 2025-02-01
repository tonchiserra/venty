<template>
    <div class="error-popup">
        <div class="error-popup__content">
            <p class="h2">Ups...</p>
            <p class="text">{{ 'Ocurrió un error. Vuelve más tarde.' }}</p>
            <CustomButton level="primary" label="Aceptar" type="anchor" href="/" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import CustomButton from '@/components/CustomButton.vue'

    defineProps<{
        message: string
    }>()
</script>

<style lang="scss">
    .error-popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;

        &__content {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            width: 80dvw;
            max-width: 400px;

            p {
                text-align: center;
            }

            .button {
                width: 100%;
            }
        }
    }
</style>