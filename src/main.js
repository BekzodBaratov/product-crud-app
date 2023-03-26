import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import store from "./store/product.store";
import "./style.css";
import "./routes";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
