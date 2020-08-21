<template>
  <main>
    <h1>Dave</h1>
    <slider-container>
      <div class="swiper-slide">Slide a</div>
      <div class="swiper-slide">Slide b</div>
      <div class="swiper-slide">Slide 3</div>
    </slider-container>
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
