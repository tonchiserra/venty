<template>
    <div class="add page-width">
        <h2 class="title h1">Nuevo evento</h2>

        <form class="add-form" @submit.prevent="submitForm">
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
                <input type="text" name="location" placeholder="Location" v-model="formData.location" @input="getLocations" required />
                <label for="EventLocation">Ubicación *</label>
                <div class="location-autocomplete-options">
                    <div v-for="option in locationsResult" @click="selectLocationOption(option)">{{ option.display_name }}</div>
                </div>
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

        <LoadingSpinner v-if="showLoader" :fixed="true" />

        <ErrorPopup v-if="showError" :message="errorMessage" />
    </div>
</template>

<script setup lang="ts">
    import CustomButton from '@/components/CustomButton.vue'
    import ErrorPopup from '@/components/ErrorPopup.vue'
    import LoadingSpinner from '@/components/LoadingSpinner.vue'
    import { eventStore } from '@/stores/EventStore'
    import { ref } from 'vue'
    import IconPlus from '@/assets/IconPlus.vue'
    import { useAuth0 } from "@auth0/auth0-vue"

    const auth0 = useAuth0()
    const user = auth0.user

    const datesQuantity = ref(1)

    let showError = ref<boolean>(false)
    let errorMessage = ref<string>('')

    let showLoader = ref<boolean>(false)

    let locationsResult = ref<any[]>([])

    const formData = ref<any>({
        owner: {
            name: user.value?.nickname ?? user.value?.name ?? 'Autogenerado',
            picture: user.value?.picture ?? 'eventMarker.png'
        },
        title: '',
        description: '',
        cta: '',
        location: '',
        coords: { lat: 0, lng: 0 },
        // categories: [],
        images: [
            { image: null, imageURL: null },
            { image: null, imageURL: null },
            { image: null, imageURL: null },
            { image: null, imageURL: null }
        ],
        dates: [{}, {}, {}, {}, {}],
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


    let getLocationsTimeout: NodeJS.Timeout
    const getLocations = async () => {
        clearTimeout(getLocationsTimeout)
        getLocationsTimeout = setTimeout( async () => {
            fetch(`https://api.locationiq.com/v1/autocomplete?q=${formData.value.location}&key=pk.5608fb9f359474030ec3642cb19b1588`, {method: 'GET', headers: {accept: 'application/json'}})
            .then(res => res.json())
            .then(data => {
                locationsResult.value = data
            })
            .catch(err => console.error(err))

        }, 1000)
    }

    const selectLocationOption = (option: any) => {
        formData.value.location = option.display_name
        formData.value.coords.lat = option.lat
        formData.value.coords.lng = option.lon
        locationsResult.value = []
    }

    const createImagesFormData = (): FormData => {
        const imagesFormData = new FormData()

        formData.value.images.forEach((image: any, index: number) => {
            if(!!image.image) {
                imagesFormData.append(`image[${index}]`, image.image)
            }
        })

        return imagesFormData
    }

    const submitForm = async () => {
        try {
            showLoader.value = true
            showError.value = false
            const imagesFormData = createImagesFormData()
            const imageURLs: string[] = await eventStore.uploadImages(imagesFormData, auth0)

            imageURLs.forEach((url: string, i: number) => {
                formData.value.images[i].image = url
            })

            await eventStore.addEvent(formData.value, auth0)

            showLoader.value = false
            location.href = '/'

        }catch(error) {
            console.error(error)
            showError.value = true
            errorMessage.value = 'Ocurrió un error al crear el evento. Intentelo de nuevo más tarde.'
            showLoader.value = false
        }
    }
</script>

<style scoped lang="scss">
    .add {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        max-width: 600px;
        margin: 24px auto 0;
        min-height: calc(100dvh - $header-height);

        .title {
            text-align: left;
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

        .location-autocomplete-options {
            display: flex;
            flex-direction: column;
            gap: 4px;
            padding: 4px 0 16px 0;

            &:empty {
                display: none;
            }

            div {
                border: 1px solid $color-grey;
                border-radius: 8px;
                padding: 8px 12px;
                transition: all 300ms ease;
                cursor: pointer;

                &:hover {
                    background-color: #fff;
                }
            }
        }
    }
</style>