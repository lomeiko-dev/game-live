import { defineStore } from "pinia";
import { ref } from "vue";
import { typeCell } from "./types";

export const fieldStore = defineStore("field", () => {
  const field = ref<typeCell[][]>([]);
  const cell_size = ref<number>(0);

  const initialField = (size_x: number, size_y: number, size_cell: number) => {
    field.value = Array.from({ length: size_y }, () => Array.from({ length: size_x }, () => 0));
    cell_size.value = size_cell;
  };

  const toggleCell = (x: number, y: number) => {
    field.value[y][x] = field.value[y][x] === 0 ? 1 : 0;
  };

  return {
    cell_size,
    field,
    initialField,
    toggleCell,
  };
});
