<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  message: {
    type: String
  }
})

</script>

<template>
  <div class="container">
    <h1>Error!</h1>
    <span >{{props.message}}.</span>
  </div>
</template>

