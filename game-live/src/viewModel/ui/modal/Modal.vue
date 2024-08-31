<script setup lang="ts">
import { ref, watchEffect } from "vue";
import cross from "assets/svg/cross.svg";
import inlineSvg from "vue-inline-svg";

interface IProps {
  isOpen: boolean;
  modalClass?: string;
}

const props = defineProps<IProps>();
const emits = defineEmits(["onClose"]);

const isClosed = ref(false);

watchEffect(() => {
  if (props.isOpen) {
    window.addEventListener("keydown", onKeyDown);
  }
});

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    closedModalHanlder();
  }
};

const closedModalHanlder = () => {
  isClosed.value = true;

  setTimeout(() => {
    emits("onClose");
    isClosed.value = false
  }, 150);
};
</script>
<template>
  <div class="overflow" :class="`${props.isOpen && 'open'} ${isClosed && 'closed'}`">
    <div class="overflow_inner">
      <div :class="props.modalClass" class="modal">
        <button @click="closedModalHanlder" class="button">
          <inlineSvg :src="cross" />
        </button>
        <div class="body">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.overflow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  z-index: -1;

  .overflow_inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal {
    position: relative;
    margin: 10px;
    width: 100%;
    max-height: 700px;
    background-color: rgba(#6b6b6b, 0.5);
    backdrop-filter: blur(5px);
    padding: 20px 30px;
    transform: scale(0.1);
    transition: 0.2s;
    overflow: auto;

    .body{
        margin-top: 30px;
        justify-content: start;
    }

    .button {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: transparent;
      border: none;
    }
  }
}

.open {
  z-index: 100;
  opacity: 1;

  .modal {
    transform: scale(1);
  }
}

.closed {
  .modal {
    transform: scale(0.1);
  }
}
</style>
