<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { FieldManager } from "viewModel/field-manager";
import { Page } from "view/ui/page";
import { fieldStore } from "model/field";
import { useRouter } from "vue-router";
import { Routes } from "view/app/routing";

const bodyRef = ref<HTMLDivElement>();

const router = useRouter()
const store = fieldStore();

watchEffect(() => {
    if(store.field.length === 0){
        router.push({path: Routes.HOME.path})
    }
})

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
