<template>
    <div class="add page-width">
        <h2 class="title h1">Nuevo evento</h2>

        <form class="add-form" @submit.prevent="eventStore.addEvent(formData)">
            <div class="field">
                <input type="text" name="title" placeholder="Titulo" v-model="formData.title" required />
                <label for="EventTitle">Título *</label>
            </div>

            <div class="field">
                <textarea name="description" placeholder="Descripcion" v-model="formData.description" required></textarea>
                <label for="EventDescription">Descripción *</label>
            </div>

            <div class="image-field-group">
                <template v-for="i in 4">
                    <input type="file" :name="`image${i}`" :id="`EventImage${i}`" accept="image/*" @input="changeImage($event, i)" class="hidden" />
                    <label :for="`EventImage${i}`" class="field">
                        <template v-if="!!formData.images[i-1].imageURL">
                            <img :src="formData.images[i-1].imageURL" alt="" />
                            <button type="button" class="delete-img" @click.prevent="deleteImage(i)">Eliminar</button>
                        </template>
                        <div v-else class="image-label">
                            <IconPlus />
                            <span>Añadir imagen</span>
                        </div>
                    </label>
                </template>
            </div>

            <div class="field-group">
                <div class="field">
                    <input type="text" name="cta" placeholder="CTA" v-model="formData.cta" required />
                    <label for="EventCta">CTA *</label>
                </div>

                <!-- categorias -->
            </div>

            <div class="field">
                <input type="text" name="location" v-model="formData.location" placeholder="Location" />
                <label for="EventLocation">Ubicación</label>
            </div>

            <template v-for="i in datesQuantity">
                <legend>Fecha {{ i }}:</legend>
                <div class="field-group">
                    <div class="field">
                        <input type="number" :name="`date${i}[price]`" v-model="formData.dates[i-1].price" placeholder="Price" />
                        <label for="EventPrice">Precio</label>
                    </div>

                    <div class="field">
                        <input type="text" :name="`date${i}[date]`" placeholder="Date" v-model="formData.dates[i-1].date" required />
                        <label for="EventDate">Fecha *</label>
                    </div>
                </div>

                <div class="field-group">
                    <div class="field">
                        <input type="text" :name="`date${i}[startsAt]`" placeholder="Starts at" v-model="formData.dates[i-1].startsAt" required />
                        <label for="EventStartsAt">Horario de inicio *</label>
                    </div>

                    <div class="field">
                        <input type="text" :name="`date${i}[endsAt]`" v-model="formData.dates[i-1].endsAt" placeholder="Ends at" />
                        <label for="EventEndsAt">Horario de finalización</label>
                    </div>
                </div>

                <div class="field-group">
                    <div class="field">
                        <input type="number" :name="`date${i}[totalTickets]`" placeholder="Total tickets" v-model="formData.dates[i-1].totalTickets" required />
                        <label for="EventTotalTickets">Cupos totales *</label>
                    </div>

                    <div class="field">
                        <input type="number" :name="`date${i}[availableTickets]`" placeholder="Available tickets" v-model="formData.dates[i-1].availableTickets" />
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
    import IconPlus from '@/assets/IconPlus.vue'

    const datesQuantity = ref(1)

    const formData = ref<any>({
        title: '',
        description: '',
        cta: '',
        location: '',
        // categories: [],
        images: [
            { image: null, imageURL: null },
            { image: null, imageURL: null },
            { image: null, imageURL: null },
            { image: null, imageURL: null }
        ],
        dates: [{}, {}, {}, {}, {}]
    })

    const changeImage = (event: Event, i: number) => {
        const file = (event.target as HTMLInputElement).files?.[0]
        if(!!!file) return

        formData.value.images[i-1].image = file
        formData.value.images[i-1].imageURL = URL.createObjectURL(file)
    }

    const deleteImage = (i: number) => {
        formData.value.images[i-1].image = null
        formData.value.images[i-1].imageURL = null
    }
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