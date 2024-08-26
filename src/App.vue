<script setup>
import Header from './components/Header.vue'
import AddTodo from './components/AddTodo.vue'
import TodoList from './components/TodoList.vue'
import axios from 'axios'
import { ref, onMounted }  from 'vue'

const todos = ref([])

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:8000/api/todos")
    const apiTodos = await response.json()
    todos.value = apiTodos.results
  }
  catch (err) {
    console.error("Error fetching todos:", err)
  }
})

const handlerAddTodo = async (todo) => {
  try {
    const response = await axios.post("http://localhost:8000/api/todos/", todo)
    todos.value.push(response.data)
  } catch (err) {
    console.error("Error adding todo:", err)
  }
}

const handlerDeleteTodo = async (todoId) => {
  try {
    await axios.delete(`http://localhost:8000/api/todos/${todoId}/`)
    todos.value = todos.value.filter((todo) => todo.id != todoId)
  } catch (err) {
    console.error("Error deleted todo:", err)
  }
}

const handlerUpdateTodo = async (todo) => {
  try {
    await axios.put(`http://localhost:8000/api/todos/${todo.id}/`, {...todo})
  } catch (err) {
    console.error("Error updated todo:", err)
  }
}

</script>

<template>
      <Header />
      <AddTodo @add-todo="handlerAddTodo"/>
      <TodoList :todos="todos" @delete-todo="handlerDeleteTodo" @update-todo="handlerUpdateTodo" />
</template>

<style scoped>

</style>
