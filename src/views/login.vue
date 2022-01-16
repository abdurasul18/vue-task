<template>
  <div class="mt-12 bg-white shadow-md rounded p-4">
    <h1 class="text-2xl">Login</h1>
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="login" class="w-1/2 pt-6 pb-8 mb-4 flex flex-col">
        <ValidationProvider rules="required" v-slot="{ errors }" class="mb-4">
          <label
            class="block text-grey-darker text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-grey-darker
            "
            id="username"
            type="text"
            placeholder="Username"
            v-model="formData.username"
          />
           <p
            class="text-red-700 text-xs italic"
            v-for="(error, i) in errors"
            :key="i"
          >
            {{ error }}
          </p>
        </ValidationProvider>
        <ValidationProvider rules="required" v-slot="{ errors }" class="mb-6">
          <label
            class="block text-grey-darker text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="
              shadow
              appearance-none
              border border-red
              rounded
              w-full
              py-2
              px-3
              text-grey-darker
              mb-3
            "
            id="password"
            type="password"
            placeholder="******"
            v-model="formData.password"
          />
          <p
            class="text-red-700 text-xs italic"
            v-for="(error, i) in errors"
            :key="i"
          >
            {{ error }}
          </p>
        </ValidationProvider>
        <div class="flex items-center justify-between">
          <button
            class="
              bg-blue-600
              hover:bg-blue-dark
              text-white
              font-bold
              py-2
              px-4
              rounded
            "
            type="submit"
            :class="{ 'opacity-50 cursor-default': invalid }"
            :disabled="invalid"
          >
            Sign In
          </button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { extend } from "vee-validate";
extend("required", {
  validate(value) {
    return {
      required: true,
      valid: ["", null, undefined].indexOf(value) === -1,
    };
  },
  message: " {_field_} to'ldirilishi kerak  ",
  computesRequired: true,
});
export default {
  data(){
    return {
      formData : {
        username : '',
        password : ''
      }
    }
  },
  methods : {
    login(){
      this.$store.dispatch('get_user', this.formData).then(()=>{
        this.$router.push('/')
      })
    }
  }
};
</script>

<style>
</style>