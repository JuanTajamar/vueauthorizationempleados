import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import PerfilesComponent from "./components/PerfilesComponent.vue"

const myRoutes = [
    {path: "/", component: HomeComponent},
    { path: "/perfil", component: PerfilesComponent }
]

const router = createRouter({
  history: createWebHistory(),
  routes: myRoutes
});

export default router;