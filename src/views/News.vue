<script setup>
import NewsCard from '../components/NewsCard.vue';
import Footer from '../components/Footer.vue';
import { useNewsStore } from '../stores/newStore';

const newsStore = useNewsStore()

</script>

<template>
    <h1 class="text-3xl py-6 font-bold text-gray-700 text-center">Top headlines in crypto</h1>
    <hr>
    <div class="grid grid-cols-1 px-8 justify-center md:grid-cols-3 md:gap-3">
        <NewsCard/>
        <NewsCard>
            <template #image>
                <img :src="newsStore.urlToImage1" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title1}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description1}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source1}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished}}</p>
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
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title2}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description2}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source2}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished2}}</p>
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
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title3}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description3}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source3}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished3}}</p>
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
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title4}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description4}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source4}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished4}}</p>
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
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title5}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description5}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source5}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished5}}</p>
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
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title6}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description6}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source6}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished6}}</p>
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
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title7}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description7}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source7}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished7}}</p>
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
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title8}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description8}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source8}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished8}}</p>
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
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title9}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description9}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source9}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished9}}</p>
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
                <img :src="newsStore.urlToImage10" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title10}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description10}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source10}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished10}}</p>
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
                <img :src="newsStore.urlToImage11" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title11}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description11}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source11}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished11}}</p>
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
                <img :src="newsStore.urlToImage12" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title12}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description12}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source12}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished12}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url12">
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
                <img :src="newsStore.urlToImage13" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title13}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description13}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source13}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished13}}</p>
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
                <img :src="newsStore.urlToImage14" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title14}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description14}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source14}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished14}}</p>
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
                <img :src="newsStore.urlToImage15" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title15}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description15}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source15}} </p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished15}}</p>
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
                <img :src="newsStore.urlToImage16" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title16}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description16}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source16}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished16}}</p>
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
                <img :src="newsStore.urlToImage17" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title17}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description17}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source17}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished17}}</p>
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
                <img :src="newsStore.urlToImage18" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title18}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description18}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source18}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished18}}</p>
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
                <img :src="newsStore.urlToImage19" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title19}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description19}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source19}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished19}}</p>
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
                <img :src="newsStore.urlToImage20" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title20}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description20}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source20}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished20}}</p>
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
                <img :src="newsStore.urlToImage21" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title21}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description21}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source21}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished21}}</p>
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
        <NewsCard>
            <template #image>
                <img :src="newsStore.urlToImage22" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title22}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description22}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source22}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished22}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url22">
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
                <img :src="newsStore.urlToImage22" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title22}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description22}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source22}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished22}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url22">
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
                <img :src="newsStore.urlToImage23" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title23}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description23}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source23}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished23}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url23">
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
                <img :src="newsStore.urlToImage24" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title24}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description24}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source24}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished24}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url24">
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
                <img :src="newsStore.urlToImage25" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title25}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description25}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source25}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished25}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url25">
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
                <img :src="newsStore.urlToImage26" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title26}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description26}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source26}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished26}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url26">
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
                <img :src="newsStore.urlToImage27" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title27}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description27}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source27}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished27}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url27">
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
                <img :src="newsStore.urlToImage28" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title28}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description28}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source28}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished28}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url28">
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
                <img :src="newsStore.urlToImage29" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title29}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description29}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source29}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished29}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url29">
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
                <img :src="newsStore.urlToImage30" class="rounded-t-lg" alt=""/>
            </template>
            <template #title>
                <h5 class="text-gray-900 text-xl font-medium mb-2">{{newsStore.title30}}</h5>
            </template>
            <template #description>
                <p class="text-gray-700 text-lg mb-4">{{newsStore.description30}}</p>
            </template>
            <template #source>
                <p class="pb-4 text-gray-700 font-semibold">Source: {{newsStore.source30}}</p>
            </template>
            <template #date>
                <p class="text-gray-700">Date Published: {{newsStore.datePublished30}}</p>
            </template>
            <template #url>
                <a :href="newsStore.url30">
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