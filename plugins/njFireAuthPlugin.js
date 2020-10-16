export default (context, inject) => {

  // ** On state change
  context.$fireAuth.onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      // set user to signed in true
      context.$storage.setUniversal('userSignedIn', true)
      // set user vars
      var displayName = user.displayName
      var email = user.email
      var emailVerified = user.emailVerified
      var photoURL = user.photoURL
      var uid = user.uid
      // update user in store
      context.store.dispatch('setUserInfo', { uid, email, emailVerified, userActive: true, photoURL, displayName })
    } else {
      // set user to signed in true
      context.$storage.setUniversal('userSignedIn', false)
      // update user in store
      context.store.dispatch('setUserInfo', { uid: null, email: null, emailVerified: null, userActive: false, photoURL: null, displayName: null })
    }
  })
  // ** SIGN IN FUCTION
  const signIn = () => {
    let provider = new context.$fireAuthObj.GoogleAuthProvider()
    context.$fireAuth
      .signInWithRedirect(provider)
      .then(function (result) {
        var token = result.credential.accessToken
        var user = result.user
        context.$storage.setUniversal('userSignedIn', true)
      })
      .catch(function (error) {
        console.error(error);
      })
  }
  // ** SIGN OUT FUCTION
  const signOut = () => {
    context.$fireAuth
      .signOut()
      .then(function () {
        context.$storage.setUniversal('userSignedIn', false)
      })
      .catch(function (error) {
        console.error(error)
      })
  }
  // ** Inject sign in / out function
  inject('fireSignIn', signIn)
  inject('fireSignOut', signOut)
  context.$fireSignIn = signIn
  context.$fireSignOut = signOut

}