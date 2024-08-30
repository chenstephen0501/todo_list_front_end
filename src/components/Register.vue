<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { store } from '../store'
import axios from 'axios'

const email = ref('')
const username = ref('')
const password = ref('')
const router = useRouter()
const baseUrl = 'https://todolistpy.zeabur.app'
// const baseUrl = 'http://localhost:8000'

const registerSubmit = async () => {
  try {
    await axios.post(`${baseUrl}/api/users/register/`, {
      email: email.value,
      username: username.value,
      password: password.value
    })
    router.push(`/users/login`)
  } catch (error) {
    console.error('Registration failed:', error)
  }
}
</script>

<template>
  <div class="register-container">
    <div class="flex justify-center items-center h-screen bg-gray-100 ">
      <div class="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h2 class="text-2xl font-semibold mb-6 text-center">Register</h2>
        <form @submit.prevent="registerSubmit">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email:</label>
            <input
            v-model="email"
            type="email"
            id="email"
            placeholder="Your email"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
            />
          </div>
          
          <div class="mb-4">
            <label for="username" class="block text-sm font-medium text-gray-700">Username:</label>
            <input
            v-model="username"
            type="text"
            id="username"
            placeholder="Your username"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
            />
          </div>
          
          <div class="mb-6">
            <label for="password" class="block text-sm font-medium text-gray-700">Password:</label>
            <input
            v-model="password"
            type="password"
            id="password"
            placeholder="Your password"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
            />
          </div>
          
          <button
          type="submit"
          class="w-full py-2 px-4 bg-cyan-700 text-white font-semibold rounded-md shadow-sm hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
          Register
        </button>
      </form>
      <router-link v-if="!store.isAuthenticated" class="block mt-5 text-center font-semibold text-white px-4 py-2 w-full bg-orange-500 rounded-md  hover:bg-orange-600 transition-all duration-300" to="/users/login">Login</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

div {
  background-color: #f7fafc;
}
</style>
