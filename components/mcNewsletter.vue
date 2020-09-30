<template>
  <section class="newsletter">
    <mailchimp-subscribe
      url="https://purehairsherborne.us16.list-manage.com/subscribe/post-json"
      user-id="bf3efe90016bb9625a276a625"
      list-id="05a426e48e"
      @error="onError"
      @success="onSuccess"
    >
      <template v-slot="{ subscribe, setEmail, error, success, loading }">
        <div class="newsletter__main-form newsletter_section">
          <h2>Get the latest offers & updates</h2>
          <h3>Subscribe to our Newsletter below.</h3>
          <form @submit.prevent="subscribe">
            <input
              type="email"
              placeholder="Enter your email"
              @input="setEmail($event.target.value)"
            />
            <button type="submit">Subscribe</button>
            <div v-if="success" class="newsletter__success newsletter_section">
              Yay!
            </div>
            <div v-if="loading" class="newsletter__loading newsletter_section">
              Loading…
            </div>
          </form>
          <em v-show="error" v-html="error"></em>
        </div>
      </template>
    </mailchimp-subscribe>
  </section>
</template>

<script>
  import MailchimpSubscribe from 'vue-mailchimp-subscribe'
  export default {
    components: {
      MailchimpSubscribe,
    },
    data() {
      return {
        userEmail: null,
        error: false,
        errorMsg: null,
        status: 'inactive', // inactive, requested, success, error
      }
    },
    methods: {
      onError(err) {
        // handle error
        console.log('err', err)
      },
      onSuccess() {
        console.log('Success!!')
        // handle success
      },
    },
  }
</script>

<style lang="scss" scoped>
  section {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .newsletter {
    overflow: hidden;
    &_section {
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 40px;
      padding-right: 80px;
      top: 0;
      left: 0;
    }
    &__loading {
      z-index: 2;
      text-align: center;
      background: rgba(white, 0.5);
      backdrop-filter: blur(2px);
    }
    &__success {
      z-index: 2;
      text-align: center;
      background: rgba(white, 0.5);
      backdrop-filter: blur(2px);
    }
    &__main-form {
      z-index: 1;
      @include breakpoint(mobile) {
        padding: 30px;
      }
      h2 {
        font-family: 'Quicksand', sans-serif;
        font-weight: 700;
        font-size: 4vw;
        line-height: 90%;
        margin-bottom: 20px;
        color: primary;
        @include breakpoint(mobile) {
          font-size: 8vw;
        }
      }
      h3 {
        font-family: 'EB Garamond', serif;
        font-weight: 400;
        font-size: 1.6vw;
        line-height: 110%;
        margin-bottom: 20px;
        color: grey;
        @include breakpoint(mobile) {
          font-size: 6vw;
        }
      }
    }
  }
  form {
    width: 100%;
    input,
    button {
      width: 100%;
      border-radius: 10px;
      box-sizing: border-box;
      min-height: 40px;
      margin-bottom: 10px;
      text-align: center;
      padding: 15px 10px;
    }
    input {
      background: rgba(lightgrey, 0.2);
      border: 1px solid lightgrey;
      font-size: 20px;
      color: grey;
    }
    button {
      background: black;
      color: white;
      text-transform: uppercase;
      letter-spacing: 2px;
      border: none;
      cursor: pointer;
      &:hover,
      &:active {
        background: rgba(black, 0.8);
      }
    }
  }
  em {
    color: red;
  }
</style>