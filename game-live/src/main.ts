import { createApp } from "vue";
import { App } from "view/app";
import { router } from "view/app/routing";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
