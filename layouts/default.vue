<template>
  <div>
    <main-header />
    <Nuxt />
    <main-footer />
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log('USER ', this.$auth.user)
      console.log('logged in?', this.$auth.loggedIn)
      console.log('route', this.$route)
    },
  }
</script>

<style lang="scss" scoped>
</style>
