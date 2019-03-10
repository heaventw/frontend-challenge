import Vue from 'vue';
import VueI18n from 'vue-i18n';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faUsers,
  faUtensils,
  faCalculator,
  faTag,
  faCommentAlt,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/tailwind.css';
import messages from '@/assets/locales';
import 'vue2-dropzone/dist/vue2Dropzone.css';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  messages,
});

library.add(
  faChevronUp,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faUsers,
  faUtensils,
  faCalculator,
  faTag,
  faCommentAlt,
  faEye,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
axios.defaults.baseURL = process.env.VUE_APP_BASE_URI;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app');
