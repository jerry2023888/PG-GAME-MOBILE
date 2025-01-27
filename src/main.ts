import { createApp } from "vue";
import App from "./App.vue";
import injectPinia from "./plugins/pinia";
import router from "./router";
import i18n from '@/utils/i18n';
import '@/assets/styles/vant.css';
import '@/assets/styles/variables.css';
import '@/assets/styles/main.css';
import '@/assets/styles/font.css';


const vueApp = createApp(App);
// 初始化 i18n
vueApp.use(i18n);
vueApp.use(router);
injectPinia(vueApp);
vueApp.mount("#app");
