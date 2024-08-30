<script setup>
import { ref, defineEmits } from 'vue'

const title = ref('')
const emit = defineEmits(['addTodo'])
const addTodo = () => {
  const todo = {
    title: title.value,
    computed: false
  }
  emit('addTodo', todo)
  title.value = ''
}
</script>

<template>
  <div class="add-todo-container flex justify-center">
    <div class=" mt-6 py-5 w-8/12">
      <form
        class="px-3 flex border-3 border-gray-600"
        v-on:submit.prevent="addTodo"
      >
        <input
          class="w-9/12 border-2 py-2 pl-5 rounded text-lg"
          type="text"
          value=""
          placeholder="input todo name ..."
          v-model="title"
        />
        <button
          class="w-2/12 ml-8 text-xl text-white py-2 px-5 rounded bg-sky-400  border-2 border-transparent hover:border-sky-700 hover:bg-sky-500 transition-all duration-300"
          :disabled="title.length == 0"
        >
          Create
        </button>
      </form>
    </div>
  </div>
</template>
