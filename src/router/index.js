import { createRouter, createWebHistory } from "vue-router";
import nav from "../views/nav.vue"; //importing nav component
import chemistry from "../views/chemistry.vue"; //importing chemistry componentf
import PeriodicTableVisualizer from "@/components/chemistry/PeriodicTableVisualizer.vue"; //importing PeriodicTableVisualizer component

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
    component: PeriodicTableVisualizer,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
