import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import Home from "@/views/test.vue";
import Form from "@/views/form.vue";
import Todo from "@/views/todo.vue";
import Login from "@/views/login.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((from, to, next) => {
  if (from.name === "Login" && store.state.user) {
    next('/')
  } else next();
});

export default router;
