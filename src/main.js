import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import {Base64} from 'js-base64'

Vue.config.productionTip = false
Vue.use(Base64)

axios.interceptors.request.use((config)=>{
  config.headers["Authorization"] = "Basic "+Base64.encode("")
  return config
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
