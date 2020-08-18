<template>
  <div></div>
</template>

<script>
  import { createSEOMeta } from '~/utils/seo.js'
  export default {
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
</style>