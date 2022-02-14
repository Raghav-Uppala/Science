import { createRouter, createWebHistory } from "vue-router";
import nav from "../views/nav.vue"; //importing nav component
import chemistry from "../views/chemistry.vue"; //importing chemistry componentf
import PeriodicTable from "@/components/chemistry/PeriodicTable.vue";

const routes = [ 
  {
    path: "/",
    name: "nav",
    component: nav,
  },
  {
    path: "/chemistry",
    name: "chemistry",
    component: chemistry,
  },
  {
    path: "/chemistry/PeriodicTable",
    name: "PeriodicTable",
    component: PeriodicTable,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
