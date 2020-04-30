import Vue from 'vue';
import Vuex from 'vuex';
import expenses from './modules/expenses';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    expenses,
  },
});
