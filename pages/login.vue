<template>
  <main>
    <h1>Login to access</h1>
    <button @click="login">Login</button>
    <button @click="logout">Logout</button>
  </main>
</template>

<script>
  export default {
    methods: {
      login: function () {
        this.$auth.loginWith('google').then((user) => {
          console.log(user)
        })
      },
      logout() {
        this.$auth.logout(/* .... */)
      },
    },
  }
</script>

<style lang="scss" scoped>
  main {
    width: 100%;
    height: 100vh;
    padding: 40px;
    background: navajowhite;
  }
</style>