<template>
    <button v-if="!!!type || type === 'button' || type === 'reset' || type === 'submit'" :type="type" :class="`button--${level}`"><span>{{ label }}</span></button>
    
    <a v-if="type === 'anchor'" :href="href" :class="`button button--${level}`" target="_blank"><span>{{ label }}</span></a>
    
    <label v-if="type === 'label'" :class="`button button--${level}`"><span>{{ label }}</span></label>
</template>

<script setup lang="ts">
    defineProps<{
        level: 'primary' | 'secondary'
        label: string
        type: 'button' | 'submit' | 'reset' | 'anchor' | 'label'
        href?: string
    }>()
</script>

<style lang="scss" scoped>
    button,
    .button {
        padding: 0 20px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 16px;
        font-size: 1.6rem;
        transition: all 300ms ease;
        cursor: pointer;
        position: relative;

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
            overflow: hidden;

            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100px;
                background-color: $color-primary;
                filter: brightness(.9);
                border-top-left-radius: 50%;
                border-top-right-radius: 50%;
                z-index: 0;
                transform: translateY(50%);
                transition: all 300ms ease;
            }

            span {
                z-index: 1;
            }

            &:hover::after {
                transform: translateY(-50%);
            }
        }

        &.button--secondary {
            background-color: transparent;
            color: $color-primary;
            font-weight: 500;

            span{
                position: relative;
            
                &::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0px;
                    height: 1px;
                    width: 0px;
                    transition: all 300ms ease;
                    background-color: $color-primary;
                }
            }

            &:hover {
                span::after {
                    width: 100%;
                }
            }
        }
    }
</style>