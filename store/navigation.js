export const state = () => ({
  current: 1,
});

const type = {
  SET_PAGE: 'SET_PAGE',
};

export const mutation = {
  [type.SET_PAGE](state, page) {
    state.page = page;
  },
};

export const getters = {
  getCurrentPage() {
    return state.page;
  },
};

export const actions = {
  setCurrentPage({ commit, }, page) {
    commit(type.SET_PAGE, page);
  },
};
