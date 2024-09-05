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

export const fillCell = (
  canvas: HTMLCanvasElement | undefined,
  row: number,
  col: number,
  size: number,
  color: string
) => {
  if (canvas) {
    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.fillStyle = color;
      ctx.fillRect(col * size, row * size, size, size);
      ctx.strokeRect(col * size, row * size, size, size);
    }
  }
};

export const clearCell = (canvas: HTMLCanvasElement | undefined, row: number, col: number, size: number) => {
  if (canvas) {
    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.clearRect(col * size, row * size, size, size);
      ctx.strokeRect(col * size, row * size, size, size);
    }
  }
};

export const clearAllField = (canvas: HTMLCanvasElement | undefined) => {
  if (canvas) {
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
};

export const getNeighbors = (matrix: typeCell[][], col: number, row: number) => {
  const neighbors = [];
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (const [dRow, dCol] of directions) {
    const neighborRow = (row + dRow + numRows) % numRows;
    const neighborCol = (col + dCol + numCols) % numCols;

    neighbors.push(matrix[neighborRow][neighborCol]);
  }

  return neighbors;
};
