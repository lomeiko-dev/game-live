import { Itheme } from "./types";

export const themeList: Itheme[] = [
  {
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
