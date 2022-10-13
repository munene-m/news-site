<script setup>
import NewsCard from "../components/NewsCard.vue";
import ArrowIcon from "../components/Icons/ArrowIcon.vue";
import Footer from "../components/Footer.vue";
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
      <p class="px-4 text-center md:px-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimosquis tenetur nesciunt deserunt maxime
         voluptatum, iste cumque neque sint eveniet nihil, tempora ipsam provident facilis enim fuga? Pariatur 
         facilis laborum culpa debitis unde ad quae!</p>
    </div>
    <h2 class="text-center py-14 text-4xl text-gray-700 font-serif underline">Trending articles</h2>
    <div class="grid grid-cols-1 px-8 justify-center md:grid-cols-3 md:gap-3">
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>

<Footer/>
  </main>
</template>
