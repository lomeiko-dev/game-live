<script setup lang="ts">
import { enumTypeButton } from "./types";

interface IProps {
  type: enumTypeButton;
}

const props = defineProps<IProps>()

const emits = defineEmits(['click'])

</script>
<template>
    <button @click="$emit('click')" class="btn" :class="props.type">
        <slot/>
    </button>
</template>
<style scoped lang="scss">
    .btn{
        background-color: var(--bg-secondary);
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-primary);
    }

    .btn:hover{
        opacity: .8;
    }

    .circle{
        border-radius: 100%;
    }

    .rectangle{
        border-radius: 3px;
    }
</style>
