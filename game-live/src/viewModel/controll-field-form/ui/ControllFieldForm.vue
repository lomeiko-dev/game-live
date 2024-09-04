<script setup lang="ts">
import { ref, watch } from "vue";
import play from "assets/svg/play2.svg";
import arrow from "assets/svg/arrow.svg";
import rewind from "assets/svg/rewind.svg";
import pause from "assets/svg/pause.svg";
import inlineSvg from "vue-inline-svg";
import { Button, enumTypeButton } from "viewModel/ui/button";
import { speedsConfig } from "../model/config/speed-config";

const emits = defineEmits(["setSpeed", "setPause", "onIncrement", "onDecrement"]);

const isPause = ref(true);
const speedIndex = ref(2);

const toggleArrow = (emit: "onIncrement" | "onDecrement") => {
  emits(emit);
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
      <Button @click="toggleArrow" class="btn_arrow" :type="enumTypeButton.CIRCLE">
        <inlineSvg :src="arrow" />
      </Button>
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
      <Button @click="toggleArrow" class="btn_arrow" :type="enumTypeButton.CIRCLE">
        <inlineSvg :src="arrow" />
      </Button>
    </div>
    <div class="speed_box">
      <div class="speed">
        <p>{{ speedsConfig[speedIndex].title }}</p>
      </div>
    </div>
    <div class="buttons">
      <Button class="btn" :type="enumTypeButton.RECTANGLE"> Очистить всё поле </Button>
      <Button :type="enumTypeButton.RECTANGLE"> Меню </Button>
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
    justify-content: space-around;

    .btn_play {
      width: 50px;
      height: 50px;
    }
    .btn_arrow {
      width: 20px;
      height: 20px;
    }
    button:nth-child(5) {
      transform: scale(-1, 1);
    }
    button:nth-child(4) {
      transform: scale(-1, 1);
    }
    .btn_rewind {
      width: 30px;
      height: 30px;
    }
  }

  .speed_box {
    margin-top: 20px;
    display: flex;
    justify-content: center;

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
</style>
