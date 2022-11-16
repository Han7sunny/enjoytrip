import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";
import AppMain from "@/views/AppMain";
import AppLogin from "@/views/AppLogin";

Vue.use(VueRouter);

// Vue.loadScript();

const routes = [
  {
    path: "/",
    name: "main",
    component: AppMain,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/user/login",
    name: "login",
    component: () => import("@/views/AppLogin"),
  },
  {
    path: "/user/join",
    name: "join",
    component: () => import("@/views/AppJoin"),
  },
  {
    path: "/user/myPage",
    name: "myPage",
    component: () => import("@/views/AppUser"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
