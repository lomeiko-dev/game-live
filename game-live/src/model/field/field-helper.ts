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
          fillCell(canvas, row, col, size, color_cell);
        } else {
          clearCell(canvas, row, col, size);
        }

        ctx.strokeRect(col * size, row * size, size, size);
      }
    }
  }
};

export const fillCell = (canvas: HTMLCanvasElement, row: number, col: number, size: number, color: string) => {
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.fillStyle = color;
    ctx.fillRect(col * size, row * size, size, size);
    ctx.strokeRect(col * size, row * size, size, size);
  }
};

export const clearCell = (canvas: HTMLCanvasElement, row: number, col: number, size: number) => {
  const ctx = canvas.getContext("2d");

  if (ctx) {  
    ctx.clearRect(col * size, row * size, size, size);
    ctx.strokeRect(col * size, row * size, size, size);
  }
};
