<script setup>
import { store } from "../store"
import { useRouter } from "vue-router"

const router = useRouter()
const handleLogout = () => {
    store.logout()
    router.push("/users/login")
}
</script>

<template>
    <header class="h-14 items-center bg-cyan-700 flex justify-between">
        <h1 class="text-white text-4xl pl-2"><a href="/">TodoList</a></h1>
        <div>
            <router-link v-if="!store.isAuthenticated" class="text-white px-3 py-1 bg-orange-500 rounded text-2xl mr-5 border-2 border-transparent hover:border-white hover:bg-orange-600 transition-all duration-300" to="/users/login">Login</router-link>
            <button v-if="store.isAuthenticated" class="text-white px-3 py-1 bg-red-500 rounded text-2xl mr-5 border-2 border-transparent hover:border-white hover:bg-red-600 transition-all duration-300" @click="handleLogout">Logout</button>
        </div>
    </header>
</template>