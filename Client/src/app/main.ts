import "./styles/styles.less";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";

import App from "./app.vue";
import { router } from "./providers/vue-router";

const app = createApp(App);

app.use(MotionPlugin);
app.use(createPinia());
app.use(router);

app.mount("#app");
