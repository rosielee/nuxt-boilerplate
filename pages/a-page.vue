<template>
  <div>
    <h1>Example Page</h1>
    <slider-container>
      <div class="swiper-slide">Slide a</div>
      <div class="swiper-slide">Slide b</div>
      <div class="swiper-slide">Slide 3</div>
    </slider-container>

    <h2 id="gsaptest">fdkghfaksjhkraejghkejragh</h2>
    <section id="newsletter-mc-form">
      <mc-newsletter />
    </section>
    <general-image />
  </div>
</template>

<script>
  import { createSEOMeta } from '~/utils/seo.js'
  import { gsap } from 'gsap'
  import { SplitText } from 'gsap/SplitText'
  // * greensock.com/docs/v3/Installation?checked=core,scrollTrigger,splitText#ZIP

  // if (process.client) {
  https: gsap.registerPlugin(SplitText)
  // }
  export default {
    mounted() {
      setTimeout(() => {
        gsap.fromTo('#gsaptest', { opacity: 0 }, { opacity: 1, duration: 1 })
      }, 1000)
    },
    head() {
      const title = 'get title from data source'
      return {
        title,
        meta: createSEOMeta({
          title: 'a page tile',
          description: 'a page description',
          image: 'an image url',
          url: 'the slug of the page',
        }),
      }
    },
  }
</script>

<style lang="scss" scoped>
  #newsletter-mc-form {
    width: 100%;
    position: relative;
    height: 400px;
  }
  // @include breakpoint(mobile) {}
</style>