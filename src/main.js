import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/index.css";
import pinia from "./stores/newStore";
const app = createApp(App);



app.use(router,pinia);

app.mount("#app");
