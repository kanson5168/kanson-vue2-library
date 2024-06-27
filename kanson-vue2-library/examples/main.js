import Vue from 'vue'
import App from './App.vue'
import '../components/css/datavisual.scss'
import '../components/css/identitycard.scss'
// import DataVisual from '../components/lib/datavisual/index'
import IdentityCard from '../components/lib/identitycard/index'
Vue.use(IdentityCard)
// Vue.use(DataVisual)

// import 'kanson-vue2-library/dist/css/index.css'
// import KUI from 'kanson-vue2-library'
// Vue.use(KUI)
// import 'kanson-vue2-library/dist/css/index.css';
// import KUI from 'kanson-vue2-library'
// Vue.use(KUI)
import 'kanson-vue2-library/dist/css/identitycard.css';
// import IdentityCard from 'kanson-vue2-library'
// Vue.use(IdentityCard)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
