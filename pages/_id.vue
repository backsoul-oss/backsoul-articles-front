<template>
  <div v-if="article" class="mx-4 flex justify-center mb-20">
    <div class="flex justify-center flex-col w-full 2xl:w-2/3">
    <img :src="`${$axios.defaults.baseURL}/${article.image}`" alt="" srcset="" style="object-fit: cover;" class="h-60 2xl:h-96">
    <h1 class="text-lg font-medium text-center my-5" style="text-align: start;font-size: 3rem;color: #404040;font-family: fangsong;">{{ article.title }}</h1>
    <div v-html="markdownToHtml" class="content-html"></div>
    </div>
  </div>
</template>

<script>
import marked from 'marked';
export default {
  data() {
    return {
      article: null,
    }
  },
  computed: {
   markdownToHtml(){
     return marked(this.article.content);
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
<style lang="scss">
.content-html{
      font-size: 1.2rem;
    font-family: inherit;
    font-weight: 400;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    > h2{
      font-size: 1.5rem;
      font-weight: 400;
      font-family: inherit;
      color: #606060;

    }
    > p{
      font-size: 1.2rem;
      font-weight: 400;
      font-family: inherit;
      text-align: start;
    }
    > blockquote{
      width: 100%;
      height: auto;
       margin: 1rem 0;
      > p {
        > img{
      width: 100%;
                    height: auto;
                    object-fit: cover;
                     height: 10rem;
        }
        @media screen and (min-width: 1040px){
              > img {
              height: 35rem;
            }
        }
      }
    }
}
html{
  background-color: white;
}
</style>
