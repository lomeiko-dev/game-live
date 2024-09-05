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
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 48px;
    font-weight: 700;
    text-align: center;
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

@media (max-width: 1024px) {
  .header{
    h1{
      font-size: 32px;
    }
    h2{
      margin-top: 25px;
      font-size: 18px;
      line-height: 24px;
    }
  }
}

@media (max-width: 768px) {
  .header{
    h1{
      margin-top: 50px;
      font-size: 28px;
    }
    h2{
      margin-top: 20px;
      font-size: 16px;
      line-height: 20px;
    }
  }
}

@media (max-width: 600px) {
  .header{
    h1{
      font-size: 24px;
    }
  }
}
</style>
