<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <div>
            <a href="#" class="flex items-center py-4 px-2">
              <img src="@/assets/logo.png" alt="Logo" class="h-8 w-8 mr-2" />
            </a>
          </div>
          <div class="hidden md:flex items-center space-x-1">
            <a
              href=""
              class="
                py-4
                px-2
                text-green-500
                border-b-4 border-green-500
                font-semibold
              "
              >Test</a
            >
            <a href="" class="nav_item">Form</a>
            <a href="" class="nav_item"> To do list </a>
          </div>
        </div>
        <div class="hidden md:flex items-center space-x-3">
          <a
            href=""
            class="
              py-2
              px-2
              font-medium
              text-gray-500
              rounded
              hover:bg-green-500 hover:text-white
              transition
              duration-300
            "
            >Log In</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.nav_item {
  @apply py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300;

}
</style>