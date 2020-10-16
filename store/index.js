export const state = () => ({
  navState: false,
  user: {
    userActive: false,
    uid: null,
    email: null,
    emailVerified: null,
    photoURL: null,
    displayName: null
  }
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
  }
}

export const actions = {
  async nuxtServerInit(vuexContext, context) {
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
  }
}
