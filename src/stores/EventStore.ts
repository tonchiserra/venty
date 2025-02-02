import { config } from "@/config/config"
import { reactive } from "vue"
import { IEventStoreState } from "@/interfaces/EventInterface"
import { Auth0VueClient } from "@auth0/auth0-vue"

class EventStore {
    public state: IEventStoreState

    constructor(state: IEventStoreState) {
        this.state = reactive(state)
        this.getLastEvents()
    }

    async getLastEvents(): Promise<void> {
        try {            
            let response = await fetch(config.APP.EVENT_ENDPOINT)
            if(!response.ok) throw new Error(response.statusText)

            let events = await response.json()
            this.state.events = events.data

        }catch(error) {
            console.error(error)
        }
    }

    async getEventById(id: string): Promise<void> {
        try {
            let response = await fetch(`${config.APP.EVENT_ENDPOINT}/${id}`)
            if(!response.ok) throw new Error(response.statusText)

            let event = await response.json()
            this.state.event = event.data

        }catch(error) {
            console.error(error)
        }
    }

    async addEvent(event: any, auth0: Auth0VueClient): Promise<void> {

        try {
            const token = await auth0.getAccessTokenSilently()

            let response = await fetch(config.APP.EVENT_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'enctype': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(event)
            })

            await response.json()

        }catch(error) {
            console.error(error)
        }
    }

    async uploadImages(formData: FormData, auth0: Auth0VueClient): Promise<string[]> {
        let imagesURLs

        try {
            const token = await auth0.getAccessTokenSilently()

            let response = await fetch(config.APP.IMAGES_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            imagesURLs = await response.json()
            
            if(!!!response.ok) throw imagesURLs

        }catch(error) {
            console.error(error)
        }

        return imagesURLs.data
    }
}

const eventStore = new EventStore({
    events: [],
    event: {}
})

export { eventStore }