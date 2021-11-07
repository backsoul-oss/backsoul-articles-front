<template>
  <div class="h-full" >
     <div class="text-center" >
      <div class="flex justify-center items-center w-screen flex-col">
       <h1 class="text-primary text-left text-2xl w-4/6 xl:w-3/4 2xl:w-2/4">{{ category_name }}</h1>
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
import { ARTICLES, CATEGORY_BY_ID } from '~/graphql/query'
export default {
  data(){
    return {
      articles: [],
    id: this.$route.params.id,
    category_name:""
  }
  },
  methods: {
    async getArticles() {
      await this.$apollo
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

    async getCategory(){
      await this.$apollo
        .query({
          query: CATEGORY_BY_ID,
          variables: {
            id: Number(this.id),
          },
        })
        .then(({ data }) => {
          this.category_name = data.categoryById.name
          this.$store.dispatch('linkShared', `category/${this.id}`)
        })
    }

  },
  mounted() {
    this.$store.dispatch('loading', true)
    this.getArticles()
    this.getCategory()
  },
}
</script>
