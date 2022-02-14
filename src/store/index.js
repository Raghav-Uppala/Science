import { createStore } from "vuex";

export default createStore({
  state: {
    select: '',
  },
  mutations: {
    setSelect(state, select) {
      state.select = select;
    }
  },
  actions: {},
  modules: {},
  getters: {
    select: state => state.select,
  },
});
