<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  todos: {
    type: Array
  }
})

const emit = defineEmits(['deleteTodo', 'updateTodo', 'computedTodo'])
const updatingId = ref(null)
const deleteTodo = (todoId) => {
  emit('deleteTodo', todoId)
}

const updateTodo = (todoId) => {
  updatingId.value = todoId
}

const saveTodo = (todo) => {
  updatingId.value = null
  emit('updateTodo', todo)
}
</script>

<template>
  <div class="mt-3 flex items-center w-12/12">
    <ul v-if="props.todos.length > 0" class="w-full">
      <li v-for="todo in props.todos" :key="todo.id" class="flex justify-center mt-2">
        <label
          class="flex items-center py-3 w-12 justify-center rounded-l-lg border-2 border-gray-400 cursor-pointer"
        >
          <input type="checkbox" v-model="todo.computed" />
        </label>
        <div
          class="w-5/12 rounded-r-lg border-t-2 border-b-2 border-r-2 border-gray-400"
        >
          <input
            class="py-2 w-full pl-5 text-lg"
            type="text"
            :disabled="updatingId != todo.id"
            v-model="todo.title"
            :class="{ 'line-through': todo.computed }"
          />
        </div>

        <div class="w-2/12 flex pl-5 space-x-4">
          <button
            class="px-2 rounded bg-green-600 text-white border-2 border-transparent hover:border-green-800 hover:bg-green-600 transition-all duration-300"
            v-if="updatingId != todo.id"
            v-on:click="updateTodo(todo.id)"
          >
            Update
          </button>
          <button
            class="px-2 rounded bg-blue-600 text-white border-2 border-transparent hover:border-blue-800 hover:bg-blue-600 transition-all duration-300"
            v-if="updatingId == todo.id"
            v-on:click="saveTodo(todo)"
          >
            Save
          </button>
          <button
            class="px-2 bg-red-500 rounded text-white border-2 border-transparent hover:border-red-800 hover:bg-red-600 transition-all duration-300"
            @click="deleteTodo(todo.id)"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
    <p class="w-full flex justify-center text-4xl" v-else>No Todo</p>
  </div>
</template>
