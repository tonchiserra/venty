<template>
    <button v-if="!!!type || type === 'button'" :class="`button--${level}`">{{ label }}</button>
    
    <a v-if="type === 'anchor'" :class="`button button--${level}`">{{ label }}</a>
    
    <label v-if="type === 'label'" :class="`button button--${level}`">{{ label }}</label>
</template>

<script setup lang="ts">
    defineProps(['level', 'label', 'type'])
</script>

<style lang="scss">
    button,
    .button {
        padding: 0 20px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 8px;
        font-size: 1.6rem;
        transition: all 300ms ease;
        cursor: pointer;

        &:hover,
        &:focus,
        &:active,
        &:focus-within{
            outline: none;
            border: none;
        }

        &.button--primary {
            background-color: $color-primary;
            color: #fff;
            font-weight: 700;

            &:hover {
                background-color: $color-secondary;
            }
        }

        &.button--secondary {
            background-color: transparent;
            color: $color-primary;
            text-decoration: underline;
            text-underline-offset: 4px;
            font-weight: 600;

            &:hover {
                color: $color-secondary;
            }
        }
    }
</style>