<template>
    <div class="bg-red-700">
      <nav class="container px-3 py-6 mx-auto md:flex md:justify-between md:items-center dark:text-gray-200">
        <div class="flex items-center justify-between">
          <RouterLink to="/" class="text-xl flex items-center justify-center gap-1 font-bold text-gray-100 md:text-2xl hover:text-green-400">
            <NewsIcon class="md:flex-row"/>crypto NEWS
          </RouterLink>
          <!--Mobilemenu button-->
          <div @click="toggleNav" class="flex md:hidden">
            <button type="button" class="text-gray-100 hover:text-green-400 focus:outline-none focus:text-gray-400">
              <MenuIcon />
            </button>
          </div>
        </div>
        <ul :class="showMenu ? 'flex' : 'hidden'" class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
          <li><RouterLink class="text-gray-100 hover:text-green-400" to="/">Home</RouterLink></li>
          <li><RouterLink class="text-gray-100 hover:text-green-400" to="/about">About</RouterLink></li>
          <li><RouterLink class="text-gray-100 hover:text-green-400" to="/news">News</RouterLink></li>
          <MoonIcon @click="toggleDark()" v-if="!isDark"/>
          <SunIcon @click="toggleDark()" v-if="isDark"/>
        </ul>
      </nav>
    </div>
    
  <RouterView class="dark:text-white dark:bg-black"/>
</template>
<script setup>
  import {ref} from 'vue'
  import { RouterLink, RouterView } from "vue-router";
  import MenuIcon from "./components/Icons/MenuIcon.vue";
  import NewsIcon from "./components/Icons/NewsIcon.vue"
  import MoonIcon from './components/Icons/MoonIcon.vue';
  import SunIcon from './components/Icons/SunIcon.vue'
  import { useDark, useToggle } from "@vueuse/core"

  const isDark = useDark()
  const toggleDark = useToggle(isDark)
      
  let showMenu = ref(false)
  function toggleNav() {
  return (showMenu.value = !showMenu.value);
  }
</script>

