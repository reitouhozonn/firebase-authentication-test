import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Setting from "../views/Setting.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/setting",
    name: "Setting",
    component: Setting,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

// router.beforeEach(async (to, from) => {
//     if (to.name !== 'Home' && !checkState.isLoggedIn) {
//         return { name: 'Home' }
//     }
// })

export default router;
