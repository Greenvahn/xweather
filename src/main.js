
import { createApp } from "vue";
import App from "./App.vue";
require('dotenv').config();

const app = createApp(App);
app.use().mount("#app");
