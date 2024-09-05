<script setup lang="ts">
import { ref, watch } from "vue";
import play from "assets/svg/play2.svg";
import arrow from "assets/svg/arrow.svg";
import rewind from "assets/svg/rewind.svg";
import pause from "assets/svg/pause.svg";
import inlineSvg from "vue-inline-svg";
import { Button, enumTypeButton } from "viewModel/ui/button";
import { speedsConfig } from "../model/config/speed-config";
import { useRouter } from "vue-router";
import { Routes } from "view/app/routing";

const emits = defineEmits(["setSpeed", "setPause", "onMotion", "clear"]);

const isPause = ref(true);
const speedIndex = ref(2);
const router = useRouter();

const onMotion = () => {
  emits("onMotion");
  isPause.value = true;
};

const incrementSpeed = () => {
  if (speedIndex.value === speedsConfig.length - 1) {
    speedIndex.value = 0;
    return;
  }

  speedIndex.value++;
};

const decrementSpeed = () => {
  if (speedIndex.value === 1) {
    speedIndex.value = speedsConfig.length - 1;
    return;
  }

  speedIndex.value--;
};

const clickMenuHandler = () => {
  router.push({ path: Routes.HOME.path });
};

const clearField = () => {
  emits("clear");
  isPause.value = true;
};

watch(
  () => isPause.value,
  () => {
    emits("setPause", isPause.value);
  }
);

watch(
  () => speedIndex.value,
  () => {
    emits("setSpeed", speedsConfig[speedIndex.value].value);
  }
);
</script>
<template>
  <div class="form">
    <div class="form_body">
      <Button @click="decrementSpeed" class="btn_rewind" :type="enumTypeButton.CIRCLE">
        <inlineSvg :src="rewind" />
      </Button>

      <Button @click="isPause = !isPause" class="btn_play" :type="enumTypeButton.CIRCLE">
        <inlineSvg v-if="isPause" :src="play" />
        <inlineSvg v-else :src="pause" />
      </Button>

      <Button @click="incrementSpeed" class="btn_rewind" :type="enumTypeButton.CIRCLE">
        <inlineSvg :src="rewind" />
      </Button>
      <Button @click="onMotion" class="btn_arrow" :type="enumTypeButton.CIRCLE">
        <inlineSvg :src="arrow" />
      </Button>
    </div>
    <div class="speed_box">
      <div class="speed">
        <p>{{ speedsConfig[speedIndex].title }}</p>
      </div>
    </div>
    <div class="buttons">
      <Button @click="clearField" :type="enumTypeButton.RECTANGLE"> Очистить всё поле </Button>
      <Button @click="clickMenuHandler" :type="enumTypeButton.RECTANGLE"> Меню </Button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  .form_body {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .btn_play {
      width: 50px;
      height: 50px;
    }
    .btn_arrow {
      width: 20px;
      height: 20px;
    }
    button:nth-child(3) {
      transform: scale(-1, 1);
    }
    .btn_rewind {
      width: 30px;
      height: 30px;
    }
  }

  .speed_box {
    margin-top: 20px;

    .speed {
      background-color: var(--bg-secondary);
      border-radius: 1000px;
      width: 30px;
      height: 30px;
      opacity: 0.3;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .buttons {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0 10px;
  }
}

@media (max-width: 1024px) {
  .form{
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .form_body{
      width: 100%;
      max-width: 300px;
    }

    .buttons{
      position: static;
      width: 100%;
      max-width: 200px;
    }
  }
}

@media (max-width: 1024px) {
  .form{
    flex-direction: column;
  }
}
</style>
