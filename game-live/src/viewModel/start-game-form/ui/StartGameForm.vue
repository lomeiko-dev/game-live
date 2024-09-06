<script setup lang="ts">
import { ref } from "vue";
import { InputNumber } from "viewModel/ui/inputs";
import { Button, enumTypeButton } from "viewModel/ui/button";
import { useRouter } from "vue-router";
import { fieldStore } from "model/field";

const SIZE_SELL = 25

interface IProps {
  pathGame: string;
}

const props = defineProps<IProps>();

const router = useRouter();
const store = fieldStore();

const sizeX = ref();
const sizeY = ref();

const clickStartHandler = () => {
    store.initialField(sizeX.value || 10, sizeY.value || 10, SIZE_SELL);
    router.push({path: props.pathGame});
};
</script>
<template>
  <div class="form">
    <p>Задайте размер игровому полю:</p>
    <div class="body-form">
        <InputNumber class="inp" v-model="sizeX" placeholder="Ширина" />
        <InputNumber class="inp" v-model="sizeY" placeholder="Высота" />
    </div>
    <Button @click="clickStartHandler" :type="enumTypeButton.RECTANGLE">Старт</Button>
  </div>
</template>
<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .body-form{
    display: flex;
    flex-direction: row;
    gap: 20px;

    .inp{
        width: 100%;
        max-width: 120px;
    }
  }

  p {
    color: var(--text-primary);
    font-size: 16px;
  }
}
</style>
