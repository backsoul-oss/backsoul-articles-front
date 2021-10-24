<template>
  <div v-if="article" class="mx-4">
    <h1 class="text-lg font-medium text-center my-5">{{ article.title }}</h1>
    <img :src="`${$axios.defaults.baseURL}/${article.image}`" alt="" srcset="">
    <div class="text-lg text-center my-5">{{ article.content }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: null
    }
  },
  methods:{
    getArticle(slug){
      this.$axios.get(`/article/${slug}`)
      .then(({data} )=> {
       this.article = data.article;
      })
    }
  },
  mounted(){
    this.getArticle(this.$route.params.id)
  }
}
</script>
