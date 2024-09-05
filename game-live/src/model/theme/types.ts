export type typeTheme = "light" | "dark" | "green";

export interface Itheme {
  index: number;
  themeName: typeTheme;
  colors: Record<string, string>;
}
