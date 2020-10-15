<template>
  <div>
    <main-header />
    <nav>
      <button
        v-if="!$store.state.auth.user.userActive"
        @click="$store.dispatch('auth/signIn', { $fireAuth, $fireAuthObj })"
      >
        Login
      </button>
      <button v-else @click="$store.dispatch('auth/signOut', { $fireAuth })">
        logout
      </button>
    </nav>
    <Nuxt />
    <main-footer />
  </div>
</template>

<script>
  export default {
    methods: {},
    mounted() {
      console.log('STORE STATE', this.$store.state)
    },
  }
</script>

<style lang="scss" scoped>
</style>
