import Vuex, {Mutation, StoreOptions} from 'vuex';

export interface IMainStoreState {
  count: number;
}

const mainStore = new Vuex.Store<IMainStoreState>({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count = state.count + 1;
    },
  },
});

export default mainStore;
