import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home/Home";
import Contact from "@/components/Contact/Contact";
import Register from "@/components/Register/Register";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/register",
    name: "register",
    component: Register
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.base,
  routes
});
export default router;
