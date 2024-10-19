<script setup>
import { provide, ref } from "vue";
import Header from "./components/elements/Header.vue";
import Table from "./components/elements/Table.vue";
import Modal from "./components/ui/Modal.vue";
import AddForm from "./components/forms/AddForm.vue";

const players = ref([{name: "Jhon", cash: 15000000, id:"1"}, {name: "Max", cash: 1500, id:"2"}, {name: "Zhan", cash: 35500, id:"3"}]);

const modalAddPlayerIsOpen = ref(false);
const modalPlayersIsOpen = ref(false);
const modalTransfersIsOpen = ref(false);
const modalHistoryIsOpen = ref(false);

const openAddPlayerModal = () => {
  modalAddPlayerIsOpen.value = true;
};

const openPlayersModal = () => {
  modalPlayersIsOpen.value = true;
};

const openTransfersModal = () => {
  modalTransfersIsOpen.value = true;
};

const openHistoryModal = () => {
  modalHistoryIsOpen.value = true;
};

const closeAllModals = () => {
  modalAddPlayerIsOpen.value = false;
  modalPlayersIsOpen.value = false;
  modalTransfersIsOpen.value = false;
  modalHistoryIsOpen.value = false;
};

provide("players", players);

provide("modal", {
  openAddPlayerModal,
  openPlayersModal,
  openTransfersModal,
  openHistoryModal,
  closeAllModals,
});

</script>

<template>
  <Header />

  <div class="app bg-green-100 h-screen relative">
    <div class="container mx-auto h-screen flex flex-col py-8 px-8">
      <router-view></router-view>
    </div>

    <Modal :modalIsOpen="modalAddPlayerIsOpen" @close-modal="closeAllModals">
      <AddForm @close-modal="closeAllModals" title="Add new player" />
    </Modal>

    <Modal :modalIsOpen="modalPlayersIsOpen" @close-modal="closeAllModals">
      <Table title="Players info"/>
    </Modal>

    <Modal :modalIsOpen="modalTransfersIsOpen" @close-modal="closeAllModals">
      <h2>TRANSFERS MODAL</h2>
    </Modal>

    <Modal :modalIsOpen="modalHistoryIsOpen" @close-modal="closeAllModals">
      <h2>HISTORY MODAL</h2>
    </Modal>
  </div>
</template>
