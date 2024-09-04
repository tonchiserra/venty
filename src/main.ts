import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from '@/App.vue'
import FeedView from '@/views/FeedView.vue'
import LocationView from '@/views/LocationView.vue'
import AddView from '@/views/AddView.vue'
import SearchView from '@/views/SearchView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

import '@/stores/EventStore.ts'

const routes = [
    { path: '/', component: FeedView },
    { path: '/location', component: LocationView },
    { path: '/add', component: AddView },
    { path: '/search', component: SearchView },
    { path: '/:pathMatch(.*)*', component: NotFoundView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
