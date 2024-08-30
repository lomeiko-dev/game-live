<script setup lang="ts"></script>
<template>
  <header class="header">
    <h1>Добро пожаловать в "Игру Жизни"!</h1>
    <h2>
      "Игра Жизни" — это увлекательный симулятор, где клетки живут, умирают и размножаются по определённым правилам.
      Погрузитесь в мир, где каждое ваше действие влияет на будущее!
    </h2>
  </header>
</template>
<style scoped lang="scss">
.header {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 48px;
    font-weight: 700;
  }
  h2 {
    margin-top: 50px;
    width: 100%;
    max-width: 800px;
    font-size: 24px;
    font-weight: 500;
    line-height: 42px;
  }
}
</style>
