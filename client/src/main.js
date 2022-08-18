import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import our custom CSS
import './assets/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

const app = createApp(App)
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.use(createPinia())
app.use(router)

app.mount('#app')
