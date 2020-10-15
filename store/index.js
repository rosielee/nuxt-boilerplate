export const state = () => ({
  navState: false
})

export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    if (!authUser) {
      state.auth.user = { uid: null, email: null, emailVerified: null, userActive: false, photoURL: null }
    } else {
      const { uid, email, emailVerified, photoURL } = authUser
      state.auth.user = { uid, email, emailVerified, userActive: true, photoURL }
    }
  },
  toggleNav(state) {
    state.navState = !state.navState
  },
  toggleNavPayload(state, payload) {
    state.navState = payload
  }
}

export const actions = {
  async nuxtServerInit(vuexContext, context) {
    console.log(context.$storage.getUniversal('userSignedIn'));
  },
  setNav({ commit }) {
    commit('toggleNav')
  },
  setNavPayload({ commit }, payload) {
    commit('toggleNavPayload', payload)
  },
  test() {
    this.$hello('store action')
  },
  onAuthStateChangedAction: (vuexContext, { authUser, claims }) => {
    vuexContext.dispatch('test')
    if (!authUser) {
      // claims = null
      // Perform logout operations
      // $storage.setUniversal('userSignedIn', false)
      console.log('push to login page');
    } else {
      console.log('ready to push to new route')
      // $storage.setUniversal('userSignedIn', true)
    }
  }
}
