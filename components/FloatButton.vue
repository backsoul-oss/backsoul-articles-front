<template>
  <div>
    <client-only>
      <div class="container-shared">
        <a :href="linkShared" target="_blank">
          <vs-button icon color="facebook">
            <i class="bx bxl-facebook-square"></i>
          </vs-button>
        </a>
      </div>
      <div class="container-switch">
        <vs-switch dark @click="toggleTheme()">
          <template #circle>
            <i v-if="theme != 'theme-dark'" class="bx bxs-moon"></i>
            <i v-else class="bx bxs-sun"></i>
          </template>
        </vs-switch>
      </div>
    </client-only>
  </div>
</template>
<script>
export default {
  computed: {
    theme() {
      return this.$store.state.theme
    },
    linkShared() {
      return (
        'https://www.facebook.com/sharer/sharer.php?u=https://articles.backsoul.xyz/' +
        this.$store.state.linkShared
      )
    },
  },
  methods: {
    toggleTheme() {
      const theme = this.theme === 'theme-light' ? 'theme-dark' : 'theme-light'
      this.$store.dispatch('changeTheme', theme)
    },
  },
}
</script>
<style>
.container-switch {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1rem;
  z-index: 9999;
}
.container-shared {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.5rem;
}
</style>
