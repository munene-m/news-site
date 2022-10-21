<template>
  <div class="flex justify-center mt-5 ">
    <div class="rounded-lg shadow-lg bg-white max-w-xs dark:text-white dark:bg-gray-900 dark:bg-opacity-40">
      <slot name="image">
        <img :src="newsStore.urlToImage" class="rounded-t-lg" alt=""/>
      </slot>
      <div class="m-4">
        <slot name="title">
          <h5 class="text-gray-900 text-xl font-medium mb-2 dark:text-white">{{newsStore.title}}</h5>
        </slot>
        <slot name="description">
          <p class="text-gray-700 text-lg mb-4 dark:text-white">{{newsStore.description}}</p>
        </slot>
        <slot name="source">
        <p class="pb-4 text-gray-700 font-semibold dark:text-white">Source: {{newsStore.source}}</p>
        </slot>
        <slot name="date">
        <p class="text-gray-700 dark:text-white">Date Published: {{newsStore.datePublished}}</p>
       </slot>
       <slot name="url">
        <a :href="newsStore.url">
          <button class="bg-red-700 text-white mt-4 inline-block px-6 py-2.5 font-medium 
        text-xs leading-tight uppercase rounded shadow-md hover:bg-red-800
         hover:text-green-400 hover:shadow-lg focus:bg-red-800 focus:shadow-lg 
         focus:outline-none focus:ring-0 active:bg-red-900 active:shadow-lg transition
          duration-150 ease-in-out justify-center items-center hover:scale-95">Read more</button>
        </a>
       </slot>
      </div>
    </div>
      
    </div>
</template>
<script setup>
import LeftArrowIcon from './Icons/LeftArrowIcon.vue';
import { useNewsStore } from "../stores/newStore"
import { watchEffect } from "@vue/runtime-core";
import { ref, watch } from 'vue';

const newsStore = useNewsStore()
let datePublished = ref("")
let source = ref("")

// let date = new Date()

// async function getTopHeadlines () {
//   await fetch('https://newsapi.org/v2/everything?q=crypto&from=2022-10-14&sortBy=popularity&apiKey=79c312aee7bd45849389593d83d5e00a')
//   .then(res => res.json())
//   .then((response) => {
//     datePublished.value = response.articles[0].publishedAt;
//     source.value = response.articles[0].source.name;
//     console.log(datePublished.value);
//   }
  
//   )
//   .catch(err => {
//     console.log(err)
//   })
// }

// getTopHeadlines()






watchEffect(() => {
  newsStore.getTopHeadlines()
})
// watchEffect(() => {
// newsStore.author = author.value;
// // author.value.push(newsStore.author)
// })
// watchEffect(() => {
//   newsStore.author === author.value
// })
</script>