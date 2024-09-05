<script setup lang="ts">
import { themeStore } from 'model/theme';
import './styles/index.scss'
import { onMounted } from 'vue';

const theme = themeStore()

onMounted(() => {
  theme.loadTheme()
})
</script>

<template>
  <div :class="theme.theme.themeName">
    <RouterView/>
  </div>
</template>
