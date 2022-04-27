import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import authStore, { authStoreKey } from './stores/auth'
import textStore, { textStoreKey } from './stores/firestore'



createApp(App)
    .provide(authStoreKey, authStore())
    .provide(textStoreKey, textStore())
    .use(router)
    .mount('#app')
