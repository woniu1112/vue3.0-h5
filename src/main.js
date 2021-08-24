import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 移动端rem适配
import 'amfe-flexible'
const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
