<template>
  <div v-if="article" class="mx-4 flex justify-center mb-20">
    <div class="flex justify-center flex-col w-full 2xl:w-2/3">
      <img
        :src="`https://res.cloudinary.com/backsoul/image/upload/v1/${article.image}`"
        alt=""
        srcset=""
        v-if="article.image"
        style="object-fit: cover"
        class="h-60 2xl:h-96"
      />
      <p
        class="mt-5"
        style="color: #c3bdbd; font-weight: 400; font-family: inherit"
      >
        {{ convertDate(article.createdAt) }}
      </p>
      <h1
        class="font-medium text-center my-5 text-3xl 2xl:text-4xl text-primary"
        style="text-align: start; font-family: fangsong"
      >
        {{ article.title }}
      </h1>
      <div class="flex">
        <Category
          v-for="category of article.categories"
          :key="category.id"
          :category="category"
        />
      </div>
      <div v-html="markdownToHtml" class="content-html"></div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import { ARTICLE_BY_SLUG } from '~/graphql/query'
import dayjs from 'dayjs'
export default {
  data() {
    return {
      article: {
        title: '',
        content: '',
        image: '',
        createdAt: '',
        categories: [],
      },
    }
  },
  head() {
    return {
      title: this.article.title ? this.article.title : '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description ? this.article.description : '',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.article.title ? this.article.title : '',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://articles.backsoul.xyz/${
            this.article.Slug ? this.article.Slug : ''
          }`,
        },
      ],
    }
  },
  computed: {
    markdownToHtml() {
      return marked(this.article.content)
    },
  },
  methods: {
    convertDate(date) {
      return dayjs(date).format('DD MMMM YYYY HH:mm:ss')
    },
    getArticle(slug) {
      this.$apollo
        .query({
          query: ARTICLE_BY_SLUG,
          variables: {
            slug,
          },
        })
        .then(({ data }) => {
          this.$store.dispatch('loading', false)
          this.$store.dispatch('linkShared', data.articleBySlug.Slug)
          this.article = data.articleBySlug
        })
    },
  },
  mounted() {
    this.getArticle(this.$route.params.id)
    this.$store.dispatch('loading', true)
  },
}
</script>
<style lang="scss">
.content-html {
  font-size: 1.2rem;
  font-family: inherit;
  font-weight: 400;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--text-color-primary);
  > h2 {
    font-size: 1.5rem;
    font-weight: 400;
    font-family: inherit;
  }
  > p {
    font-size: 1.2rem;
    font-weight: 400;
    font-family: inherit;
    text-align: start;
  }

  > p {
    > img {
      width: 100vw !important;
      height: auto;
      object-fit: cover;
    }
  }
  > blockquote {
    width: 100%;
    height: auto;
    margin: 1rem 0;
    > p {
      > img {
        width: 100vw !important;
        height: auto;
        object-fit: cover;
      }
    }
  }
}
html {
  background-color: white;
}
</style>
