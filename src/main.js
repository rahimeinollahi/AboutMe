import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/*********************************************************/
//import bootstrap framework to project
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
/*********************************************************/

createApp(App).use(router).mount('#app')
