<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { FieldManager } from "viewModel/field-manager";
import { Page } from "view/ui/page";
import { fieldStore } from "model/field";
import { useRouter } from "vue-router";
import { Routes } from "view/app/routing";
import ControllFieldForm from "viewModel/controll-field-form/ui/ControllFieldForm.vue";

const bodyRef = ref<HTMLDivElement>();

const router = useRouter();
const store = fieldStore();

const isPause = ref(true);
const speed = ref(1000);

watchEffect(() => {
  if (store.field.length === 0) {
    router.push({ path: Routes.HOME.path });
  }
});
</script>

<template>
  <Page class="page">
    <div ref="bodyRef" class="body_field">
      <FieldManager
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
</style>
