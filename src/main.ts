import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from '@/App.vue'
import FeedView from '@/views/FeedView.vue'
import LocationView from '@/views/LocationView.vue'
import AddView from '@/views/AddView.vue'
import SearchView from '@/views/SearchView.vue'
import EventView from '@/views/EventView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import ProfileView from '@/views/ProfileView.vue'

import '@/stores/EventStore.ts'

const routes = [
    { path: '/', component: FeedView },
    { path: '/profile', component: ProfileView },
    { path: '/location', component: LocationView },
    { path: '/new', component: AddView },
    { path: '/search', component: SearchView },
    { path: '/events', component: FeedView },
    { path: '/events/:id', component: EventView} ,
    { path: '/:pathMatch(.*)*', component: NotFoundView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.use(createAuth0({
    domain: "venty.us.auth0.com",
    clientId: "oJT9CerolVW1QuXxYvisipz3tpR6bCLY",
    authorizationParams: {
        redirect_uri: window.location.origin,
        audience: "https://venty.us.auth0.com/api/v2/",
        scope: "openid profile email"
    }
}))

app.mount('#app')
