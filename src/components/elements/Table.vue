<script setup>
import { inject, computed } from 'vue';
import { formatterNum } from '../../utils/formatterNum';

const props = defineProps({
  title: String
})

const playersList = inject("players")

const totalMoney = computed(() => {

const total = playersList.value.reduce((acc, currentPlayer) => {
  return acc + currentPlayer.cash
}, 0)

return total
})
</script>

<template>
 <h3 class="mb-5 text-center text-lg uppercase font-bold" v-if="title">
      {{ title }}
 </h3>

  <table class="table-auto border-collapse mb-5">
    <thead>
      <tr>
        <th class="border border-slate-600">Player name</th>
        <th class="border border-slate-600">Money</th>
      </tr>
    </thead>
    <tbody>
<tr v-for="player in playersList" :key="player.id">
  <td class="border border-slate-600">{{player.name}}</td>
  <td class="border border-slate-600">{{ formatterNum(player.cash)}}</td>
</tr>
    </tbody>
  </table>

  <div class="text-center">Total players: {{playersList.length}}</div>
  <div class="text-center">Total money: {{totalMoney}}</div>
</template>

<style scoped>
th, td {
  padding: 3px 12px;
}
</style>
