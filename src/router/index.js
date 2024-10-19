import { createRouter, createWebHistory } from "vue-router";
import Main from "../pages/Main.vue";
import About from "../pages/About.vue";
import PlayerDetails from "../pages/PlayerDetails.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/player-details/:id",
      name: "player-details",
      component: PlayerDetails,
    },
  ],
});
