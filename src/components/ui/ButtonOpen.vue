<script setup>
import { inject } from "vue";

const { openAddPlayerModal } = inject("modal");
</script>

<template>
  <button
    @click="openAddPlayerModal"
    class="w-[80px] h-[80px] flex justify-center items-center bg-purple-200 rounded-full hover:bg-purple-300 transition text-3xl font-bold flex items-center justify-center self-center"
  >
    <slot></slot>
  </button>
</template>
