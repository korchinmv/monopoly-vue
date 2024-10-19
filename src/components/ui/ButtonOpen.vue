<script setup>
import { inject } from "vue";

const { openAddPlayerModal } = inject("modal");
</script>

<template>
  <button
    @click="openAddPlayerModal"
    class="w-[60px] h-[60px] flex justify-center items-center bg-purple-200 rounded-full hover:bg-purple-300 transition  font-bold self-center"
  >
    <slot></slot>
  </button>
</template>
