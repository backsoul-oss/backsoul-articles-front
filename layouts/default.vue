<template>
<div class="h-screen bg-background-primary" :class="theme">
  <client-only>
  <Header />
  <div class="h-screen">
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
  }
  }
}
</script>
