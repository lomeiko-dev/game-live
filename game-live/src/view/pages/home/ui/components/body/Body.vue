<script setup lang="ts">
import { Button, enumTypeButton } from "viewModel/ui/button";
import inlineSvg from "vue-inline-svg";
import play from "assets/svg/play.svg";
import git from "assets/svg/git.svg";

const emits = defineEmits(["onInfoClick", "onStartClick", "onGitClick"]);
</script>
<template>
  <section class="body">
    <Button @click="$emit('onInfoClick')" :type="enumTypeButton.CIRCLE" class="button">
      <p>i</p>
    </Button>
    <Button @click="$emit('onStartClick')" :type="enumTypeButton.CIRCLE" class="button">
      <inlineSvg class="icon" :src="play" />
    </Button>
    <Button @click="$emit('onGitClick')" :type="enumTypeButton.CIRCLE" class="button">
      <inlineSvg class="icon" :src="git" />
    </Button>
  </section>
</template>
<style scoped lang="scss">
.body {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  .button {
    width: 80px;
    height: 80px;
    font-size: 24px;

    .icon {
      width: 40px;
      height: 40px;
      fill: var(--text-primary);
    }
  }

  @media (max-width: 768px) {
    .button{
        width: 60px;
        height: 60px;
    }
  }
}
</style>
