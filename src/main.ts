import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import authStore, { authStoreKey } from './stores/auth'



createApp(App)
    .provide(authStoreKey, authStore())
    .use(router)
    .mount('#app')
