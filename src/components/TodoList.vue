<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import axios from 'axios'

defineProps({
    todos: {
        type: Array
    }
})

const emit = defineEmits(["deleteTodo", "updateTodo", "completedTodo"])
const updatingId = ref(null)
const deleteTodo = (todoId) => {
    emit("deleteTodo", todoId)
}

const updateTodo = (todoId) => {
    updatingId.value = todoId
}

const saveTodo = (todo) => {
    updatingId.value = null
    emit("updateTodo", todo)
}

</script>

<template>
    <div class="mt-6 flex items-cente w-12/12">
        <ul v-if="todos.length > 0" class="w-full">
            <li v-for="todo in todos" :key="todo.id" class="flex justify-center mt-2">
                <label class="flex items-center py-3 w-12 justify-center rounded-l-lg border-2 border-gray-400 cursor-pointer">
                    <input  type="checkbox" v-model="todo.completed"> 
                </label>
                <div class="w-5/12 rounded-r-lg border-t-2 border-b-2 border-r-2 border-gray-400"><input class="py-2 w-full pl-5 text-lg" type="text" :disabled="updatingId != todo.id" v-model="todo.title" :class="{ 'line-through': todo.completed }"></div>

                <div class="w-2/12 flex pl-5 space-x-4">
                    <button class="px-2  rounded bg-green-600 text-white" v-if="updatingId != todo.id" v-on:click="updateTodo(todo.id)">Update</button>
                    <button class="px-2  rounded bg-blue-600 text-white" v-if="updatingId == todo.id" v-on:click="saveTodo(todo)">Save</button>
                    <button class="px-2  bg-red-500 rounded text-white" @click="deleteTodo(todo.id)">Delete</button>
                </div>
            </li>
        </ul>
        <p class="w-full flex justify-center text-4xl" v-else>No Todo </p>
    </div>
</template>