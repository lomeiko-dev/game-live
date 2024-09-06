<script setup lang="ts">
import { ref, watchEffect, watch } from "vue";
import { FieldManager } from "viewModel/field-manager";
import { Page } from "view/ui/page";
import { clearAllField, drawCell, fieldStore } from "model/field";
import { useRouter } from "vue-router";
import { Routes } from "view/app/routing";
import {ControllFieldForm} from "viewModel/controll-field-form";
import { themeStore } from "model/theme";

const SIZE_SELL = 25

const bodyRef = ref<HTMLDivElement>();
const canvasRef = ref<HTMLCanvasElement>();

const router = useRouter();
const store = fieldStore();
const theme = themeStore();

const isPause = ref(true);
const speed = ref(1000);
const onMotion = ref<void | null>(null);

const drawField = () => {
  if (canvasRef.value)
    drawCell(
      canvasRef.value,
      store.field,
      store.cell_size,
      theme.theme.colors.bgTeriary,
      theme.theme.colors.textPrimary
    );
};

watch(
  () => canvasRef.value,
  () => {
    drawField()
  }
);

watchEffect(() => {
  if (store.field.length === 0) {
    router.push({ path: Routes.HOME.path });
  }
});

const clearField = () => {
  store.initialField(store.field.length, store.field[0].length, SIZE_SELL);
  clearAllField(canvasRef.value);
  drawField()
};
</script>

<template>
  <Page class="page">
    <div ref="bodyRef" class="body_field">
      <FieldManager
        :size_sell="SIZE_SELL"
        @get-canvas="(canvas) => (canvasRef = canvas)"
        @motion="(event) => (onMotion = event)"
        :is-pause="isPause"
        :speed="speed"
        v-if="bodyRef"
        :parent="bodyRef"
        :size_y="store.field.length"
        :size_x="store.field[0].length"
      />
    </div>
    <div class="controller">
      <ControllFieldForm
        v-if="onMotion"
        @clear="clearField"
        @on-motion="onMotion"
        @set-speed="(value) => (speed = value)"
        @set-pause="(value) => (isPause = value)"
        class="form"
      />
    </div>
  </Page>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: row;
}

.body_field {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  background-color: var(--bg-secondary);
  height: 100vh;
  overflow: auto;
}

.controller {
  width: 20%;

  .form {
    padding: 20px;
  }
}

@media (max-width: 1024px) {
  .page{
    flex-direction: column;
  }
  .body_field, .controller{
    width: 100%;
  }
}
</style>
