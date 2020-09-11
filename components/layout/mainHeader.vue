<template>
  <header :class="navStatus ? 'navOpen' : 'navClosed'">
    <main-nav-btn @nav-btn-pressed="navToggle()" :labelName="labelName" :buttonState="navStatus" />
    <section id="brand" @click="navToggle(false)">
      <nuxt-link to="/">brand here</nuxt-link>
    </section>
    <main-nav @click="navToggle(false)" id="mainNav">
      <socials />
    </main-nav>
  </header>
</template>

<script>
  export default {
    data: () => {
      return {
        navStatus: false,
        labelName: 'Menu',
      }
    },
    methods: {
      navToggle: function (toggle) {
        toggle === false
          ? (this.navStatus = false)
          : (this.navStatus = !this.navStatus)

        this.navStatus === false
          ? (this.labelName = 'Menu')
          : (this.labelName = 'Close')
      },
      franky: function () {
        console.log('pork and beans')
      },
    },
    mounted() {
      // console.log(this.navStatus)
    },
    watch: {
      $route(e) {
        this.navToggle(false)
      },
    },
  }
</script>

<style lang="scss" scoped>
  header {
    position: relative;
    z-index: 999999;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    background: $white;
  }
  #brand {
    position: relative;
    z-index: 9;
    display: block;
  }
  #mainNav {
    display: none;
    padding-top: $headerHeight;
  }
  .navOpen {
    #mainNav {
      display: block;
      z-index: 5;
    }
    .menu-btn {
      color: $white;
    }
  }
</style>