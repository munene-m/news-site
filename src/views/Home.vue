<script setup>
import NewsCard from "../components/NewsCard.vue";
import ArrowIcon from "../components/Icons/ArrowIcon.vue";
import Footer from "../components/Footer.vue";
import { ref } from "vue";
const apiKey = import.meta.env.VITE_NEWS_API_KEY
let date = new Date();


let datePublished0 = ref("");
let source0 = ref("");
let title0 = ref("")
let description0 = ref("")
let urltoImage0 = ref("")

let datePublished1 = ref("");
let source1 = ref("");
let title1 = ref("")
let description1 = ref("")
let urltoImage1 = ref("")

let datePublished2 = ref("");
let source2 = ref("");
let title2 = ref("")
let description2 = ref("")
let urltoImage2 = ref("")

let datePublished3 = ref("");
let source3 = ref("");
let title3 = ref("")
let description3 = ref("")
let urltoImage3 = ref("")

let datePublished4 = ref("");
let source4 = ref("");
let title4 = ref("")
let description4 = ref("")
let urltoImage4 = ref("")

let datePublished5 = ref("");
let source5 = ref("");
let title5 = ref("")
let description5 = ref("")
let urltoImage5 = ref("")

const readArticle = () => {
  window.location.href=url0
}

async function getTrendingArticles() {
  await fetch(`https://newsapi.org/v2/everything?q=Climate&from=${date}&sortBy=popularity&apiKey=${apiKey}`)
    .then((res) => res.json())
    .then((response) => {
      datePublished0.value = response.articles[0].publishedAt;
      source0.value = response.articles[0].source.name;
      title0.value = response.articles[0].title
      description0.value = response.articles[0].description
      urltoImage0.value = response.articles[0].urlToImage

      datePublished1.value = response.articles[1].publishedAt;
      source1.value = response.articles[1].source.name;
      title1.value = response.articles[1].title
      description1.value = response.articles[1].description
      urltoImage1.value = response.articles[1].urlToImage

      datePublished2.value = response.articles[2].publishedAt;
      source2.value = response.articles[2].source.name;
      title2.value = response.articles[2].title
      description2.value = response.articles[2].description
      urltoImage2.value = response.articles[2].urlToImage
      
      datePublished3.value = response.articles[3].publishedAt;
      source3.value = response.articles[3].source.name;
      title3.value = response.articles[3].title
      description3.value = response.articles[3].description
      urltoImage3.value = response.articles[3].urlToImage

      datePublished4.value = response.articles[4].publishedAt;
      source4.value = response.articles[4].source.name;
      title4.value = response.articles[4].title
      description4.value = response.articles[4].description
      urltoImage4.value = response.articles[4].urlToImage

      datePublished5.value = response.articles[5].publishedAt;
      source5.value = response.articles[5].source.name;
      title5.value = response.articles[5].title
      description5.value = response.articles[5].description
      urltoImage5.value = response.articles[5].urlToImage

      
      console.log(response.articles);
    })
    .catch((err) => {
      console.log(err);
    });
}

getTrendingArticles();
</script>

<template>
  <main>
    <div class="flex flex-col text-center justify-center pt-4">
      <h1 class="text-2xl pb-4 font-bold text-gray-700">
        Stay up to date with the latest climate change news.
      </h1>
      <hr />
    </div>
    <div>
      <p class="px-4 py-4 text-center md:px-20">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
        recusandae cumque dicta fuga eius natus! Odit asperiores minus eos at
        autem dolorem repudiandae, quos, architecto molestias voluptate officiis
        quia adipisci iure ab, soluta numquam libero rem suscipit veritatis!
        Possimus tempore porro vel. Atque, delectus molestiae.
      </p>
    </div>
    <h2 class="text-center py-14 text-4xl text-gray-700 font-serif underline">
      Trending articles
    </h2>
    <div class="grid grid-cols-1 px-8 justify-center md:grid-cols-3 md:gap-3">
      <!-- grid items -->
      <div class="flex justify-center mt-5">
        <div class="rounded-lg shadow-lg bg-white max-w-xs">
          <img :src="urltoImage0" class="rounded-t-lg" alt="" />
          <div class="m-4">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              {{title0}}
            </h5>
            <p class="text-gray-700 text-lg mb-4">
              {{description0}}
            </p>
            <p class="pb-4 text-gray-700">Source: {{ source0 }}</p>
            <p class="text-gray-700">Date Published: {{ datePublished0 }}</p>

            <p class="text-gray-700 pt-4"></p>

            <button @click="readArticle"
              class="
                bg-red-700
                text-white
                mt-4
                inline-block
                px-6
                py-2.5
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-red-800 hover:text-green-400 hover:shadow-lg
                focus:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-red-900 active:shadow-lg
                transition
                duration-150
                ease-in-out
                justify-center
                items-center
                hover:scale-95
              "
            >
              Read more
            </button>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-5">
        <div class="rounded-lg shadow-lg bg-white max-w-xs">
          <img :src="urltoImage1" class="rounded-t-lg" alt="" />
          <div class="m-4">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              {{title1}}
            </h5>
            <p class="text-gray-700 text-lg mb-4">
              {{description1}}
            </p>
            <p class="pb-4 text-gray-700">Source: {{ source1 }}</p>
            <p class="text-gray-700">Date Published: {{ datePublished1 }}</p>

            <p class="text-gray-700 pt-4"></p>

            <button
              class="
                bg-red-700
                text-white
                mt-4
                inline-block
                px-6
                py-2.5
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-red-800 hover:text-green-400 hover:shadow-lg
                focus:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-red-900 active:shadow-lg
                transition
                duration-150
                ease-in-out
                justify-center
                items-center
                hover:scale-95
              "
            >
              Read more
            </button>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-5">
        <div class="rounded-lg shadow-lg bg-white max-w-xs">
          <img :src="urltoImage2" class="rounded-t-lg" alt="" />
          <div class="m-4">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              {{title2}}
            </h5>
            <p class="text-gray-700 text-lg mb-4">
              {{description2}}
            </p>
            <p class="pb-4 text-gray-700">Source: {{ source2 }}</p>
            <p class="text-gray-700">Date Published: {{ datePublished2 }}</p>

            <p class="text-gray-700 pt-4"></p>

            <button
              class="
                bg-red-700
                text-white
                mt-4
                inline-block
                px-6
                py-2.5
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-red-800 hover:text-green-400 hover:shadow-lg
                focus:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-red-900 active:shadow-lg
                transition
                duration-150
                ease-in-out
                justify-center
                items-center
                hover:scale-95
              "
            >
              Read more
            </button>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-5">
        <div class="rounded-lg shadow-lg bg-white max-w-xs">
          <img :src="urltoImage3" class="rounded-t-lg" alt="" />
          <div class="m-4">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              {{title3}}
            </h5>
            <p class="text-gray-700 text-lg mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quasi
              atque ea explicabo vel quas minima quidem soluta earum aliquid.
            </p>
            <p class="pb-4 text-gray-700">Source: {{ source3 }}</p>
            <p class="text-gray-700">Date Published: {{ datePublished3 }}</p>

            <p class="text-gray-700 pt-4"></p>

            <button
              class="
                bg-red-700
                text-white
                mt-4
                inline-block
                px-6
                py-2.5
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-red-800 hover:text-green-400 hover:shadow-lg
                focus:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-red-900 active:shadow-lg
                transition
                duration-150
                ease-in-out
                justify-center
                items-center
                hover:scale-95
              "
            >
              Read more
            </button>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-5">
        <div class="rounded-lg shadow-lg bg-white max-w-xs">
          <img :src="urltoImage4" class="rounded-t-lg" alt="" />
          <div class="m-4">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              {{title4}}
            </h5>
            <p class="text-gray-700 text-lg mb-4">
              {{description4}}
            </p>
            <p class="pb-4 text-gray-700">Source: {{ source4 }}</p>
            <p class="text-gray-700">Date Published: {{ datePublished4 }}</p>

            <p class="text-gray-700 pt-4"></p>

            <button
              class="
                bg-red-700
                text-white
                mt-4
                inline-block
                px-6
                py-2.5
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-red-800 hover:text-green-400 hover:shadow-lg
                focus:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-red-900 active:shadow-lg
                transition
                duration-150
                ease-in-out
                justify-center
                items-center
                hover:scale-95
              "
            >
              Read more
            </button>
          </div>
        </div>
      </div>
      <div class="flex justify-center mt-5">
        <div class="rounded-lg shadow-lg bg-white max-w-xs">
          <img :src="urltoImage5" class="rounded-t-lg" alt="" />
          <div class="m-4">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              {{title5}}
            </h5>
            <p class="text-gray-700 text-lg mb-4">
              {{description5}}
            </p>
            <p class="pb-4 text-gray-700">Source: {{ source5 }}</p>
            <p class="text-gray-700">Date Published: {{ datePublished5 }}</p>

            <p class="text-gray-700 pt-4"></p>

            <button
              class="
                bg-red-700
                text-white
                mt-4
                inline-block
                px-6
                py-2.5
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-red-800 hover:text-green-400 hover:shadow-lg
                focus:bg-red-800 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-red-900 active:shadow-lg
                transition
                duration-150
                ease-in-out
                justify-center
                items-center
                hover:scale-95
              "
            >
              Read more
            </button>
          </div>
        </div>
      </div>

      <!-- <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard /> -->
    </div>

    <div>
      <h3 class="text-center mt-12 text-4xl text-gray-700 font-serif underline">
        Our sources
      </h3>
    </div>
    <Footer />
  </main>
</template>
