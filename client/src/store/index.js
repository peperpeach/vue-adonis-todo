import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './authentication';
import projects from './projects';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    baseURL: '/api',
  },
  modules: {
    authentication,
    projects,
  },
  mutations: {

  },
  actions: {

  },
});
