<template>
    <div class="add page-width">
        <h2 class="title h1">Nuevo evento</h2>

        <form class="add-form" @submit.prevent="eventStore.addEvent($event)">
            <div class="field">
                <input type="text" name="title" id="EventTitle" placeholder="Titulo" required />
                <label for="EventTitle">Título *</label>
            </div>

            <div class="field">
                <textarea name="description" id="EventDescription" placeholder="Descripcion" required></textarea>
                <label for="EventDescription">Descripción *</label>
            </div>

            <div class="field-group">
                <div class="field">
                    <input type="text" name="cta" id="EventCta" placeholder="CTA" required />
                    <label for="EventCta">CTA *</label>
                </div>

                <!-- categorias -->
            </div>

            <!-- imagenes,  -->

            <div class="field">
                <input type="text" name="location" id="EventLocation" placeholder="Location" />
                <label for="EventLocation">Ubicación</label>
            </div>

            <template v-for="i in datesQuantity">
                <legend>Fecha {{ i }}:</legend>
                <div class="field-group">
                    <div class="field">
                        <input type="number" name="date[price]" id="EventPrice" placeholder="Price" />
                        <label for="EventPrice">Precio</label>
                    </div>

                    <div class="field">
                        <input type="text" name="date" id="EventDate" placeholder="Date" required />
                        <label for="EventDate">Fecha *</label>
                    </div>
                </div>

                <div class="field-group">
                    <div class="field">
                        <input type="text" name="startsAt" id="EventStartsAt" placeholder="Starts at" required />
                        <label for="EventStartsAt">Horario de inicio *</label>
                    </div>

                    <div class="field">
                        <input type="text" name="endsAt" id="EventEndsAt" placeholder="Ends at" />
                        <label for="EventEndsAt">Horario de finalización</label>
                    </div>
                </div>

                <div class="field-group">
                    <div class="field">
                        <input type="number" name="totalTickets" id="EventTotalTickets" placeholder="Total tickets" required />
                        <label for="EventTotalTickets">Cupos totales *</label>
                    </div>

                    <div class="field">
                        <input type="number" name="availableTickets" id="EventAvailableTickets" placeholder="Available tickets" />
                        <label for="EventAvailableTickets">Cupos disponibles</label>
                    </div>
                </div>
            </template>

            <div class="dates-quantity-buttons">
                <button v-if="datesQuantity < 5" class="link-button add-date" type="button" @click="datesQuantity++">+ Añadir fecha</button>
                <div v-if="datesQuantity >= 5"></div>
                <button v-if="datesQuantity > 1" class="link-button remove-date" type="button" @click="datesQuantity--">Eliminar fecha</button>
            </div>

            <div class="field-group buttons">
                <CustomButton level="primary" label="Crear evento" type="submit" />
                <CustomButton level="secondary" label="Cancelar" type="reset" />
            </div>

        </form>
    </div>
</template>

<script setup lang="ts">
    import CustomButton from '@/components/CustomButton.vue'
    import { eventStore } from '@/stores/EventStore'
    import { ref } from 'vue'

    const datesQuantity = ref(1)
</script>

<style scoped lang="scss">
    .add {
        display: flex;
        flex-direction: column;
        gap: 32px;
        width: 100%;
        max-width: 600px;
        margin: 24px auto 0;

        .title {
            text-align: center;
        }

        .link-button {
            border: none;
            background-color: transparent;
            width: max-content;
            font-size: 1.4rem;
            line-height: 1;
            color: $color-secondary;
            transition: all 300ms ease;
            cursor: pointer;

            &:hover {
                color: $color-primary;
            }
        }

        .buttons {
            margin-top: 16px;
        }

        .dates-quantity-buttons {
            display: flex;
            gap: 16px;
            align-items: center;
            justify-content: space-between;
            width: 100%;
        }
    }
</style>