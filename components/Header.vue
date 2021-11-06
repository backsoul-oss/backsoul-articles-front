<template>
<div class="sm:grid grid-cols-3 justify-start p-10 items-center block">
  <div class="sm:flex justify-start items-center hidden">
    <vs-switch dark @click="toggleTheme()">
        <template #circle>
            <i v-if="theme != 'theme-dark'" class='bx bxs-moon' ></i>
            <i v-else class='bx bxs-sun' ></i>
        </template>
      </vs-switch>
  </div>
  <div class="flex justify-center items-center">
  <h1 style="font-size: 2rem;font-weight: 600;font-family: none;" class="text-primary cursor-pointer" :class="theme"  @click="$router.push('/')">Backsoul articles</h1>
  </div>
  <div class="sm:grid grid-cols-4 gap-5 hidden justify-center">
    <div class="flex hover:bg-background-tertiary text-primary hover:text-tertiary px-5 py-4 justify-center cursor-pointer rounded-xl cursor-pointer col-start-3" @click="$router.push('/')">
    <h1>About</h1>
    </div>
  </div>
</div>
</template>
<script>
export default {
  computed: {
    theme() {
      return this.$store.state.theme
    }
  },
  methods:{
    toggleTheme(){
      const theme = this.theme === 'theme-light' ? 'theme-dark' : 'theme-light'
      this.$store.dispatch('changeTheme',theme)
    }
  }
}
</script>
