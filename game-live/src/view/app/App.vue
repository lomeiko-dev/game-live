<script setup lang="ts">
import { themeStore } from 'model/theme';
import './styles/index.scss'

const theme = themeStore()
</script>

<template>
  <div :class="theme.theme.themeName">
    <RouterView/>
  </div>
</template>
