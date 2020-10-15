export const state = () => ({
  user: {
    userActive: false,
    uid: null,
    email: null,
    emailVerified: null,
    photoURL: null
  }
})

export const mutations = {
}

export const actions = {
  // async nuxtServerInit({ dispatch }) {
  //   // await dispatch('core/load')
  // },
  signIn(context, fire) {
    console.log(fire);
    let provider = new fire.$fireAuthObj.GoogleAuthProvider()
    fire.$fireAuth
      .signInWithRedirect(provider)
      .then(function (result) {
        var token = result.credential.accessToken
        var user = result.user
      })
      .catch(function (error) {
        console.error(error);
      })
  },
  signOut(context, fire) {
    fire.$fireAuth
      .signOut()
      .then(function () {
        console.log('Sign-out successful.')
      })
      .catch(function (error) {
        console.error(error)
      })
  }
}