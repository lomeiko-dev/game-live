import { createApp } from "vue";
import { App } from "view/app";
import { router } from "view/app/routing";

createApp(App).use(router).mount("#app");
