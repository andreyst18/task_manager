<template>
  <div class="task-list">
    <button 
      @click="$router.push('/')"
      class="task-list__btn"
    > 
    На главную
    </button>
    <div>
      <input 
        type="text" placeholder="Введите текст задачи"
        v-model="currentTask"
        class="task-list__input"
      />
      <button 
        @click="createTask"
        class="task-list__btn task-list__btn--create"
      >Создать задачу</button>
    </div>
    <div>
      <TaskItem
        v-for="item in tasks"
        :text="item.text"
        :key="item.id"
        :id="item.id"
        class="task-list__item"
      />
    </div>
        
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue'
  export default {

    components: {
      TaskItem
    },

    data() {
      return {
        currentTask: '',
        currentID: null,
        savedTasks: []
      }
    },

    computed: {
      tasks() {
        return this.$store.state.tasks || JSON.parse(localStorage.getItem("tasks"))
      }
    },

    methods: {
      createTask() {
        this.$store.commit('addTask', {id: this.currentID, text: this.currentTask})
        localStorage.setItem('lastID', this.currentID)
        this.currentID++
        this.currentTask = ''
      }
    },

    created() {
      if (localStorage.length) {
        this.$store.commit('initState')
        this.currentID = +(localStorage.getItem('lastID')) + 1
      } else {
        this.currentID = 0
      }
    },

    updated() {
      // if (this.tasks.length) {
        const serialTasks = JSON.stringify(this.tasks)
        localStorage.setItem('tasks', serialTasks)
      // }
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/reset.css';
@import '../assets/style.css';
.task-list {
  max-width: 900px;
  margin: auto;
  padding-top: 50px;

  &__btn {
    background-color: #fff;
    border: none;
    margin-bottom: 20px;

    &:hover {
      cursor: pointer;
    }

    &--create {
      font-weight: 700;
      background-color: #94e7d9;
      padding: 7px 15px;
      border-radius: 10px;
      margin-left: 20px;

      &:hover {
        color: #fff;
      }
    }
  }

  &__input {
    height: 30px;
    width: 200px;
    background-color: #f5ebeb;
    border: none;
    outline: none;
    padding-left: 10px;

  }

  &__item {
    margin-bottom: 10px;
  }
}

</style>