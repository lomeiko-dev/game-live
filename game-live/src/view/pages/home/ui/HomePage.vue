<script setup lang="ts">
import { ThemeChanger } from "viewModel/theme-changer";
import { ref } from "vue";
import Header from "./components/header/Header.vue";
import { Page } from "view/ui/page";
import { Modal } from "viewModel/ui/modal";
import Description from "./components/description/Description.vue";
import { StartGameForm } from "viewModel/start-game-form";
import { Routes } from "view/app/routing";
import Body from "./components/body/Body.vue";

const showInfo = ref(false);
const showStart = ref(false);

const clickGitHandler = () => {
  window.location.replace("https://github.com/lomeiko-dev/game-live/tree/dev");
};
</script>
<template>
  <Page>
    <ThemeChanger class="button_theme" />
    <Header />
    <Body
      class="body"
      @on-git-click="clickGitHandler"
      @on-info-click="showInfo = !showInfo"
      @on-start-click="showStart = !showStart"
    />
    <Modal modal-class="modal-info" @on-close="showInfo = false" :is-open="showInfo">
      <Description />
    </Modal>
    <Modal modal-class="modal-form" @on-close="showStart = false" :is-open="showStart">
      <StartGameForm :path-game="Routes.GAME.path" />
    </Modal>
  </Page>
</template>
<style lang="scss">
.body{
  align-items: center;
  height: 50%;
}
.button_theme {
  position: absolute;
  top: 20px;
  right: 20px;
}

.modal-info {
  width: 100%;
  max-width: 800px;
}
.modal-form {
  width: 100%;
  max-width: 300px;
}
</style>
