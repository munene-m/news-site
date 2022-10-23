// import axios from "axios";
import { createPinia } from "pinia";
import { defineStore } from "pinia";
const pinia = createPinia()
export default pinia

export const useNewsStore = defineStore('stoe',{
    state: () => ({
        apiKey: import.meta.env.VITE_NEWS_API_KEY, 

        title: "",
        description: "",
        url: "",
        urlToImage: "",
        datePublished: "",
        source: "",

        title1: "",
        description1: "",
        url1: "",
        urlToImage1: "",
        datePublished1: "",
        source1: "",
        
        title2: "",
        description2: "",
        url2:"",
        urltoImage2: "",
        datePublished2: "",
        source2: "",

        title3: "",
        description3: "",
        url3: "",
        urlToImage3: "",
        datePublished3: "",
        source3: "",

        title4: "",
        description4: "",
        url4: "",
        urlToImage4: "",
        datePublished4: "",
        source4: "",

        title5: "",
        description5: "",
        url5: "",
        urlToImage5: "",
        datePublished5: "",
        source5: "",

        title6: "",
        description6: "",
        url6: "",
        urlToImage6: "",
        datePublished6: "",
        source6: "",

        title7: "",
        description7: "",
        url7: "",
        urlToImage7: "",
        datePublished7: "",
        source7: "",

        title8: "",
        description8: "",
        url8: "",
        urlToImage8: "",
        datePublished8: "",
        source8: "",

        title9: "",
        description9: "",
        url9: "",
        urlToImage9: "",
        datePublished9: "",
        source9: "",

        title10: "",
        description10: "",
        url10: "",
        urlToImage10: "",
        datePublished10: "",
        source10: "",

    

    }),
    actions: {
         getTopHeadlines () {
            fetch(`https://newsapi.org/v2/top-headlines?q=cryptocurrency&from=2022-10-14&sortBy=popularity&apiKey=${this.apiKey}`)
            .then(res => res.json())
            .then((res) => {
              this.datePublished = res.articles[0].publishedAt;
              this.source = res.articles[0].source.name;
              this.description = res.articles[0].description
              this.urlToImage = res.articles[0].urlToImage
              this.title = res.articles[0].title
              this.url = res.articles[0].url

              this.datePublished1 = res.articles[1].publishedAt;
              this.source1 = res.articles[1].source.name;
              this.description1 = res.articles[1].description
              this.urlToImage1 = res.articles[1].image
              this.title1 = res.articles[1].title
              this.url1 = res.articles[1].url

              this.datePublished2 = res.articles[2].publishedAt;
              this.source2 = res.articles[2].source.name;
              this.description2 = res.articles[2].description
              this.urlToImage2 = res.articles[2].image
              this.title2 = res.articles[2].title
              this.url2 = res.articles[2].url

              this.datePublished3 = res.articles[3].publishedAt;
              this.source3 = res.articles[3].source.name;
              this.description3 = res.articles[3].description
              this.urlToImage3 = res.articles[3].image
              this.title3 = res.articles[3].title
              this.url3 = res.articles[3].url

              this.datePublished4 = res.articles[4].publishedAt;
              this.source4 = res.articles[4].source.name;
              this.description4 = res.articles[4].description
              this.urlToImage4 = res.articles[4].image
              this.title4 = res.articles[4].title
              this.url4 = res.articles[4].url

              this.datePublished5 = res.articles[5].publishedAt;
              this.source5 = res.articles[5].source.name;
              this.description5 = res.articles[5].description
              this.urlToImage5 = res.articles[5].image
              this.title5 = res.articles[5].title
              this.url5 = res.articles[5].url

              this.datePublished6 = res.articles[6].publishedAt;
              this.source6 = res.articles[6].source.name;
              this.description6 = res.articles[6].description
              this.urlToImage6 = res.articles[6].image
              this.title6 = res.articles[6].title
              this.url6 = res.articles[6].url

              this.datePublished7 = res.articles[7].publishedAt;
              this.source7 = res.articles[7].source.name;
              this.description7 = res.articles[7].description
              this.urlToImage7 = res.articles[7].image
              this.title7 = res.articles[7].title
              this.url7 = res.articles[7].url

              this.datePublished8 = res.articles[8].publishedAt;
              this.source8 = res.articles[8].source.name;
              this.description8 = res.articles[8].description
              this.urlToImage8 = res.articles[8].image
              this.title8 = res.articles[8].title
              this.url8 = res.articles[8].url

              this.datePublished9 = res.articles[9].publishedAt;
              this.source9 = res.articles[9].source.name;
              this.description9 = res.articles[9].description
              this.urlToImage9 = res.articles[9].image
              this.title9 = res.articles[9].title
              this.url9 = res.articles[9].url

              this.datePublished110 = res.articles[10].publishedAt;
              this.source10 = res.articles[10].source.name;
              this.description10 = res.articles[10].description
              this.urlToImage10 = res.articles[10].urlToImage
              this.title10 = res.articles[10].title
              this.url10 = res.articles[10].url


        
            })
            .catch(err => {
              console.log(err)
            })
          }
    }
})