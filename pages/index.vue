<template>
  <main>
    <h1>Dave</h1>
    <nuxt-link to="a-page">A page</nuxt-link>
  </main>
</template>

<script>
  export default {
    mounted() {
      // * Access ENV with:
      // process.env.ENV_TEST
      // or
      // context.env.ENV_TEST
      // console.log(process.env.HOST_NAME)
    },
  }
</script>

<style lang="scss" scoped>
</style>
