/* eslint-ignore */
export const state = () => ({
  width: 50,
  height: 10,
});

const type = {
  SET_SCREEN_WIDTH: 'SET_SCREEN_WIDTH',
  SET_SCREEN_HEIGHT: 'SET_SCREEN_HEIGHT',
};

export const mutation = {
  [type.SET_SCREEN_WIDTH](state, screenWidth) {
    state.width = screenWidth;
  },
  [type.SET_SCREEN_HEIGHT](state, height) {
    state.height = height;
  },

};

export const getters = {
  screenHeight: (state) => {
    return state.height;
  },
  screenWidth: (state) => {
    return state.width;
  },
};

export const actions = {
  setScreenWidth({ commit, }, width) {
    commit(type.SET_SCREEN_WIDTH, width);
  },
  setScreenHeight({ commit, }, height) {
    commit(type.SET_SCREEN_HEIGHT, height);
  },
};
