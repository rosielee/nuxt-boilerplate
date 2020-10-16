<template>
  <div>
    <main-header />
    <nav>
      <button
        v-if="!$storage.getUniversal('userSignedIn')"
        @click="$fireSignIn"
      >
        Login
      </button>
      <button v-else @click="$fireSignOut">logout</button>

      <section>
        <h3>{{ $store.state.user.displayName }}</h3>
        <p>{{ $store.state.user.photoURL }}</p>
        <p>{{ $store.state.user.email }}</p>
      </section>
    </nav>
    <Nuxt />
    <main-footer />
  </div>
</template>

<script>
  export default {
    methods: {},
    mounted() {
      // console.log('STORE STATE', this.$store)
      // console.log(this)
    },
  }
</script>

<style lang="scss" scoped>
</style>
