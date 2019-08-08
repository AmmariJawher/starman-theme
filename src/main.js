// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './../node_modules/bulma/css/bulma.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faLock, faEnvelope, faMapMarkerAlt, faToolbox, faCog, faPlug, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as VueGoogleMaps from 'vue2-google-maps'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false

// Font Awesome
library.add(faUser, faLock, faEnvelope, faMapMarkerAlt, faToolbox, faCog, faPlug, faSearch)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Google Maps
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAroVv29x_y4gdfPKjXQCLheNsGesx99rM',
    libraries: 'places' // necessary for places input
  }
})

// Vee validate
Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
