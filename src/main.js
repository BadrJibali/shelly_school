// Normalize CSS File.
import "normalize.css";
// Bootstrap CSS File.
import "bootstrap/dist/css/bootstrap.min.css";
// Vue instance
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
//all solid icons
import { fas } from "@fortawesome/free-solid-svg-icons";
//all regular icons
import { far } from "@fortawesome/free-regular-svg-icons";
//all brands icons
import { fab } from "@fortawesome/free-brands-svg-icons";
// V-Viewer Gallery.
import 'viewerjs/dist/viewer.css';
import VueViewer from 'v-viewer';
// Vue Formulate.
import VueFormulate from '@braid/vue-formulate'
// Google Maps.
import * as VueGoogleMaps from 'vue2-google-maps'
// Schedule Table
import SmartTable from 'vuejs-smart-table'





// Font Awesome Library Icons
library.add(fas, far, fab);

// Bootstrap JS File.
import "bootstrap/dist/js/bootstrap.bundle.min.js";

Vue.config.productionTip = false

// add font awesome icon component
Vue.component("font-awesome-icon", FontAwesomeIcon);

// V-Viewer Gallery.
Vue.use(VueViewer);

// Vue Formulate.
Vue.use(VueFormulate);

// Schedule Table
Vue.use(SmartTable)

// Google Maps.
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDZX5c5r9FxY3seIWddVuHLLaPEUsO5mKU',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },

})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
