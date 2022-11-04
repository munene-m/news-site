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
                <img v-if="newsStore.image1" :src="newsStore.image1" class="rounded-t-lg" alt=""/>
                <img v-else src="../assets/default.jpg" alt="">
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
                <img v-if="newsStore.image2" :src="newsStore.image2" class="rounded-t-lg" alt=""/>
                <img v-else src="../assets/default.jpg" alt="">
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
                <img v-if="newsStore.image3" :src="newsStore.image3" class="rounded-t-lg" alt=""/>
                <img v-else src="../assets/default.jpg" alt="">
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
                <img v-if="newsStore.image4" :src="newsStore.image4" class="rounded-t-lg" alt=""/>
                <img v-else src="../assets/default.jpg" alt="">
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
                <img v-if="newsStore.image5" :src="newsStore.image5" class="rounded-t-lg" alt=""/>
                <img v-else src="../assets/default.jpg" alt="">
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
                <img v-if="newsStore.image6" :src="newsStore.image6" class="rounded-t-lg" alt=""/>
                <img v-else src="../assets/default.jpg" alt="">
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
                <img v-if="newsStore.image7" :src="newsStore.image7" class="rounded-t-lg" alt=""/>
                <img v-else src="../assets/default.jpg" alt="">
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
                <img v-if="newsStore.image8" :src="newsStore.image8" class="rounded-t-lg" alt=""/>
                <img v-else src="../assets/default.jpg" alt="">
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
                <img v-if="newsStore.image9" :src="newsStore.image9" class="rounded-t-lg" alt=""/>
                <img v-else src="../assets/default.jpg" alt="">
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
        <NewsCard>
            <template #image>
                <img v-if="newsStore.image10" :src="newsStore.image10" class="rounded-t-lg" alt=""/>
                <img v-else src="../assets/default.jpg" alt="">
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2 dark:text-white">{{newsStore.title10}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4 dark:text-white">{{newsStore.description10}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold dark:text-white">Source: {{newsStore.source10}}</p>
            </template>
            <template #date>
                <p class="text-gray-700 dark:text-white">Date Published: {{newsStore.datePublished10}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url10">
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
                <img v-if="newsStore.image11" :src="newsStore.image11" class="rounded-t-lg" alt=""/>
                <img v-else src="../assets/default.jpg" alt="">
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2 dark:text-white">{{newsStore.title11}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4 dark:text-white">{{newsStore.description11}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold dark:text-white">Source: {{newsStore.source11}}</p>
            </template>
            <template #date>
                <p class="text-gray-700 dark:text-white">Date Published: {{newsStore.datePublished11}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url11">
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
                <img v-if="newsStore.image12" :src="newsStore.image12" class="rounded-t-lg" alt=""/>
                <img v-else src="../assets/default.jpg" alt="">
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2 dark:text-white">{{newsStore.title13}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4 dark:text-white">{{newsStore.description13}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold dark:text-white">Source: {{newsStore.source13}}</p>
            </template>
            <template #date>
                <p class="text-gray-700 dark:text-white">Date Published: {{newsStore.datePublished13}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url13">
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
                <img v-if="newsStore.image14" :src="newsStore.image14" class="rounded-t-lg" alt=""/>
                <img v-else src="../assets/default.jpg" alt="">
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2 dark:text-white">{{newsStore.title14}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4 dark:text-white">{{newsStore.description14}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold dark:text-white">Source: {{newsStore.source14}}</p>
            </template>
            <template #date>
                <p class="text-gray-700 dark:text-white">Date Published: {{newsStore.datePublished14}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url14">
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
                <img v-if="newsStore.image15" :src="newsStore.image15" class="rounded-t-lg" alt=""/>
                <img v-else src="../assets/default.jpg" alt="">
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2 dark:text-white">{{newsStore.title15}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4 dark:text-white">{{newsStore.description15}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold dark:text-white">Source: {{newsStore.source15}}</p>
            </template>
            <template #date>
                <p class="text-gray-700 dark:text-white">Date Published: {{newsStore.datePublished15}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url15">
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
                <img v-if="newsStore.image16" :src="newsStore.image16" class="rounded-t-lg" alt=""/>
                <img v-else src="../assets/default.jpg" alt="">
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2 dark:text-white">{{newsStore.title16}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4 dark:text-white">{{newsStore.description16}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold dark:text-white">Source: {{newsStore.source16}}</p>
            </template>
            <template #date>
                <p class="text-gray-700 dark:text-white">Date Published: {{newsStore.datePublished16}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url16">
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
                <img v-if="newsStore.image17" :src="newsStore.image17" class="rounded-t-lg" alt=""/>
                <img v-else src="../assets/default.jpg" alt="">
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2 dark:text-white">{{newsStore.title17}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4 dark:text-white">{{newsStore.description17}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold dark:text-white">Source: {{newsStore.source17}}</p>
            </template>
            <template #date>
                <p class="text-gray-700 dark:text-white">Date Published: {{newsStore.datePublished17}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url17">
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
                <img v-if="newsStore.image18" :src="newsStore.image18" class="rounded-t-lg" alt=""/>
                <img v-else src="../assets/default.jpg" alt="">
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2 dark:text-white">{{newsStore.title18}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4 dark:text-white">{{newsStore.description18}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold dark:text-white">Source: {{newsStore.source18}}</p>
            </template>
            <template #date>
                <p class="text-gray-700 dark:text-white">Date Published: {{newsStore.datePublished18}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url18">
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
                <img v-if="newsStore.image19" :src="newsStore.image19" class="rounded-t-lg" alt=""/>
                <img v-else src="../assets/default.jpg" alt="">
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2 dark:text-white">{{newsStore.title19}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4 dark:text-white">{{newsStore.description19}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold dark:text-white">Source: {{newsStore.source19}}</p>
            </template>
            <template #date>
                <p class="text-gray-700 dark:text-white">Date Published: {{newsStore.datePublished19}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url19">
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
                <img v-if="newsStore.image20" :src="newsStore.image20" class="rounded-t-lg" alt=""/>
                <img v-else src="../assets/default.jpg" alt="">
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2 dark:text-white">{{newsStore.title20}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4 dark:text-white">{{newsStore.description20}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold dark:text-white">Source: {{newsStore.source20}}</p>
            </template>
            <template #date>
                <p class="text-gray-700 dark:text-white">Date Published: {{newsStore.datePublished20}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url20">
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
                <img v-if="newsStore.image21" :src="newsStore.image21" class="rounded-t-lg" alt=""/>
                <img v-else src="../assets/default.jpg" alt="">
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2 dark:text-white">{{newsStore.title21}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4 dark:text-white">{{newsStore.description21}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold dark:text-white">Source: {{newsStore.source21}}</p>
            </template>
            <template #date>
                <p class="text-gray-700 dark:text-white">Date Published: {{newsStore.datePublished21}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url21">
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