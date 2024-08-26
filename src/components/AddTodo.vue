<script setup>
    import { ref, defineEmits } from 'vue'

    const title = ref("")
    const emit = defineEmits(["addTodo"])
    const addTodo = () => {
        const todo = {
            title: title.value,
            completed: false,
        }
        emit("addTodo", todo)
        title.value = ""
    }
</script>

<template>
    <div class="mt-6 py-5">
        <form class="w-12/12 px-3 flex justify-center border-3 border-gray-600"  v-on:submit.prevent="addTodo">
            <input class="border-2 py-2 pl-5 rounded w-1/2 text-lg" type="text" value="" placeholder="input todo name ..." v-model="title">
            <button class="ml-14 text-xl text-white py-2 px-5 rounded bg-sky-400" :disabled="title.length == 0">Create</button>
        </form>
    </div>
</template>
