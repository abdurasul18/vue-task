<template>
  <nav class="bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-7">
          <div>
            <router-link to="/" class="flex items-center py-4 px-2">
              <img src="@/assets/logo.png" alt="Logo" class="h-8 w-8 mr-2" />
            </router-link>
          </div>
          <div class="hidden md:flex items-center space-x-1">
            <router-link to="/" href="" class="nav_item">Test</router-link>
            <router-link to="/form" class="nav_item">Form</router-link>
            <router-link to="/todo" class="nav_item"> To do list </router-link>
          </div>
        </div>
        <div class="hidden md:flex items-center space-x-3">
          <div v-if="this.$store.state.user" class="flex items-center">
            <div class="flex items-center font-bold mr-4">
              <img class="mr-2" src="@/assets/profile.svg" alt="" />
              {{ this.$store.state.user.username }}
            </div>
            <a href="javascript:void(0)"
              @click="logout"
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
              >Logout</a
            >
          </div>
          <router-link
            v-else
            to="/login"
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
            >Log In</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods : {
    logout(){
      this.$store.commit('SET_USER', '')
      localStorage.removeItem('tkn')
      this.$router.push('/login')
    }
  }
};
</script>

<style>
.nav_item {
  @apply py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300;
}
.nav_item.router-link-exact-active {
  @apply text-green-500 border-b-4 border-green-500;
}
</style>