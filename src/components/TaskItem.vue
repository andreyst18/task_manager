<template>
  <div class="task-item">
    <textarea
      class="task-item__input"
      v-model="currentText"
      @input="$store.commit('changeTask', { id, text: currentText })"
    >
    </textarea>
    <button @click="$store.commit('deleteTask', id)" class="task-item__del">
      x
    </button>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
    },
    text: {
      type: String,
    },
  },

  data() {
    return {
      currentText: "",
    };
  },

  mounted() {
    this.currentText = this.text;
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/reset.css";
@import "../assets/style.css";

.task-item {
  position: relative;

  &__input {
    height: 70px;
    width: 150px;
    padding: 10px;
  }

  &__del {
    position: absolute;
    top: 0;
    font-weight: 700;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
}
</style>
