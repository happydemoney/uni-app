/**
 * 处理登录相关逻辑
 */
// initial state
const state = () => ({
  loginStatus: false, // 登录状态
});

// getters
const getters = {
  loginStatus: (state, getters, rootState) => {
    return state.loginStatus;
  },
};

// actions
const actions = {
  // checkout ({ commit, state }, products) {
  //     const savedCartItems = [...state.items]
  //     commit('setCheckoutStatus', null)
  //     // empty cart
  //     commit('setCartItems', { items: [] })
  //     shop.buyProducts(
  //       products,
  //       () => commit('setCheckoutStatus', 'successful'),
  //       () => {
  //         commit('setCheckoutStatus', 'failed')
  //         // rollback to the cart saved before sending the request
  //         commit('setCartItems', { items: savedCartItems })
  //       }
  //     )
  //   },
};

// mutations
const mutations = {
  switchLoginStatus (state) {
    state.loginStatus = !state.loginStatus;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
