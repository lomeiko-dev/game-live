<script setup lang="ts">
import { ThemeChanger } from "viewModel/theme-changer";
import { ref } from "vue";
import inlineSvg from "vue-inline-svg";
import play from "assets/svg/play.svg";
import git from "assets/svg/git.svg";
import { Button } from "viewModel/ui/button";
import { enumTypeButton } from "viewModel/ui/button";
import Header from "./components/header/Header.vue";
import { Page } from "view/ui/page";
import { Modal } from "viewModel/ui/modal";
import Description from "./components/description/Description.vue";
import { StartGameForm } from "viewModel/start-game-form";
import { Routes } from "view/app/routing";

const showInfo = ref(false);
const showStart = ref(false);

const clickGitHandler = () => {
  window.location.replace('https://github.com/lomeiko-dev/game-live/tree/dev')
}

</script>
<template>
  <Page>
    <ThemeChanger class="button_theme" />
    <Header />
    <section class="body">
      <Button @click="showInfo = !showInfo" :type="enumTypeButton.CIRCLE" class="button">
        <p>i</p>
      </Button>
      <Button @click="showStart = !showStart" :type="enumTypeButton.CIRCLE" class="button">
        <inlineSvg class="icon" :src="play" />
      </Button>
      <Button @click="clickGitHandler" :type="enumTypeButton.CIRCLE" class="button">
        <inlineSvg class="icon" :src="git" />
      </Button>
    </section>
    <Modal modal-class="modal-info" @on-close="showInfo = false" :is-open="showInfo">
      <Description/>
    </Modal>
    <Modal modal-class="modal-form" @on-close="showStart = false" :is-open="showStart">
      <StartGameForm :path-game="Routes.GAME.path"/>
    </Modal>
  </Page>
</template>
<style lang="scss">
.button_theme {
  position: absolute;
  top: 20px;
  right: 20px;
}

.body {
  margin-top: 120px;
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
}

.modal-info {
  max-width: 800px;
}
.modal-form{
  max-width: 300px;
}
</style>
