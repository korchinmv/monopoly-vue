<script setup>
import { inject } from "vue";
import PlayerCard from "../components/cards/PlayerCard.vue";
import Title from "../components/elements/Title.vue";
import ButtonOpen from "../components/ui/ButtonOpen.vue";

const players = inject("players");

const deletePlayer = (id) => {
  players.value = players.value.filter((player) => player.id !== id);
};
</script>

<template>
  <Title text="Monopoly" />

  <ul
    v-if="players.length > 0"
    class="flex flex-wrap gap-x-4 justify-center mb-12"
  >
    <li class="mb-3" v-for="player in players" :key="player.id">
      <PlayerCard
        :name="player.name"
        :cash="player.cash"
        :id="player.id"
        @player-delete="deletePlayer"
      />
    </li>
  </ul>

  <p class="text-xl text-center mb-5" v-else>Please, add a new players</p>

  <ButtonOpen>+</ButtonOpen>
</template>
