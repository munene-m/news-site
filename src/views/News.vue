<script setup>
import NewsCard from '../components/NewsCard.vue';
import Footer from '../components/Footer.vue';
import { useNewsStore } from '../stores/newStore';

const newsStore = useNewsStore()

</script>

<template>
    <h1 class="text-3xl py-6 font-bold text-gray-700 text-center dark:bg-black dark:opacity-90 dark:text-white">Top headlines in the world of tech.</h1>
    <hr>
    <div class="grid grid-cols-1 px-8 pb-14 justify-center md:grid-cols-3 md:gap-3 dark:bg-black dark:opacity-90">
        <NewsCard/>
        <NewsCard>
            <template #image>
                <img :src="newsStore.urlToImage1" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2 dark:text-white">{{newsStore.title1}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4 dark:text-white">{{newsStore.description1}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold dark:text-white">Source: {{newsStore.source1}}</p>
            </template>
            <template #date>
                <p class="text-gray-700 dark:text-white">Date Published: {{newsStore.datePublished}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url1">
                    <button class="bg-red-700 text-white mt-4 inline-block px-6 py-2.5 font-medium 
                    text-xs leading-tight uppercase rounded shadow-md hover:bg-red-800
                     hover:text-green-400 hover:shadow-lg focus:bg-red-800 focus:shadow-lg 
                    focus:outline-none focus:ring-0 active:bg-red-900 active:shadow-lg transition
                    duration-150 ease-in-out justify-center items-center hover:scale-95">Read more
                    </button>
                </a>
            </template>
        </NewsCard>
        <NewsCard>
            <template #image>
                <img :src="newsStore.urlToImage2" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2 dark:text-white">{{newsStore.title2}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4 dark:text-white">{{newsStore.description2}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold dark:text-white">Source: {{newsStore.source2}}</p>
            </template>
            <template #date>
                <p class="text-gray-700 dark:text-white">Date Published: {{newsStore.datePublished2}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url2">
                    <button class="bg-red-700 text-white mt-4 inline-block px-6 py-2.5 font-medium 
                    text-xs leading-tight uppercase rounded shadow-md hover:bg-red-800
                     hover:text-green-400 hover:shadow-lg focus:bg-red-800 focus:shadow-lg 
                    focus:outline-none focus:ring-0 active:bg-red-900 active:shadow-lg transition
                    duration-150 ease-in-out justify-center items-center hover:scale-95">Read more
                    </button>
                </a>
            </template>
        </NewsCard>
        <NewsCard>
            <template #image>
                <img :src="newsStore.urlToImage3" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2 dark:text-white">{{newsStore.title3}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4 dark:text-white">{{newsStore.description3}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold dark:text-white">Source: {{newsStore.source3}}</p>
            </template>
            <template #date>
                <p class="text-gray-700 dark:text-white">Date Published: {{newsStore.datePublished3}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url3">
                    <button class="bg-red-700 text-white mt-4 inline-block px-6 py-2.5 font-medium 
                    text-xs leading-tight uppercase rounded shadow-md hover:bg-red-800
                     hover:text-green-400 hover:shadow-lg focus:bg-red-800 focus:shadow-lg 
                    focus:outline-none focus:ring-0 active:bg-red-900 active:shadow-lg transition
                    duration-150 ease-in-out justify-center items-center hover:scale-95">Read more
                    </button>
                </a>
            </template>
        </NewsCard>
        <NewsCard>
            <template #image>
                <img :src="newsStore.urlToImage4" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2 dark:text-white">{{newsStore.title4}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4 dark:text-white">{{newsStore.description4}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold dark:text-white">Source: {{newsStore.source4}}</p>
            </template>
            <template #date>
                <p class="text-gray-700 dark:text-white">Date Published: {{newsStore.datePublished4}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url4">
                    <button class="bg-red-700 text-white mt-4 inline-block px-6 py-2.5 font-medium 
                    text-xs leading-tight uppercase rounded shadow-md hover:bg-red-800
                     hover:text-green-400 hover:shadow-lg focus:bg-red-800 focus:shadow-lg 
                    focus:outline-none focus:ring-0 active:bg-red-900 active:shadow-lg transition
                    duration-150 ease-in-out justify-center items-center hover:scale-95">Read more
                    </button>
                </a>
            </template>
        </NewsCard>
        <NewsCard>
            <template #image>
                <img :src="newsStore.urlToImage5" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2 dark:text-white">{{newsStore.title5}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4 dark:text-white">{{newsStore.description5}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold dark:text-white">Source: {{newsStore.source5}}</p>
            </template>
            <template #date>
                <p class="text-gray-700 dark:text-white">Date Published: {{newsStore.datePublished5}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url5">
                    <button class="bg-red-700 text-white mt-4 inline-block px-6 py-2.5 font-medium 
                    text-xs leading-tight uppercase rounded shadow-md hover:bg-red-800
                     hover:text-green-400 hover:shadow-lg focus:bg-red-800 focus:shadow-lg 
                    focus:outline-none focus:ring-0 active:bg-red-900 active:shadow-lg transition
                    duration-150 ease-in-out justify-center items-center hover:scale-95">Read more
                    </button>
                </a>
            </template>
        </NewsCard>
        <NewsCard>
            <template #image>
                <img :src="newsStore.urlToImage6" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2 dark:text-white">{{newsStore.title6}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4 dark:text-white">{{newsStore.description6}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold dark:text-white">Source: {{newsStore.source6}}</p>
            </template>
            <template #date>
                <p class="text-gray-700 dark:text-white">Date Published: {{newsStore.datePublished6}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url6">
                    <button class="bg-red-700 text-white mt-4 inline-block px-6 py-2.5 font-medium 
                    text-xs leading-tight uppercase rounded shadow-md hover:bg-red-800
                     hover:text-green-400 hover:shadow-lg focus:bg-red-800 focus:shadow-lg 
                    focus:outline-none focus:ring-0 active:bg-red-900 active:shadow-lg transition
                    duration-150 ease-in-out justify-center items-center hover:scale-95">Read more
                    </button>
                </a>
            </template>
        </NewsCard>
        <NewsCard>
            <template #image>
                <img :src="newsStore.urlToImage7" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2 dark:text-white">{{newsStore.title7}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4 dark:text-white">{{newsStore.description7}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold dark:text-white">Source: {{newsStore.source7}}</p>
            </template>
            <template #date>
                <p class="text-gray-700 dark:text-white">Date Published: {{newsStore.datePublished7}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url7">
                    <button class="bg-red-700 text-white mt-4 inline-block px-6 py-2.5 font-medium 
                    text-xs leading-tight uppercase rounded shadow-md hover:bg-red-800
                     hover:text-green-400 hover:shadow-lg focus:bg-red-800 focus:shadow-lg 
                    focus:outline-none focus:ring-0 active:bg-red-900 active:shadow-lg transition
                    duration-150 ease-in-out justify-center items-center hover:scale-95">Read more
                    </button>
                </a>
            </template>
        </NewsCard>
        <NewsCard>
            <template #image>
                <img :src="newsStore.urlToImage8" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2 dark:text-white">{{newsStore.title8}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4 dark:text-white">{{newsStore.description8}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold dark:text-white">Source: {{newsStore.source8}}</p>
            </template>
            <template #date>
                <p class="text-gray-700 dark:text-white">Date Published: {{newsStore.datePublished8}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url8">
                    <button class="bg-red-700 text-white mt-4 inline-block px-6 py-2.5 font-medium 
                    text-xs leading-tight uppercase rounded shadow-md hover:bg-red-800
                     hover:text-green-400 hover:shadow-lg focus:bg-red-800 focus:shadow-lg 
                    focus:outline-none focus:ring-0 active:bg-red-900 active:shadow-lg transition
                    duration-150 ease-in-out justify-center items-center hover:scale-95">Read more
                    </button>
                </a>
            </template>
        </NewsCard>
        <NewsCard>
            <template #image>
                <img :src="newsStore.urlToImage9" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2 dark:text-white">{{newsStore.title9}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4 dark:text-white">{{newsStore.description9}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold dark:text-white">Source: {{newsStore.source9}}</p>
            </template>
            <template #date>
                <p class="text-gray-700 dark:text-white">Date Published: {{newsStore.datePublished9}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url9">
                    <button class="bg-red-700 text-white mt-4 inline-block px-6 py-2.5 font-medium 
                    text-xs leading-tight uppercase rounded shadow-md hover:bg-red-800
                     hover:text-green-400 hover:shadow-lg focus:bg-red-800 focus:shadow-lg 
                    focus:outline-none focus:ring-0 active:bg-red-900 active:shadow-lg transition
                    duration-150 ease-in-out justify-center items-center hover:scale-95">Read more
                    </button>
                </a>
            </template>
        </NewsCard>
      
    </div>
    
<Footer/>
</template>

<style>
    
</style>