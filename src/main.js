import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 移动端rem适配
import { setRem } from './utils/common'
setRem()
const app = createApp(App)
import vantCommponent from './utils/importVant'
app.use(router)
app.use(store)
vantCommponent.forEach(item => {
    app.use(item)
})
app.mount('#app')
