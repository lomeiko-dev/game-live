import { defineStore } from "pinia";
import { typeTheme } from "./types";
import { ref } from "vue";

const THEME_KEY = "theme_app";

export const themeStore = defineStore("theme", () => {
  const theme = ref<typeTheme>("light");

  const loadTheme = () => {
    const storedTheme = localStorage.getItem(THEME_KEY);
    if (storedTheme) {
      theme.value = storedTheme as typeTheme;
    }
  };

  const changeTheme = (newTheme: typeTheme) => {
    theme.value = newTheme;
  };

  const saveTheme = () => {
    localStorage.setItem(THEME_KEY, theme.value);
  };

  return {
    theme,
    loadTheme,
    changeTheme,
    saveTheme,
  };
});
