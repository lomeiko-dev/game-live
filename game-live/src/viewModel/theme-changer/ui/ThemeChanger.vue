<script setup lang="ts">
import vueInlineSvg from "vue-inline-svg";
import sun from "assets/svg/sun.svg";
import { themeStore, themeList } from "model/theme";

const theme = themeStore();

const changeTheme = () => {
    if(theme.indexSelected === 2){
        theme.indexSelected = -1;
    }

    theme.indexSelected++;

    const newTheme = themeList[theme.indexSelected]
    theme.changeTheme(newTheme)
    theme.saveTheme()
};
</script>
<template>
  <button @click="changeTheme" class="button">
    <vueInlineSvg class="icon" :src="sun" />
  </button>
</template>
<style scoped lang="scss">
.button {
  background-color: var(--bg-secondary);
  width: 40px;
  height: 40px;
  border-radius: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    width: 20px;
    height: 20px;
    fill: var(--inverse);
  }
}
.button:hover {
  opacity: 0.8;
}
</style>
