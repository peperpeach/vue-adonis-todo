// import router from '../router';
import Vue from 'vue';
import HTTP from '../http';

export default {
  namespaced: true,
  state: {
    Tasks: [],
    newTaskName: null,
  },
  actions: {
    saveTask({ commit }, task) {
      return HTTP().patch(`/v1/tasks/${task.id}`, task)
        .then(() => {
          commit('unsetEditMode', task);
        });
    },
    deleteTask({ commit }, task) {
      return HTTP().delete(`/v1/tasks/${task.id}`)
        .then(() => {
          commit('removeTask', task);
        });
    },
    fetchTasksForProject({ commit }, project) {
      return HTTP().get(`/v1/projects/${project.id}/tasks`)
        .then(({ data }) => {
          commit('setTasks', data);
        });
    },
    createTask({ commit, state, rootState }) {
      return HTTP().post(`/v1/projects/${rootState.projects.currentProject.id}/tasks`, {
        description: state.newTaskName,
      }).then(({ data }) => {
        commit('appendTask', data);
        commit('setNewTaskName', null);
      });
    },
  },
  getters: {
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    setNewTaskName(state, newTaskName) {
      state.newTaskName = newTaskName;
    },
    appendTask(state, task) {
      state.tasks.push(task);
    },
    setTaskDescription(state, { task, description }) {
      task.description = description;
    },
    setEditMode(state, task) {
      Vue.set(task, 'isEditMode', true);
    },
    unsetEditMode(state, task) {
      Vue.set(task, 'isEditMode', false);
    },
    removeTask(state, task) {
      state.tasks.splice(state.tasks.indexOf(task), 1);
    },
    toggleCompleted(state, task) {
      task.completed = !task.completed;
    },
  },
};
