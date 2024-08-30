<script setup lang="ts"></script>
<template>
  <section class="page">
    <slot />
  </section>
</template>
<style scoped lang="scss">
.page {
  background-color: var(--bg-primary);
  height: 100vh;
  color: var(--text-primary);
  position: relative;
}
</style>
