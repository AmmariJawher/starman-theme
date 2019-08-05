// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './../node_modules/bulma/css/bulma.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import * as VueGoogleMaps from 'vue2-google-maps'

library.add(fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAX8ib4jr1rOWBkWUiq0aQjHhtOKCtMXq0',
    libraries: 'places' // necessary for places input
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
