import {
    createApp
} from 'vue'
import App from './App.vue'

// 全局样式
import "./styles/index.scss"

// router
import router from "./router/index.js"

//store
import store from "./store"

// i18n
// import {
//     createI18n
// } from "vue-i18n"
// import messages from "@node_modules/intlify/vite-plugin-vue-i18n/messages"
// const i18n = createI18n({
//     legacy: false,
//     locale: "en",
//     messages,
// });

const app = createApp(App)
app.use(store)
app.use(router)
// app.use(i18n)
app.mount('#app')