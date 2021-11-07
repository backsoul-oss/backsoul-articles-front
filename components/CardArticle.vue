<template>
  <div @click="redirectArticle(article.Slug)">
    <div
      class="
        flex
        justify-center
        items-center
        flex-col
        rounded-lg
        container-card
        mt-10
        bg-background-tertiary
        cursor-pointer
      "

    >
      <img
        :src="`https://res.cloudinary.com/backsoul/image/upload/v1/${article.image}`"
        alt=""
        srcset=""
        style="height: 15rem; width: 100%; object-fit: cover"
        class="rounded-t-lg"
      />
      <div class="flexflex-col w-full">
        <div class="flex flex-col items-start w-full m-3 text-tertiary">
          <p style="font-weight: 300;" class="mb-2">
            {{ convertDate(article.createdAt) }}
          </p>
          <h1
            class="text-lg font-medium text-primary"
            style="text-align: initial; font-size: 1.1rem; line-height: 20px"
          >
            {{ article.title }}
          </h1>
          <p class="font-normal text-left text-primary">
            {{ article.textDescription }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import { ARTICLES } from '~/graphql/query'
export default {
   props:{
      article: {
         type: Object,
         required: true
   }},
  methods: {
    redirectArticle(slug) {
      this.$router.push(`/${slug}`)
    },
    convertDate(date) {
      return dayjs(date).format('DD MMMM YYYY')
    },
    async getArticles() {
      this.$apollo
        .query({
          query: ARTICLES,
        })
        .then(({ data }) => {
          this.articles = data.allArticles
        })
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
    transition: transform 0.5s, filter 0.5s ease-in-out;
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
  margin-top: -2.5rem;
}
html {
  overflow-x: hidden;
}
</style>
