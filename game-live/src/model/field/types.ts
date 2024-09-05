export type typeCell = 0 | 1;

export interface ICoord {
    x: number;
    y: number;
}

export interface IHistory {
    field: typeCell[][];
}