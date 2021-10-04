import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const app = createApp(App).use(store).use(router)

app.config.globalProperties.axios=axios

// axios.defaults.baseURL = 'http://cpe-dbms.unaux.com/'

// createApp(App)
//     .use(store)
//     .use(router)
//     // .use(axios)
//     .mount('#app')


app.mount('#app')