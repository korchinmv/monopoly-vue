<script setup>
import { provide, ref } from "vue";
import Header from "./components/elements/Header.vue";
import Modal from "./components/ui/Modal.vue";
import AddForm from "./components/forms/AddForm.vue";

const players = ref([]);

const modalAddPlayerIsOpen = ref(false);

const openAddPlayerModal = () => {
  modalAddPlayerIsOpen.value = true;
};

const closeAllModals = () => {
  modalAddPlayerIsOpen.value = false;
};

provide("players", players);

provide("modal", {
  openAddPlayerModal,
  closeAllModals,
});
</script>

<template>
  <Header />

  <div class="app bg-green-100 h-screen relative">
    <div class="container mx-auto h-screen flex flex-col py-8">
      <router-view></router-view>
    </div>

    <Modal :modalIsOpen="modalAddPlayerIsOpen" @close-modal="closeAllModals">
      <AddForm @close-modal="closeAllModals" title="Add new player" />
    </Modal>
  </div>
</template>
