// import axios from "axios";
import { createPinia } from "pinia";
import { defineStore } from "pinia";
const pinia = createPinia()
export default pinia

export const useNewsStore = defineStore('store',{
    state: () => ({
        author: "",
        title: "",
        description: "",
        url: "",
        urlToImage: "",
        datePublished: ""
    }),
    actions: {
        async fetchTrendingNews() {
            try{
                const res = await fetch("https://newsapi.org/v2/top-headlines?q=Climate&from=2022-10-14&sortBy=popularity&apiKey=79c312aee7bd45849389593d83d5e00a")
                if(!res.status === 200) return
                res.json().then((response) => 
                this.author === response.articles[1].author,
                console.log(this.author)
                // console.log(response.articles[1].author)
                )
                
            } catch (err) {
                console.log(err.message)
            }
        }
    }
})