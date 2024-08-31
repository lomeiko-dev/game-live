<script setup lang="ts">
import { ref, watch, watchEffect } from "vue";
import { drawCell, fieldStore } from "model/field";
import { themeStore } from "model/theme";
interface IProps {
  size_x: number;
  size_y: number;
  parent: HTMLDivElement;
}

const props = defineProps<IProps>();

const canvasRef = ref<HTMLCanvasElement>();
const store = fieldStore();
const theme = themeStore();

const updateCells = () => {
  if (canvasRef.value)
    drawCell(
      canvasRef.value,
      store.field,
      store.cell_size,
      theme.theme.colors.bgTeriary,
      theme.theme.colors.textPrimary
    );
};

watchEffect(() => {
  updateCells()
})

watch(
  () => store.field,
  () => {
    updateCells()
  },
  { deep: true }
);

const canvasClickHanler = (e: any) => {
  if (canvasRef.value) {
    const rect = canvasRef.value.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const col = Math.floor(x / 25);
    const row = Math.floor(y / 25);

    if (col >= 0 && col < props.size_x && row >= 0 && row < props.size_y) {
      store.toggleCell(col, row);
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
<style lang="scss">
</style>
