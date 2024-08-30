<script setup>
import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <router-view></router-view>
  <!-- <Login /> -->
  <!-- <AddTodo @add-todo="handlerAddTodo"/>
      <TodoList :todos="todos" @delete-todo="handlerDeleteTodo" @update-todo="handlerUpdateTodo" /> -->
</template>

<style scoped></style>
