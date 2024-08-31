<script setup lang="ts">
import { ref } from "vue";
import { FieldManager } from "viewModel/field-manager";
import { Page } from "view/ui/page";
import { fieldStore } from "model/field";

const bodyRef = ref<HTMLDivElement>();

const store = fieldStore();
</script>

<template>
  <Page>
    <div ref="bodyRef" class="body_field">
      <FieldManager v-if="bodyRef" :parent="bodyRef" :size_y="store.field.length" :size_x="store.field[0].length" />
    </div>
  </Page>
</template>

<style lang="scss" scoped>
.body_field {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  background-color: var(--bg-secondary);
  height: 100vh;
  overflow: auto;
}
</style>
