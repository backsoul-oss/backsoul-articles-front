<template>
  <div class="h-full">
    <div class="text-center">
      <div class="flex justify-center w-screen">
        <div
          class="
            grid grid-cols-1
            gap-5
            mx-5
            w-full
            xl:w-3/4
            2xl:w-2/4
            xl:grid-cols-2
            2xl:grid-cols-3
          "
        >
          <CardArticle
            v-for="article in articles"
            :key="article._slug"
            :article="article"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { ARTICLES } from '~/graphql/query'
export default {
  data() {
    return {
      articles: [],
      loading: true,
    }
  },
  methods: {
    async getArticles() {
      this.$apollo
        .query({
          query: ARTICLES,
        })
        .then(({ data }) => {
          this.articles = data.allArticles
          this.$store.dispatch('loading', false)
        })
    },

  },
  mounted() {
    this.$store.dispatch('linkShared', '')
    this.$store.dispatch('loading', true)
    this.getArticles()
  },
}
</script>
<style lang="scss">

</style>
