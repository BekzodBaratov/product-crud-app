import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../view/Welcome.vue";
import ProductAdd from "../view/ProductAdd.vue";
import ProductUpd from "../view/ProductUpd.vue";
import PageNotFound from "../view/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Welcome",
    redirect: "/products",
  },
  {
    path: "/products",
    name: "Products",
    component: Welcome,
  },
  {
    path: "/products/add",
    name: "productAdd",
    component: ProductAdd,
  },
  {
    path: "/products/edit/:id",
    name: "productEdit",
    component: ProductUpd,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "pageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

export default router;
