<template>
  <div class="mt-12 bg-white shadow-md rounded p-4">
    <h1 class="text-2xl">Formani to'ldiring</h1>
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="sendForm" class="mt-6 pb-16">
        <div class="grid gap-x-10 gap-y-8 grid-cols-3">
          <ValidationProvider
            class="form-item flex flex-col"
            rules="onlyLetter|capitalize|required"
            v-slot="{ errors }"
          >
            <label class="mb-2 text-lg" for="name"> Name : </label>
            <input
              v-model="formData.name"
              class="form-input"
              type="text"
              id="name"
              placeholder="Your Name"
            />
            <span
              v-for="(error, i) in errors"
              :key="i"
              class="text-red-500 font-bold"
              >{{ error }}</span
            >
          </ValidationProvider>
          <ValidationProvider
            class="form-item flex flex-col"
            rules="required|phone"
            v-slot="{ errors }"
          >
            <label class="mb-2 text-lg" for="phone"> Phone : </label>
            <input
              v-model="formData.phone"
              class="form-input"
              type="phone"
              id="phone"
              v-mask="'+### ## ### ## ##'"
              placeholder="+998 90 000 00 00"
            />
            <span
              v-for="(error, i) in errors"
              :key="i"
              class="text-red-500 font-bold"
              >{{ error }}</span
            >
          </ValidationProvider>
          <ValidationProvider
            class="form-item flex flex-col"
            rules="passport|required"
            v-slot="{ errors }"
          >
            <label class="mb-2 text-lg" for="passport">
              Passport Numer :
            </label>
            <input
              v-model="formData.passport_number"
              v-mask="'AA #######'"
              class="form-input"
              type="text"
              id="passport"
              placeholder="AA 0000000"
            />
            <span
              v-for="(error, i) in errors"
              :key="i"
              class="text-red-500 font-bold"
              >{{ error }}</span
            >
          </ValidationProvider>
          <ValidationProvider
            class="form-item flex flex-col"
            rules="pinfl|required"
            v-slot="{ errors }"
          >
            <label class="mb-2 text-lg" for="pinfl"> PINFL Numer : </label>
            <input
              v-model="formData.pinfl"
              v-mask="'##############'"
              class="form-input"
              type="number"
              id="pinfl"
              placeholder="PINFL"
            />
            <span
              v-for="(error, i) in errors"
              :key="i"
              class="text-red-500 font-bold"
              >{{ error }}</span
            >
          </ValidationProvider>
          <ValidationProvider
            class="form-item flex flex-col"
            rules="birthday|required"
            v-slot="{ errors }"
          >
            <label class="mb-2 text-lg" for="birthday">
              Tug'ilgan kuningiz :
            </label>
            <input
              v-model="formData.birthday"
              v-mask="'##/##/####'"
              class="form-input"
              type="text"
              id="birthday"
              placeholder="DD/MM/YYYY"
            />
            <span
              v-for="(error, i) in errors"
              :key="i"
              class="text-red-500 font-bold"
              >{{ error }}</span
            >
          </ValidationProvider>
        </div>
        <div class="mt-5">
          <button
            type="submit"
            :disabled="invalid"
            class="bg-blue-500 text-white px-3 py-2 rounded text-lg"
            :class="{ 'opacity-50': invalid }"
          >
            submit
          </button>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { extend } from "vee-validate";
extend("onlyLetter", {
  validate: (value) => value.split("").every((el) => isNaN(el) || el == " "),
  message: "{_field_} faqat harflardan iborat bo'lishi kerak",
});
extend("capitalize", {
  validate: (value) => value[0] === value[0].toUpperCase(),
  message: "Ism katta harfdan boshlanishi kerak",
});

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
extend("phone", {
  validate: (value) =>
    /^[+]998[ ]9[012345789][ ][0-9]{3}[ ][0-9]{2}[ ][0-9]{2}$/.test(value),
  message: " {_field_} xato kiritilgan",
});
extend("passport", {
  validate: (value) => /^[A-Z]{2}[ ][0-9]{7}$/.test(value),
  message: " {_field_} xato kiritilgan",
});
extend("pinfl", {
  validate: (value) =>
    /^[23](0?[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])([0-9][0-9])([0-9]{7})$/.test(
      value
    ),
  message: " {_field_} xato kiritilgan",
});
extend("birthday", {
  validate: (value) =>
    /^(0?[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[0-2])[/](19[4589][0-9]|20[012][0-9]|2021)$/.test(
      value
    ),
  message: " {_field_} xato kiritilgan",
});
export default {
  data() {
    return {
      formData: {
        name: "",
        phone: "",
        passport_number: "",
        pinfl: "",
        birthday: "",
      },
    };
  },
  methods: {
    sendForm() {
      this.$toast.success("Form sent successfuly!");
    },
  },
};
</script>

<style>
.form-input {
  @apply p-1 rounded border border-black outline-none border-opacity-70 outline-none;
}
</style>