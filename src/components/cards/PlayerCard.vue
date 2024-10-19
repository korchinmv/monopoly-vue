<script setup>
import { defineProps, defineEmits } from "vue";
import { formatterNum } from "../../utils/formatterNum";

const props = defineProps({
  name: { type: String, required: true },
  cash: {
    type: Number,
    required: true,
  },
  id: { type: String, required: true },
});

const emits = defineEmits(["player-delete"]);


</script>

<template>
  <article class="bg-white p-6 rounded flex flex-col text-center w-[250px]">
    <span class="font-bold text-xl mb-5">Name: {{ name }}</span>
    <span class="font-bold text-xl mb-5">Cash: {{ formatterNum(cash) }}</span>
    <RouterLink
      class="text-sm bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
      :to="`/player-details/${props.id}`"
    >
      Details
    </RouterLink>
    <button
      @click="emits('player-delete', id)"
      class="text-sm bg-red-500 text-white p-2 mt-2 rounded hover:bg-red-600 transition"
    >
      Delete
    </button>
  </article>
</template>
