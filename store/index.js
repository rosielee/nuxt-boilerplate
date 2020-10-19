export const state = () => ({
  navState: false,
  user: {
    userActive: false,
    uid: null,
    email: null,
    emailVerified: null,
    photoURL: null,
    displayName: null,
  },
  userLoading: null
})

export const mutations = {
  toggleNav(state) {
    state.navState = !state.navState
  },
  toggleNavPayload(state, payload) {
    state.navState = payload
  },
  setUserInfo(state, payload) {
    state.user = payload
  },
  setUserLoading(state, payload) {
    state.userLoading = payload
  }
}

export const actions = {
  async nuxtServerInit(vuexContext, context) {
    vuexContext.dispatch('setUserLoading', true)
    // console.log(context.$storage.getUniversal('userSignedIn'));
  },
  setNav({ commit }) {
    commit('toggleNav')
  },
  setNavPayload({ commit }, payload) {
    commit('toggleNavPayload', payload)
  },
  setUserInfo({ commit }, payload) {
    commit('setUserInfo', payload)
  },
  setUserLoading({ commit }, payload) {
    commit('setUserLoading', payload)
  }
}
