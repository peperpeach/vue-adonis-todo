// import router from '../router';
import Vue from 'vue';
import HTTP from '../http';

export default {
  namespaced: true,
  state: {
    projects: [],
    newProjectName: null,
  },
  actions: {
    saveProject({ commit }, project) {
      return HTTP().patch(`/v1/projects/${project.id}`, project)
        .then(() => {
          commit('unsetEditMode', project);
        });
    },
    fetchProjects({ commit }) {
      return HTTP().get('/v1/projects')
        .then(({ data }) => {
          commit('setProjects', data);
        });
    },
    createProject({ commit, state }) {
      return HTTP().post('/v1/projects', {
        title: state.newProjectName,
      }).then(({ data }) => {
        commit('appendProject', data);
        commit('setNewProjectName', null);
      });
    },
  },
  getters: {
  },
  mutations: {
    setNewProjectName(state, name) {
      state.newProjectName = name;
    },
    appendProject(state, project) {
      state.projects.push(project);
    },
    setProjects(state, projects) {
      state.projects = projects;
    },
    setProjectTitle(state, { project, title }) {
      project.title = title;
    },
    setEditMode(state, project) {
      Vue.set(project, 'isEditMode', true);
    },
    unsetEditMode(state, project) {
      Vue.set(project, 'isEditMode', false);
    },
  },
};
