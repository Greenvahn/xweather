<template>
  <div class="modal" :class="{ isActive: tempModalData }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Input the city name</p>
        <button
          class="delete"
          aria-label="close"
          @click="closeModal()"
        ></button>
      </header>
      <section class="modal-card-body">
        <!-- Content ... -->
        <p>Search bar goes here</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    modalData: Boolean,
  },
  data() {
    return {
      tempModalData: this.modalData,
    };
  },
  methods: {
    closeModal() {
      if (this.modalData) {
        this.tempModalData = false;
      }
    },
  },
};
</script>

<style lang="scss">
.modal.isActive {
  display: flex;
  animation: scaleIn 0.3s ease-in-out;

  .modal-background {
    background-color: rgba(10, 10, 10, 0.4);
  }

  .p-title {
    font-size: 1.4em;
    margin: 0px;
    padding: 5px;
  }
  .p-subtitle {
    font-size: 1em;
    font-weight: bold;
    margin: 25px 0px 10px 0px;
  }

  .btn-wrap {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    width: 100%;
    .modal-btn {
      min-width: 60px;
      margin: 10 50%;
    }
  }

  .message-header {
    justify-content: flex-start;

    .file-icon {
      margin-right: 10px;
    }
  }
}

@keyframes scaleIn {
  0% {
    opacity: 0;
    transform: scale(1);
  }
  66% {
    opacity: 0.6;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
