import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/pages/HomePage.vue';
import DetailsPage from './components/pages/DetailsPage.vue';
import GameDetails from './components/pages/DetailsOfGame.vue';
import ErrorPage from './components/pages/ErrorPage.vue';
import axios from 'axios';


const routes = [
    {

        path: '/',
        component: HomePage,
    },
    {
        path: "/home",
        component: HomePage,
    },

    {
        path: '/details',
        component: DetailsPage,
    },
    {
        path: '/games/:id',
        component: GameDetails,
    },

    {
        path: '/:Notfound(.*)*',
        component: ErrorPage
    },


]
axios.defaults.baseURL = 'http://localhost:8080/'

const router = createRouter({
    history: createWebHistory(),
    routes
})


createApp(App).use(router).mount('#app')
