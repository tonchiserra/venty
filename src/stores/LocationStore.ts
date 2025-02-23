import L from 'leaflet'

class LocationStore {
    public map: L.Map | undefined
    private userMarker: L.Icon

    constructor() {
        this.userMarker = L.icon({
            iconUrl: 'userMarker.png',
            shadowUrl: '',
            iconSize: [20, 20],
            shadowSize: [0, 0],
            iconAnchor: [10, 10],
            shadowAnchor: [0, 0],
            popupAnchor: [10, 0]
        })
    }

    initMap() {
        this.map = L.map('map').setView([-31, -61], 7)

        L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
            //options
        }).addTo(this.map)
    
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => this.setUserPosition(pos),
                (error) => console.error(error),
                { timeout: 5000 }
            )
        } 
    }

    setUserPosition(pos: GeolocationPosition) {
        if(!!!this.map) return

        this.map?.setView([pos.coords.latitude, pos.coords.longitude], 15)
        L.marker([pos.coords.latitude, pos.coords.longitude], { icon: this.userMarker }).addTo(this.map)
    }

    setEventsPositions(events: any) {
        events.forEach((event: any) => {
            if(!!this.map && !!event.coords && !!event.coords[0] && !!event.coords[1]) {
                let icon = L.icon({
                    iconUrl: event.owner?.picture ?? 'eventMarker.png',
                    shadowUrl: '',
                    iconSize: [30, 30],
                    shadowSize: [0, 0],
                    iconAnchor: [15, 15],
                    shadowAnchor: [0, 0],
                    popupAnchor: [0, -15]
                })

                let marker = L.marker([event.coords[0], event.coords[1]], { icon }).addTo(this.map)
                
                console.log(event)
                marker.bindPopup(this.createEventPopup(event))
            }
        })
    }

    createEventPopup(event: any): string {
        let html = `
            <div>
                <h5>${event.title}</h5>
                <p>${event.dates[0].date} - ${event.dates[0].startsAt}</p>
                <p>${event.description}</p>
            </div>
        `
        
        return html
    }
}

const locationStore = new LocationStore()

export { locationStore }