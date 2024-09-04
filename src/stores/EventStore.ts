import { config } from "@/config/config"
import { reactive } from "vue"
import { IEventStoreState } from "@/interfaces/EventInterface"

class EventStore {
    public state: IEventStoreState

    constructor(state: IEventStoreState) {
        this.state = reactive(state)
        this.getLastEvents()
    }

    async getLastEvents() {
        try {
            let response = await fetch(config.APP.EVENT_ENDPOINT)
            if(!response.ok) throw new Error(response.statusText)

            let events = await response.json()
            this.state.events = events.data

        }catch(error) {
            console.error(error)
        }
    }
}

const eventStore = new EventStore({
    events: []
})

export { eventStore }