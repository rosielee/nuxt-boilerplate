<template>
  <picture
    class="general-img"
    :style="{ paddingBottom: padding + '%', borderRadius: borderRadius }"
  >
    <source :srcset="imgPaths.img480" media="(max-width: 480px)" />
    <source :srcset="imgPaths.img600" media="(max-width: 600px)" />
    <source :srcset="imgPaths.img800" media="(max-width: 800px)" />
    <source :srcset="imgPaths.img960" media="(max-width: 960px)" />
    <source :srcset="imgPaths.img1200" media="(max-width: 1200px)" />
    <source :srcset="imgPaths.img1400" media="(max-width: 1400px)" />
    <source :srcset="imgPaths.img1600" media="(max-width: 1600px)" />
    <source :srcset="imgPaths.img1800" media="(max-width: 1800px)" />
    <source :srcset="imgPaths.img2000" media="(min-width: 1801px)" />
    <transition
      @before-enter="set"
      @enter="enter"
      @leave="set"
      @leave-cancelled="set"
      :css="false"
    >
      <img v-if="imgIn" :src="imgPaths.img1400" :alt="imgAlt" />
    </transition>
  </picture>
</template>

<script>
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)
  }
  // import VueTypes from 'vue-types'
  import { number, string, objectOf, array, bool } from 'vue-types'
  export default {
    props: {
      imgSide: string().def('right'),
      imgRatio: array()
        .validate(
          (arr) =>
            arr.length === 2 &&
            arr.every((num) => num > 0 && typeof num === 'number'),
          'error msg?'
        )
        .def([16, 9]),
      imgAlt: string().def('A image alt text'),
      imgPaths: objectOf(String).def(() => ({
        img480: 'https://place-hold.it/480x480.jpeg&text=480',
        img600: 'https://place-hold.it/600x600.jpeg&text=600',
        img800: 'https://place-hold.it/800x800.jpeg&text=800',
        img960: 'https://place-hold.it/960x960.jpeg&text=960',
        img1200: 'https://place-hold.it/1200x1200.jpeg&text=1200',
        img1400: 'https://place-hold.it/1400x1400.jpeg&text=1400',
        img1600: 'https://place-hold.it/1600x1600.jpeg&text=1600',
        img1800: 'https://place-hold.it/1800x1800.jpeg&text=1800',
        img2000: 'https://place-hold.it/2000x2000.jpeg&text=2000',
      })),
    },
    data() {
      return {
        imgIn: false,
      }
    },
    computed: {
      padding() {
        return (Number(this.imgRatio[1]) / Number(this.imgRatio[0])) * 100
      },
      borderRadius() {
        const num1 = Number(this.imgRatio[0]),
          num2 = Number(this.imgRatio[1]),
          borderPercentage = 20
        if (num1 === num2) {
          return borderPercentage + '%'
        } else {
          const min = Math.min(...this.imgRatio)
          const max = Math.max(...this.imgRatio)
          const diff = min / max
          const final =
            num1 > num2
              ? `${diff * borderPercentage}% / ${borderPercentage}%`
              : `${borderPercentage}% / ${diff * borderPercentage}%`
          return final
        }
      },
    },
    methods: {
      inTransition() {
        gsap.from(this.$el, {
          duration: 2,
          x: this.imgSide === 'left' ? -50 : 50,
          autoAlpha: 0,
          ease: 'back.out(1)',
          scrollTrigger: {
            trigger: this.$el,
            start: 'top bottom',
            end: '+=300',
            scrub: 1,
            once: true,
          },
        })
      },
      showImg() {
        ScrollTrigger.create({
          trigger: this.$el,
          start: '-400px bottom',
          once: true,
          onEnter: ({ progress, direction, isActive }) => {
            this.imgIn = true
          },
        })
      },
      set: function (el) {
        gsap.set(el, { autoAlpha: 0 })
      },
      enter: function (el, done) {
        gsap.fromTo(
          el,
          { autoAlpha: 0 },
          {
            duration: 1,
            autoAlpha: 1,
            onComplete: () => {
              done
            },
          }
        )
      },
    },
    mounted() {
      this.inTransition()
      this.showImg()
    },
  }
</script>

<style lang="scss">
  .general-img {
    width: 100%;
    height: 0;
    position: relative;
    display: block;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: cover;
    }
  }
</style>