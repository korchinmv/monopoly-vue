<script setup>
import { defineProps, computed, inject } from "vue";
import { formatterNum } from "../utils/formatterNum";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const playersList = inject("players");
const { addMoney, writeOffMoney } = inject("moneyOperations");

const currentPlayer = computed(() => {
  return playersList.value.find((player) => player.id === props.id);
});
</script>

<template>
  <div class="bg-white p-6 rounded text-center">
    <h1 class="text-3xl mb-5">Player name: {{ currentPlayer.name }}</h1>
    <span class="text-xl"
      >Total money: {{ formatterNum(currentPlayer.cash) }}</span
    >

    <div class="flex justify-center gap-5 mt-5">
      <button
        class="bg-green-400 py-3 px-5 hover:bg-green-600 transition text-white rounded"
      >
        Add Money
      </button>
      <button
        class="bg-red-400 py-3 px-5 hover:bg-red-600 transition text-white rounded"
      >
        Write Off Money
      </button>
    </div>
  </div>
</template>
