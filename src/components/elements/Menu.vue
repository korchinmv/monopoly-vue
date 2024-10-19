<script setup>
import { inject } from 'vue';

const {openPlayersModal, openTransfersModal, openHistoryModal} = inject("modal")

</script>

<template>
  <ul class="flex gap-3 justify-center mb-7">
    <li><button @click="openPlayersModal" class="border rounded px-3 py-1 hover:bg-purple-200 transition">Players</button></li>
    <li><button @click="openTransfersModal" class="border rounded px-3 py-1 hover:bg-purple-200 transition">Transfers</button></li>
    <li><button @click="openHistoryModal" class="border rounded px-3 py-1 hover:bg-purple-200 transition">History</button></li>
  </ul>
</template>