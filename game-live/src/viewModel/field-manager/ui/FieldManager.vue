<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { fieldStore, fillCell, clearCell } from "model/field";
import { themeStore } from "model/theme";

interface IProps {
  size_x: number;
  size_y: number;
  size_sell: number;
  parent: HTMLDivElement;
  isPause: boolean;
  speed: number;
}

const props = defineProps<IProps>();
const emits = defineEmits(["motion", "getCanvas"]);

const canvasRef = ref<HTMLCanvasElement>();
const store = fieldStore();
const theme = themeStore();

let intervalId: number | null = null;

onMounted(() => {
  if (canvasRef.value) {
    emits("getCanvas", canvasRef.value);
    emits("motion", motion);
  }
});

const motion = () => {
  for (let row = 0; row < store.field.length; row++) {
    for (let col = 0; col < store.field[row].length; col++) {
      store.motion(row, col);
    }
  }

  store.clearedCellsByArray((x, y) => clearCell(canvasRef.value, x, y, props.size_sell));
  store.fiiledCellByArray((x, y) => fillCell(canvasRef.value, x, y, props.size_sell, theme.theme.colors.bgTeriary));
};

watch(
  () => props.isPause,
  () => {
    props.isPause ? stopAsyncAction() : startAsyncAction();
  }
);

watch(
  () => props.speed,
  () => {
    updateAsyncAction();
  }
);

const updateAsyncAction = () => {
  stopAsyncAction();
  startAsyncAction();
};

const startAsyncAction = () => {
  if (intervalId === null) {
    intervalId = window.setInterval(() => {
      motion();
    }, props.speed);
  }
};

const stopAsyncAction = () => {
  if (intervalId !== null) {
    clearInterval(intervalId);
    intervalId = null;
  }
};

const canvasClickHanler = (e: any) => {
  if (canvasRef.value) {
    const rect = canvasRef.value.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const col = Math.floor(x / 25);
    const row = Math.floor(y / 25);

    if (col >= 0 && col < props.size_x && row >= 0 && row < props.size_y) {
      const result = store.toggleCell(col, row);
      if (result === 1) fillCell(canvasRef.value, row, col, 25, theme.theme.colors.bgTeriary);
      else {
        clearCell(canvasRef.value, row, col, props.size_sell);
      }
    }
  }
};
</script>
<template>
  <canvas
    @click="canvasClickHanler"
    ref="canvasRef"
    id="myCanvas"
    :width="props.size_x * 25"
    :height="props.size_y * 25"
  ></canvas>
</template>
<style lang="scss"></style>
