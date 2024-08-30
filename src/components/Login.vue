<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { store } from '@/store';

const email = ref('')
const password = ref('')
const router = useRouter()
const baseUrl = 'https://todolistpy.zeabur.app'
// const baseUrl = 'http://localhost:8000'

const loginSubmit = async () => {

  try {
    const response = await axios.post(`${baseUrl}/api/token/`, {
      username: email.value,
      password: password.value
    })

    localStorage.setItem('accessToken', response.data.access)
    localStorage.setItem('refreshToken', response.data.refresh)
    store.isAuthenticated = true

    router.push('/')
  } catch (error) {
    console.error('Login failed:', error)
  }
}
</script>

<template>
  <div class="login-container">
    <div class="flex justify-center items-center h-screen bg-gray-100">
      <div class=" w-full max-w-md p-8 bg-white shadow-md rounded-lg mt-[-60px]">
        <h2 class="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form @submit.prevent="loginSubmit">
          <div class="mb-4">
            <label for="username" class="block text-sm font-medium text-gray-700"
              >Username:</label
            >
            <input
              v-model="email"
              type="text"
              id="username"
              placeholder="Your username"
              class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>

          <div class="mb-6">
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Password:</label
            >
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
            Login
          </button>
        </form>
        <router-link v-if="!store.isAuthenticated" class="block mt-5 w-full text-center text-white px-4 py-2  bg-orange-500 rounded-md mr-5 border-2 border-transparent  hover:bg-orange-600 transition-all duration-300" to="/users/register">Register</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

main {
  background-color: #f7fafc;
}
</style>
