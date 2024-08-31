import { defineStore } from "pinia";
import { Itheme, typeTheme } from "./types";
import { ref } from "vue";
import { themeList } from "./theme-list";

const THEME_KEY = "theme_app";

export const themeStore = defineStore("theme", () => {
  const theme = ref<Itheme>(themeList[0]);

  const loadTheme = () => {
    const storedTheme = localStorage.getItem(THEME_KEY);
    if (storedTheme) {
      const themeName = storedTheme as typeTheme;

      theme.value = themeList.find((item) => item.themeName === themeName) || themeList[0];
    }
  };

  const changeTheme = (newTheme: Itheme) => {
    theme.value = newTheme;
  };

  const saveTheme = () => {
    localStorage.setItem(THEME_KEY, theme.value.themeName);
  };

  return {
    theme,
    loadTheme,
    changeTheme,
    saveTheme,
  };
});
