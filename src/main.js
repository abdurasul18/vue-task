import Vue from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import "@/assets/index.css";
import router from "./router";
import { ValidationProvider, ValidationObserver } from "vee-validate";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import { VueMaskDirective } from 'v-mask'
import store from './store'

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.directive('mask', VueMaskDirective);

const options = {
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
};
Vue.use(Toast, options);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
