<template>
  <div class="mt-12 bg-white shadow-md rounded p-4">
    <h1 class="text-2xl">To do list</h1>
    <div class="todo-list-wrap font-bold">
      <div class="flex my-4">
        <input
          v-model="newItem"
          @keyup.enter="addItem"
          class="w-full border border-black border-opacity-25 rounded p-2"
          type="text"
          name=""
          id=""
        />
        <button @click="addItem" class="p-2 bg-gray-300 font-bold rounded ml-2">
          add
        </button>
      </div>
      <draggable ghost-class="ghost" class="todo-list" v-model="arr">
        <transition-group name="list">
          <div
            class="
              todo-item
              bg-gray-300
              rounded
              my-2
              flex
              justify-between
              items-center
            "
            v-for="(element, i) in arr"
            :key="i+'a'"
          >
            <div class="p-2" v-if="!element.edit">{{ element.title }}</div>
            <div v-else class="flex w-full">
              <input
                v-model="arr[i].title"
                class="rounded w-full mr-8 p-2 border border-black"
                type="text"
                @keyup.enter="arr[i].edit=false"
              />
            </div>
            <div class="flex p-2">
              <a @click="removeItem(i)" href="javascript:void(0)">
                <img src="@/assets/delete.svg" alt="" />
              </a>
              <a v-if="!element.edit" class="ml-2" @click="arr[i].edit=true" href="javascript:void(0)">
                <img src="@/assets/edit.svg" alt="" />
              </a>
              <a v-else class="ml-2" @click="arr[i].edit=false" href="javascript:void(0)">
                <img src="@/assets/tick.svg" alt="" />
              </a>
            </div>
          </div>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
const TODO_STORAGE_KEY = "todostorage";
let todoStorage = {
  fetch: () => JSON.parse(localStorage.getItem(TODO_STORAGE_KEY) || "[]"),
  save: (todos) =>
    localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos)),
};
export default {
  components: {
    draggable,
  },
  data() {
    return {
      newItem: "",
      arr: todoStorage.fetch(),
    };
  },
  methods: {
    addItem() {
      if (this.newItem) {
        this.arr.push({ title: this.newItem, edit: false });
        this.newItem = "";
      }
    },
    removeItem(i) {
      this.arr.splice(i, 1);
    },
  },
  computed: {},
  watch: {
    arr: {
      deep: true,
      handler() {
        todoStorage.save(this.arr);
      },
    },
  },
};
</script>
<style>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.todo-item {
  width: 500px;
  cursor: move;
}
.todo-list-wrap {
  width: 500px;
  min-height: 300px;
}
.list-enter-active,
.list-move {
  transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
  transition-property: opacity, transform;
}

.list-enter {
  opacity: 0;
  transform: translateX(50px) scaleY(0.5);
}

.list-enter-to {
  opacity: 1;
  transform: translateX(0) scaleY(1);
}

</style>