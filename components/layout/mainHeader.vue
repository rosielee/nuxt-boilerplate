<template>
  <header :class="navStatus ? 'navOpen' : 'navClosed'">
    <section id="brand" @click="navStatus = false">
      <nuxt-link to="/">brand here</nuxt-link>
    </section>
    <main-nav @click="navStatus = false" id="mainNav" />
    <button
      class="hamburger hamburger--collapse"
      type="button"
      :class="navStatus ? 'open is-active' : 'closed'"
      @click="navStatus = !navStatus"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </header>
</template>

<script>
  export default {
    data: () => {
      return {
        navStatus: false,
      }
    },
    mounted() {
      // console.log(this.navStatus)
    },
    watch: {
      $route(e) {
        this.navStatus = false
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/hamburgers/hamburgers.scss';

  header {
    position: relative;
    z-index: 999999;
    top: 0;
    left: 0;
  }
  // * desktop style remove if all hamburger
  button {
    display: none;
    position: relative;
  }
  // * =======
  @include breakpoint(mobile) {
    // * mobile to styles to use as desktop  styles if all hamburger
    #brand {
      position: relative;
      z-index: 9;
      display: block;
    }
    button {
      display: block;
      z-index: 10;
    }
    #mainNav {
      position: absolute;
      width: 100%;
      height: 100vh;
      top: 0;
      left: 0;
      background: navajowhite;
      display: none;
    }
    // nav open
    .navOpen {
      #mainNav {
        display: block;
        z-index: 5;
      }
    }
    // * =======
  }
</style>