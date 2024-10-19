<script setup>
import { v4 as uuid } from "uuid";
import { ref, inject } from "vue";

const props = defineProps({
  title: {
    type: String,
  },
});

const players = inject("players");

const emits = defineEmits(["close-modal"]);

const inputText = ref("");

const addNewPlayer = () => {
  players.value.push({
    name: inputText.value,
    cash: 15,
    id: uuid(),
  });
  emits("close-modal");
  inputText.value = "";
};
</script>

<template>
  <div class="bg-white p-5 rounded">
    <h3 class="mb-5 text-center text-lg uppercase font-bold" v-if="title">
      {{ title }}
    </h3>

    <form class="flex flex-col" @submit.prevent.stop="addNewPlayer" action="#">
      <input
        v-model="inputText"
        class="mb-3 border px-5 py-2"
        type="text"
        placeholder="Player name"
        required
      />
      <button class="bg-green-300 rounded text-white py-2">Add</button>
    </form>
  </div>
</template>
