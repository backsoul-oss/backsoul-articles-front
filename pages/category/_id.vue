<template>
  <div class="h-full" >
     <div class="text-center" >

      <div class="flex justify-center w-screen">
        <div
          class="
            grid grid-cols-1
            gap-5
            mx-5
            w-4/6
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
import { ARTICLES } from '~/graphql/query'
export default {
  data(){
    return {
      articles: [],
    id: this.$route.params.id,
  }
  },
  methods: {
    async getArticles() {
      this.$apollo
        .query({
          query: ARTICLES,
          variables: {
            category_id: this.id,
          },
        })
        .then(({ data }) => {
          this.articles = data.allArticles
          this.$store.dispatch('loading', false)
        })
    },

  },
  mounted() {
    this.$store.dispatch('loading', true)
    this.getArticles()
  },
}
</script>
