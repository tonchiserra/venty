import { config } from "@/config/config"
import { reactive } from "vue"
import { IEventStoreState } from "@/interfaces/EventInterface"

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

    async addEvent(event: any): Promise<void> {

        console.log(event)

        try {
            let response = await fetch(config.APP.EVENT_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(event)
            })

            await response.json()

        }catch(error) {
            console.error(error)
        }
    }
}

const eventStore = new EventStore({
    events: [],
    event: {}
})

export { eventStore }