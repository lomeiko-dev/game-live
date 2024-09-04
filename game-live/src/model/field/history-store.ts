import { defineStore } from "pinia";
import { ref } from "vue";
import { ICoord, typeCell } from "./types";
import { getNeighbors } from "./field-helper";

export const historyStore = defineStore("history", () => {
  const field = ref<typeCell[][]>([]);
  const cell_size = ref<number>(0);

  const cells_cleared: ICoord[] = [];
  const ceels_filled: ICoord[] = [];

  const initialField = (size_x: number, size_y: number, size_cell: number) => {
    field.value = Array.from({ length: size_y }, () => Array.from({ length: size_x }, () => 0));
    cell_size.value = size_cell;
  };

  const toggleCell = (x: number, y: number) => {
    field.value[y][x] = field.value[y][x] === 0 ? 1 : 0;
    return field.value[y][x];
  };

  const motion = (row: number, col: number) => {
    const result = getNeighbors(field.value, row, col);
    const life_cells = result.filter((item) => item === 1);

    if (field.value[col][row] === 1) {
      if (life_cells.length < 2 || life_cells.length > 3) {
        cells_cleared.push({ x: row, y: col });
      }
    } else {
      if (life_cells.length === 3) {
        ceels_filled.push({ x: row, y: col });
      }
    }
  };

  const clearedCellsByArray = (clearCell: (x: number, y: number) => void) => {
    cells_cleared.forEach(({ x, y }) => {
      field.value[y][x] = 0;
      clearCell(y, x);
    });
    cells_cleared.length = 0;
  };

  const fiiledCellByArray = (filledCell: (x: number, y: number) => void) => {
    ceels_filled.forEach(({ x, y }) => {
      field.value[y][x] = 1;
      filledCell(y, x);
    });
    ceels_filled.length = 0;
  };

  return {
    cell_size,
    field,
    initialField,
    toggleCell,
    motion,
    fiiledCellByArray,
    clearedCellsByArray,
  };
});
