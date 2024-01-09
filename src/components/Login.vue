<script setup lang="ts">
import axios from 'axios';
import { reactive, ref, onMounted } from 'vue'
import env from '../config/env.config'

const login = reactive({
  email: '',
  password: ''
})

const isSuccess = ref(false)
const getListing = ref({})


onMounted(async () => {
  const response = await axios.get(`${env.apiEndpoint}/unknown`)
  getListing.value = response.data.data
})

const onLogin = async () => {
  const response = await axios
    .post(`${env.apiEndpoint}/login`, login)

  console.log(response)
  isSuccess.value = true
}


</script>

<template>
   <!-- added directive for Background color change as Red-->
  <div
    v-highlight="'red'"
    class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <div v-if="isSuccess"
        class="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
        role="alert">
        <span class="sr-only">Info</span>
        <div>
          <span class="font-medium">Success alert!</span> login is successfully
        </div>
      </div>
      <form @submit.prevent="onLogin">
        <h3 class="text-3xl font-bold"> Login</h3>
        <div class="mt-5">
          <div>
            <input v-model="login.email"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" placeholder="Enter your email">
          </div>
          <div class="mt-4">
            <input v-model="login.password"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text" placeholder="Enter your password">
          </div>

          <!-- added directive for Button color change as Black -->
          <button
            v-bgColor="'black'"
            class="bg-blue-500 mt-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>

  <section v-if="isSuccess" class="mt-5">
    <div class="flex items-center border p-4" v-for="list in getListing">
      <div>
      <strong>{{ list.name }}</strong>
      <span class="ml-3">{{ list.year }}</span>
    </div>
  </div>
</section></template>