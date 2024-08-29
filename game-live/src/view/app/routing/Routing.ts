import { createRouter, createWebHistory } from "vue-router";
import { Routes } from "./config/route-config";

const routes = Object.entries(Routes).map((item) => item[1]);

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
