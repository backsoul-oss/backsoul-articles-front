<template>
<div class="h-screen bg-background-primary" :class="theme">
  <FloatButton class="block sm:hidden"/>
  <Loading v-if="loading"/>
  <client-only>
  <Header />
  <div class="bg-background-primary">
   <Nuxt />
  </div>
   <Footer />
  </client-only>
</div>
</template>
<script>
export default {
  computed:{
    theme(){
      return this.$store.state.theme
  },
  loading(){
    return this.$store.state.loading
  }
  }
}
</script>

<style>
html,body {
  overflow-x: hidden;
  background: var(--bg-background-primary);
}
</style>
