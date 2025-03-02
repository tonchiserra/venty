import L from 'leaflet'
import { formatMoney } from '@/misc/Helpers'

class LocationStore {
    public map: L.Map | undefined
    private userMarker: L.Icon

    constructor() {
        this.userMarker = L.icon({
            iconUrl: 'userMarker.png',
            shadowUrl: '',
            iconSize: [30, 30],
            shadowSize: [0, 0],
            iconAnchor: [15, 15],
            shadowAnchor: [0, 0],
            popupAnchor: [15, 0]
        })
    }

    initMap() {
        this.map = L.map('map').setView([-31, -61], 7)

        L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png?api_key=c63a5ed8-af22-4a49-967b-93dc5436f08b', {
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

        L.circle([pos.coords.latitude, pos.coords.longitude], {
            color: '#A3C19E',
            fillColor: '#A3C19E',
            fillOpacity: 0.1,
            radius: 27500
        }).addTo(this.map)
    }

    setEventsPositions(events: any) {
        events.forEach((event: any) => {
            if(!!this.map && !!event.coords && !!event.coords.lat && !!event.coords.lng) {
                let icon = L.icon({
                    iconUrl: event.owner?.picture ?? 'eventMarker.png',
                    shadowUrl: '',
                    iconSize: [40, 40],
                    shadowSize: [0, 0],
                    iconAnchor: [20, 20],
                    shadowAnchor: [0, 0],
                    popupAnchor: [0, -20]
                })

                let marker = L.marker([event.coords.lat, event.coords.lng], { icon }).addTo(this.map)
                
                marker.bindPopup(this.createEventPopup(event))
            }
        })
    }

    createEventPopup(event: any): string {
        let datesHTML = event.dates.reduce((acc: string, date: any) => {
            return acc + `<p class="text-small">${date.date} - ${date.startsAt}</p>`
        }, '')

        let price = event.dates.sort((a: any, b: any) => a.price - b.price)[0].price
        let priceHTML = !!price ? `<p class="text-small">Desde ${formatMoney(price)}</p>` : ''

        let popupHTML = `
            <div class="marker-popup__content">
                <a href="/events/${ event.id }"><h5>${event.title}</h5></a>
                ${ datesHTML }
                ${ priceHTML }
                <p class="text-small marker-popup__description">${event.description} sjsk jsksj ksjk jskjs kjskjsk jksj ksjksj kjsk jsksj kjsk jskjs ksj kjs kjsk jsk ks jks jk</p>
                <a href="/events/${ event.id }" class="view-all-btn">Ver más</a>
            </div>
        `
        
        return popupHTML
    }
}

const locationStore = new LocationStore()

export { locationStore }