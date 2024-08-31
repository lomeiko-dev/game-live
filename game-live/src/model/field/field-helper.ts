import { typeCell } from "./types";

export const drawCell = (
  canvas: HTMLCanvasElement,
  cells: typeCell[][],
  size: number,
  color_cell: string,
  color_grid: string
) => {
  const ctx = canvas.getContext("2d");

  if (ctx) {
    for (let row = 0; row < cells.length; row++) {
      for (let col = 0; col < cells[row].length; col++) {
        ctx.strokeStyle = color_grid;
        if (cells[row][col] === 1) {
          ctx.fillStyle = color_cell;
          ctx.fillRect(col * size, row * size, size, size);
        } else {
          ctx.clearRect(col * size, row * size, size, size);
        }

        ctx.strokeRect(col * size, row * size, size, size);
      }
    }
  }
};
