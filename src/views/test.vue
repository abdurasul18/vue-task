<template>
  <div>
    <div class="mt-12 bg-white shadow-md rounded p-4" v-if="!finished">
      <h1 class="text-3xl">Test yechish</h1>
      <ul class="flex items-center mt-5 text-lg">
        <li v-for="(test, i) in tests" :key="i">
          <a
            @click="activeIndex = i"
            href="javascript:void(0)"
            class="test-nav"
            :class="{ active: checkActive(i), current: activeIndex == i }"
          >
            {{ i + 1 }}
          </a>
        </li>
      </ul>
      <div class="test-wrap">
        <div v-for="(test, i) in tests" :key="test.id" class="">
          <div
            class="test-item bg-white shadow-md rounded p-4 mt-8"
            v-show="activeIndex == i"
          >
            <div class="answer text-xl font-bold mb-6">
              #{{ i + 1 }} {{ test.question }}
            </div>
            <div v-if="test.type == 1 || test.type == 2">
              <label
                v-for="option in test.options"
                :key="option.id"
                class="option flex items-center text-lg mb-3 w-max"
                :for="`option${option.id}${test.id}`"
              >
                <div class="flex items-center" v-if="test.type == 1">
                  <input
                    v-model="answers[i]"
                    :value="option"
                    class=""
                    type="radio"
                    :id="`option${option.id}${test.id}`"
                  />
                  <span class="mockradio">
                    <span class="check"></span>
                  </span>
                  <div class="cursor-pointer pl-2">{{ option.title }}</div>
                </div>
                <div v-else class="flex items-center">
                  <input
                    v-model="answers[i]"
                    :value="option"
                    class=""
                    type="checkbox"
                    :id="`option${option.id}${test.id}`"
                  />
                  <span class="mockcheckbox">
                    <span class="check"></span>
                  </span>
                  <div class="cursor-pointer pl-2">{{ option.title }}</div>
                </div>
              </label>
            </div>
            <div v-else>
              <div class="answer text-xl font-bold mb-6"></div>
              <input
                class="
                  p-2
                  border border-black border-opacity-20
                  rounded
                  outline-none
                  w-64
                "
                type="text"
                v-model="answers[i]"
                placeholder="apple"
              />
            </div>
          </div>
        </div>
        <div class="">
          <button @click="calcResult" class="btn-second">yakunlash</button>
        </div>
      </div>
    </div>
    <div
      v-else
      class="
        mt-12
        bg-white
        shadow-md
        rounded
        p-4
        h-96
        flex
        items-center
        justify-center
        flex-col
      "
    >
      <h1 class="text-3xl font-bold">Your Result : {{ ball }} / {{ tests.length }}</h1>
      <div class="">
        <button
          @click="
            ball = 0;
            finished = false;
            checkType();
            activeIndex = 0;
          "
          class="btn-second"
        >
          try again
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tests: [
        {
          id: 0,
          type: 1,
          question: "Timsollarlarni tasniflash uchun ishlatiladigan tushuncha",
          options: [
            {
              id: 0,
              title: "Togri",
              isCorrect: true,
            },
            {
              id: 1,
              title: "Xato",
              isCorrect: false,
            },
            {
              id: 2,
              title: "Xato",
              isCorrect: false,
            },
            {
              id: 3,
              title: "Xato",
              isCorrect: false,
            },
          ],
        },
        {
          id: 1,
          type: 1,
          question: "Timsollarlarni tasniflash uchun ishlatiladigan tushuncha",
          options: [
            {
              id: 0,
              title: "Togri",
              isCorrect: true,
            },
            {
              id: 1,
              title: "Xato",
              isCorrect: false,
            },
            {
              id: 2,
              title: "Xato",
              isCorrect: false,
            },
            {
              id: 3,
              title: "Xato",
              isCorrect: false,
            },
          ],
        },
        {
          id: 2,
          type: 1,
          question: "Qaysi biri to'g'ri",
          options: [
            {
              id: 0,
              title: "To'gri",
              isCorrect: true,
            },
            {
              id: 1,
              title: "Xato",
              isCorrect: false,
            },
            {
              id: 2,
              title: "Xato",
              isCorrect: false,
            },
            {
              id: 3,
              title: "Xato",
              isCorrect: false,
            },
          ],
        },
        {
          id: 3,
          type: 2,
          question: "Bir nechtasi to'g'ri",
          options: [
            {
              id: 0,
              title: "To'gri",
              isCorrect: true,
            },
            {
              id: 1,
              title: "Xato",
              isCorrect: false,
            },
            {
              id: 2,
              title: "To'g'ri",
              isCorrect: true,
            },
            {
              id: 3,
              title: "Xato",
              isCorrect: false,
            },
          ],
        },
        {
          id: 4,
          type: 3,
          question: "To'g'ri javobni yozing",
          answer: "apple",
        },
        {
          id: 5,
          type: 1,
          question: "Timsollarlarni tasniflash uchun ishlatiladigan tushuncha",
          options: [
            {
              id: 0,
              title: "Togri",
              isCorrect: true,
            },
            {
              id: 1,
              title: "Xato",
              isCorrect: false,
            },
            {
              id: 2,
              title: "Xato",
              isCorrect: false,
            },
            {
              id: 3,
              title: "Xato",
              isCorrect: false,
            },
          ],
        },
        {
          id: 6,
          type: 1,
          question: "Timsollarlarni tasniflash uchun ishlatiladigan tushuncha",
          options: [
            {
              id: 0,
              title: "Togri",
              isCorrect: true,
            },
            {
              id: 1,
              title: "Xato",
              isCorrect: false,
            },
            {
              id: 2,
              title: "Xato",
              isCorrect: false,
            },
            {
              id: 3,
              title: "Xato",
              isCorrect: false,
            },
          ],
        },
        {
          id: 7,
          type: 1,
          question: "Qaysi biri to'g'ri",
          options: [
            {
              id: 0,
              title: "To'gri",
              isCorrect: true,
            },
            {
              id: 1,
              title: "Xato",
              isCorrect: false,
            },
            {
              id: 2,
              title: "Xato",
              isCorrect: false,
            },
            {
              id: 3,
              title: "Xato",
              isCorrect: false,
            },
          ],
        },
        {
          id: 8,
          type: 2,
          question: "Bir nechtasi to'g'ri",
          options: [
            {
              id: 0,
              title: "To'gri",
              isCorrect: true,
            },
            {
              id: 1,
              title: "Xato",
              isCorrect: false,
            },
            {
              id: 2,
              title: "To'g'ri",
              isCorrect: true,
            },
            {
              id: 3,
              title: "Xato",
              isCorrect: false,
            },
          ],
        },
        {
          id: 9,
          type: 3,
          question: "To'g'ri javobni yozing",
          answer: "apple",
        },
      ],
      answers: [],
      ball: 0,
      activeIndex: 0,
      finished: false,
    };
  },
  methods: {
    checkType() {
      this.answers = this.tests.map((el) => {
        if (el.type == 1) return {};
        else if (el.type == 2) return [];
        return "";
      });
    },
    calcResult() {
      this.answers.forEach((el, i) => {
        if (Array.isArray(el)) {
          if (
            this.tests[i].options.filter((opt) => opt.isCorrect).length ==
              el.length &&
            el.every((opt) => opt.isCorrect)
          ) {
            this.ball++;
          }
        } else if (typeof el == "string") {
          if (
            this.tests[i].answer.trim().toUpperCase() == el.trim().toUpperCase()
          ) {
            this.ball++;
          }
        } else {
          if (el.isCorrect) this.ball++;
        }
      });
      this.finished = true;
    },
    checkActive(i) {
      if (!this.answers[i]) return false;
      if (this.tests[i].type == 3 && this.answers[i].length !== 0) return true;
      if (Object.keys(this.answers[i]).length !== 0) {
        return true;
      }
      return false;
    },
  },

  mounted() {
    this.checkType();
  },
};
</script>

<style>
.test-nav {
  @apply w-10 h-10 flex items-center justify-center rounded mr-2 border border-blue-800 hover:bg-blue-300 delay-100 hover:text-white;
}
.test-nav.active {
  @apply bg-blue-500 text-white;
}
.test-nav.current {
  @apply border-2 border-blue-900;
}
input[type="radio"],
input[type="checkbox"] {
  display: none;
}
input[type="radio"]:checked ~ .mockradio .check {
  @apply flex rounded-full bg-blue-600;
  opacity: 1;
}
.mockradio .check {
  opacity: 0;
  width: 12px;
  height: 12px;
}
.mockradio {
  @apply flex p-1 rounded-full  border border-blue-600 cursor-pointer;
}
.mockradio.incorrect {
  @apply border-red-600;
}
input[type="checkbox"]:checked ~ .mockcheckbox .check {
  @apply flex  bg-blue-600;
  opacity: 1;
}
.mockcheckbox .check {
  opacity: 0;
  width: 12px;
  height: 12px;
}
.mockcheckbox {
  @apply flex p-1   border border-blue-600 cursor-pointer;
  height: max-content;
}
.mockcheckbox.incorrect {
  @apply border-red-600;
}
.incorrect .check {
  @apply bg-red-600 rounded-full;
  opacity: 1;
}
.result .mockradio,
.result .mockcheckbox {
  cursor: default;
}
</style>