<script setup>
import AddTodo from './AddTodo.vue'
import TodoList from './TodoList.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'

const todos = ref([])
const baseUrl = import.meta.env.VITE_API_BASE_URL
const token = localStorage.getItem("accessToken")

onMounted(async () => {
  try {
    const response = await fetch(`${baseUrl}/api/todos`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    })

    const apiTodos = await response.json()
    todos.value = apiTodos
  } catch (err) {
    console.error('Error fetching todos:', err)
  }
})

const handlerAddTodo = async (todo) => {
  try {
    const response = await axios.post(`${baseUrl}/api/todos/`, todo, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    })

    todos.value.push(response.data)
  } catch (err) {
    console.error('Error adding todo:', err)
  }
}

const handlerDeleteTodo = async (todoId) => {
  try {
    await axios.delete(`${baseUrl}/api/todos/${todoId}/`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    })
    todos.value = todos.value.filter((todo) => todo.id != todoId)
  } catch (err) {
    console.error('Error deleted todo:', err)
  }
}

const handlerUpdateTodo = async (todo) => {
  try {
    await axios.put(`${baseUrl}/api/todos/${todo.id}/`, todo, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    })
  } catch (err) {
    console.error('Error updated todo:', err)
  }
}

</script>


<template>
  <div>
    <AddTodo @add-todo="handlerAddTodo"/>
    <TodoList :todos="todos" @delete-todo="handlerDeleteTodo" @update-todo="handlerUpdateTodo" />
  </div>
</template>
