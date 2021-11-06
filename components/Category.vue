<template>
<div class="flex mr-2 justify-center items-center  cursor-pointer" @click="$router.push(`/category/${category.id}`)">
  <div class="bg-background-tertiary px-5 h-full flex items-center">
    <h1 class="text-primary">{{category.name}}</h1>
  </div>
  <div class="arrow-right"></div>
</div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.arrow-right {
  width: 0px;
    height: 0px;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    border-left: 1rem solid var(--bg-background-tertiary);
}
</style>
