<script setup>
const { modalIsOpen } = defineProps({
  modalIsOpen: {
    type: Boolean,
    required: true,
  },
});

const emits = defineEmits(["close-modal"]);
</script>

<template>
  <div
    class="fixed w-full h-full top-0 left-0 bg-black bg-opacity-30 flex justify-center items-center transition"
    :class="{ hidden: !modalIsOpen }"
  >
    <button
      @click="emits('close-modal')"
      class="absolute top-6 right-6 bg-white w-[50px] h-[50px] rounded-full hover:bg-purple-200 transition"
    >
      X
    </button>
    <slot></slot>
  </div>
</template>
