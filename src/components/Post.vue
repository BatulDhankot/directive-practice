

<script setup lang="ts">
// import axios from 'axios';
import { reactive } from 'vue'

const post = reactive({
  title:'',
  description: ''
})

const onCreatePost = () => {

// axios.post()
}
</script>

<template>
  <div>
    <form @submit.prevent="onCreatePost">
      <h3 class="text-3xl font-bold underline text-amber-400"> Create Post</h3>
  <div class="mt-5">
    <div >
        <input v-model="post.title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        type="text" placeholder="Enter your title">
      </div>
     <div class="mt-4">  
      <input v-model="post.description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        type="text" placeholder="Enter your description">
      </div>
      <button class="bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign In
      </button>
  </div>
      
    </form>
  </div>
</template>