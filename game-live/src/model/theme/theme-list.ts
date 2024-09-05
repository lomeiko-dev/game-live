import { Itheme } from "./types";

export const themeList: Itheme[] = [
  {
    index: 0,
    themeName: "light",
    colors: {
      bgPrimary: "#fff",
      textPrimary: "#333",
      bgSecodary: "#cbcbcb",
      bgTeriary: "#b677ff",
      inverse: "#333",
    },
  },
  {
    index: 1,
    themeName: "dark",
    colors: {
      bgPrimary: "#333",
      textPrimary: "#fff",
      bgSecodary: "#202020",
      bgTeriary: "#0887ff",
      inverse: "#green",
    },
  },
  {
    index: 2,
    themeName: "green",
    colors: {
      bgPrimary: "#1c5a00",
      textPrimary: "#fff",
      bgSecodary: "#017128",
      bgTeriary: "#08ff7b",
      inverse: "#fff",
    },
  },
];
