<template>
    <header class="header">
        <div class="header__container page-width">
            <h1>EVENTON</h1>
            <nav class="header__main-menu">
                <ul>
                    <li><RouterLink to="/location">Ubicación</RouterLink></li>
                    <li><RouterLink to="/">Feed</RouterLink></li>
                    <li><RouterLink to="/add">Agregar</RouterLink></li>
                    <li><RouterLink to="/search">Buscar</RouterLink></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="scss">
    .header {
        background-color: #fff;
        border-bottom: 1px solid $color-tertiary;
        height: 48px;

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
            height: 48px;
            border-top: 1px solid $color-tertiary;
            padding: 0 24px;
            background-color: #fff;

            ul {
                display: flex;
                align-items: center;
                justify-content: space-between;
                list-style: none;
                height: 100%;

                li {
                    list-style: none;
                }
            }
        }
    }
</style>