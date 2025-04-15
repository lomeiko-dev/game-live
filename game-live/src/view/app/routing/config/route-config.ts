import { RouteRecordRaw } from "vue-router";
import { HomePage } from "view/pages/home";
import { GamePage } from "view/pages/game";

enum enumRouting {
  BASE = "BASE",
  HOME = "HOME",
  GAME = "GAME",
}

export const Routes: Record<enumRouting, RouteRecordRaw> = {
  [enumRouting.BASE]: { name: "/", path: "/", component: HomePage },
  [enumRouting.HOME]: { name: "/home", path: "/home", component: HomePage },
  [enumRouting.GAME]: { name: "/game", path: "/game", component: GamePage },
};
