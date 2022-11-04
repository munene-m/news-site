import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import News from "../views/News.vue"
import About from "../views/About.vue"
import pinia from "../stores/newStore"
import { useNewsStore } from "../stores/newStore";
const store = useNewsStore(pinia)
const apiKey = import.meta.env.VITE_NEWS_API_KEY,

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: to => {
        return { path: "/", query: `http://api.mediastack.com/v1/news?access_key=${apiKey}`}
      }
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/news",
      name: "news",
      component: News,
      redirect: to => {
        return { path: "/news", query: `http://api.mediastack.com/v1/news?access_key=${apiKey}`}
      }
    }
  ],
});


export default router;
