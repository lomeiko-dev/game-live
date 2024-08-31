export type typeTheme = "light" | "dark" | "green";

export interface Itheme {
  themeName: typeTheme;
  colors: Record<string, string>;
}
