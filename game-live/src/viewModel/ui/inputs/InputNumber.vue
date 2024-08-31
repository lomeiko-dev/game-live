<script setup lang="ts">
interface IProps {
  placeholder: string;
  isError?: boolean;
}

const props = defineProps<IProps>();
const model = defineModel();
</script>
<template>
  <input class="input" :class="isError && 'error'" type="number" v-model="model" :placeholder="props.placeholder" />
</template>
<style scoped lang="scss">
    .input{
        background-color: var(--bg-secondary);
        border: none;
        color: var(--text-primary);
        padding: 10px 20px;
        border-radius: 3px;
    }

    .error{
        border: 1px solid red;
    }

    .error::placeholder{
        color: red;
    }
</style>
