<script setup>
import { defineProps } from "vue";

const props = defineProps({
  text: { type: String, required: true },
});
</script>

<template>
  <h1 class="text-4xl font-bold text-center mb-8">{{ text }}</h1>
</template>
