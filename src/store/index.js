import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: []
  },
  getters: {},
  mutations: {
    initState(state) {
      state.tasks = JSON.parse(localStorage.getItem("tasks"))
    },

    addTask(state, payload) {
      state.tasks.push(payload)
    },

    changeTask(state, payload) {
      state.tasks.map( el => el.id === payload.id ? el.text = payload.text : '')
    },

    deleteTask(state, payload) {
      console.log(payload)
      state.tasks = state.tasks.filter( el => el.id !== payload)
    }
  },
  actions: {},
  
});
