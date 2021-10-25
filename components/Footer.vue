<template>
  <div class="flex justify-center items-center bg-black">
    <div class="flex flex-col justify-center items-center">
      <p class="mt-5 text-white">Backsoul developed with</p>
      <div
        class="grid grid-cols-4 my-5 items-center"
        style="justify-items: center"
      >
        <a href="https://nuxtjs.org" target="_blank">
          <svgicon
            name="nuxtjs"
            width="40"
            class="
              fill-current
              text-white
              hover:text-green-400 hover:-translate-y-2
              transform
              duration-500
            "
          >
          </svgicon>
        </a>
        <a href="https://www.djangoproject.com" target="_blank">
          <svgicon
            name="django"
            width="30"
            class="
              fill-current
              text-white
              hover:text-green-400 hover:-translate-y-2
              transform
              duration-500
            "
          >
          </svgicon>
        </a>
        <a href="https://www.heroku.com" target="_blank">
          <svgicon
            name="heroku"
            width="90"
            class="
              fill-current
              text-white
              hover:text-blue-700 hover:-translate-y-2
              transform
              duration-500
            "
          >
          </svgicon>
        </a>
        <a href="https://github.com/features/actions" target="_blank">
          <svgicon
            name="github"
            width="40"
            class="
              fill-current
              text-white
              hover:text-gray-200 hover:-translate-y-2
              transform
              duration-500
            "
          >
          </svgicon>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import '~/assets/icons'
export default {}
</script>
