<template>
  <div class="container-general h-full">
    <div class="text-center mt-10 mb-10">
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
          <div
            class="
              flex
              justify-center
              items-center
              flex-col
              rounded-lg
              container-card
              mt-10
              bg-white
            "
            v-for="article in articles"
            :key="article._slug"
            @click="redirectArticle(article.Slug)"
          >
            <img
              :src="`https://res.cloudinary.com/backsoul/image/upload/v1/${article.image}`"
              alt=""
              srcset=""
              style="height: 15rem; width: 100%; object-fit: cover"
              class="rounded-t-lg"
            />
            <div class="flexflex-col w-full">
              <div class="flex flex-col items-start w-full m-3">
                <p style="font-weight: 300; color: #d9d9d9" class="mb-2">
                  {{ convertDate(article.createdAt) }}
                </p>
                <h1 class="text-lg font-medium" style="text-align: initial;font-size: 1.1rem;line-height: 20px;"> {{ article.title }}</h1>
                <p class="font-normal text-left">
                  {{ article.textDescription }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import {ARTICLES} from '../graphql/query'
export default {
  data() {
    return {
      articles: [],
      loading: true,
      created_at: null,
    }
  },
  methods: {
    convertDate(date){
      return dayjs(date).format('DD MMMM YYYY')
    },
    async getArticles() {
      this.$apollo.query({
        query:ARTICLES}).then(({data}) => {
          console.log('====================================');
          console.log(data.allArticles);
          console.log('====================================');
          this.articles = data.allArticles
        })
    },
    redirectArticle(slug) {
      this.$router.push(`/${slug}`)
    },
  },
  mounted() {
    this.getArticles()
  },
}
</script>
<style lang="scss">
.container-card {
  transition: 0.5s all;
  > img {
    transition: transform .5s, filter .5s ease-in-out;
    filter: blur(1px);
    filter: grayscale(100%);
  }

}
.container-card:hover {
  transform: scale(1.05);
  transition: 0.5s all;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  > img {
    filter: blur(0);
    transform: scale(1);
  }
}
.container-general {
  background: #f3f3f3;
  margin-top: -2.5rem;
}
html {
  overflow-x: hidden;
}
</style>
