<template>
    <div class="loading" :class="{ 'loading--fixed': fixed }">
        <div class="loader"></div>
    </div>
</template>

<script setup lang="ts">
    defineProps<{
        fixed?: boolean
    }>()
</script>

<style scoped lang="scss">
    .loading {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80dvh;

        &.loading--fixed {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.8);
            z-index: 1000;
        }
    }

    .loader {
        animation: rotate 2s infinite;
        height: 50px;
        width: 50px;
    }

    .loader:before,
    .loader:after {
        border-radius: 50%;
        content: "";
        display: block;
        height: 20px;
        width: 20px;
    }
    .loader:before {
        animation: ball1 2s infinite;
        background-color: $color-primary;
        box-shadow: 30px 0 0 $color-tertiary;
        margin-bottom: 10px;
    }
    .loader:after {
        animation: ball2 2s infinite;
        background-color: $color-tertiary;
        box-shadow: 30px 0 0 $color-primary;
    }

    @keyframes rotate {
        0% { transform: rotate(0deg) scale(0.8) }
        50% { transform: rotate(360deg) scale(1.2) }
        100% { transform: rotate(720deg) scale(0.8) }
    }

    @keyframes ball1 {
        0% {
            box-shadow: 30px 0 0 $color-tertiary;
        }
        50% {
            box-shadow: 0 0 0 $color-tertiary;
            margin-bottom: 0;
            transform: translate(15px, 15px);
        }
        100% {
            box-shadow: 30px 0 0 $color-tertiary;
            margin-bottom: 10px;
        }
    }

    @keyframes ball2 {
        0% {
            box-shadow: 30px 0 0 $color-primary;
        }
        50% {
            box-shadow: 0 0 0 $color-primary;
            margin-top: -20px;
            transform: translate(15px, 15px);
        }
        100% {
            box-shadow: 30px 0 0 $color-primary;
            margin-top: 0;
        }
    }
  
</style>