import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import authStore, { authStoreKey } from './stores/auth'

createApp(App)
    .use(router)
    .provide(authStoreKey, authStore())
    .mount('#app')
