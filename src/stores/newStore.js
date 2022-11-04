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
        image: "",
        datePublished: "",
        source: "",

        title1: "",
        description1: "",
        url1: "",
        image1: "",
        datePublished1: "",
        source1: "",
        
        title2: "",
        description2: "",
        url2:"",
        image2: "",
        datePublished2: "",
        source2: "",

        title3: "",
        description3: "",
        url3: "",
        image3: "",
        datePublished3: "",
        source3: "",

        title4: "",
        description4: "",
        url4: "",
        image4: "",
        datePublished4: "",
        source4: "",

        title5: "",
        description5: "",
        url5: "",
        image5: "",
        datePublished5: "",
        source5: "",

        title6: "",
        description6: "",
        url6: "",
        image6: "",
        datePublished6: "",
        source6: "",

        title7: "",
        description7: "",
        url7: "",
        image7: "",
        datePublished7: "",
        source7: "",

        title8: "",
        description8: "",
        url8: "",
        image8: "",
        datePublished8: "",
        source8: "",

        title9: "",
        description9: "",
        url9: "",
        image9: "",
        datePublished9: "",
        source9: "",

        title10: "",
        description10: "",
        url10: "",
        image10: "",
        datePublished10: "",
        source10: "",

        title11: "",
        description11: "",
        url11: "",
        image11: "",
        datePublished11: "",
        source11: "",

        title12: "",
        description12: "",
        url12: "",
        image12: "",
        datePublished12: "",
        source12: "",

        title13: "",
        description13: "",
        url13: "",
        image13: "",
        datePublished13: "",
        source13: "",

        title14: "",
        description14: "",
        url14: "",
        image14: "",
        datePublished14: "",
        source14: "",

        title15: "",
        description15: "",
        url15: "",
        image15: "",
        datePublished15: "",
        source15: "",

        title15: "",
        description15: "",
        url15: "",
        image15: "",
        datePublished15: "",
        source15: "",

        title16: "",
        description16: "",
        url16: "",
        image16: "",
        datePublished16: "",
        source16: "",

        title17: "",
        description17: "",
        url17: "",
        image17: "",
        datePublished17: "",
        source17: "",

        title18: "",
        description18: "",
        url18: "",
        image18: "",
        datePublished18: "",
        source18: "",

        title19: "",
        description19: "",
        url19: "",
        image19: "",
        datePublished19: "",
        source19: "",

        title20: "",
        description20: "",
        url20: "",
        image20: "",
        datePublished20: "",
        source20: "",

        title21: "",
        description21: "",
        url21: "",
        image21: "",
        datePublished21: "",
        source21: "",

        dateNow: new Date().toISOString().split('T')

    }),
    actions: {
         getTopHeadlines () {
            fetch(`http://api.mediastack.com/v1/news?access_key=${this.apiKey}&languages=en&date=2021-07-24,${this.dateNow}&categories=technology`)
            .then(res => res.json())
            .then((res) => {
              console.log(res)
              this.datePublished = res.data[0].published_at;
              this.source = res.data[0].source;
              this.description = res.data[0].description
              this.image = res.data[0].image
              this.title = res.data[0].title
              this.url = res.data[0].url

              this.datePublished1 = res.data[1].published_at;
              this.source1 = res.data[1].source;
              this.description1 = res.data[1].description
              this.image1 = res.data[1].image
              this.title1 = res.data[1].title
              this.url1 = res.data[1].url

              this.datePublished2 = res.data[2].published_at;
              this.source2 = res.data[2].source;
              this.description2 = res.data[2].description
              this.image2 = res.data[2].image
              this.title2 = res.data[2].title
              this.url2 = res.data[2].url

              this.datePublished3 = res.data[3].published_at;
              this.source3 = res.data[3].source;
              this.description3 = res.data[3].description
              this.image3 = res.data[3].image
              this.title3 = res.data[3].title
              this.url3 = res.data[3].url

              this.datePublished4 = res.data[4].published_at;
              this.source4 = res.data[4].source;
              this.description4 = res.data[4].description
              this.image4 = res.data[4].image
              this.title4 = res.data[4].title
              this.url4 = res.data[4].url

              this.datePublished5 = res.data[5].published_at;
              this.source5 = res.data[5].source;
              this.description5 = res.data[5].description
              this.image5 = res.data[5].image
              this.title5 = res.data[5].title
              this.url5 = res.data[5].url

              this.datePublished6 = res.data[6].published_at;
              this.source6 = res.data[6].source;
              this.description6 = res.data[6].description
              this.image6 = res.data[6].image
              this.title6 = res.data[6].title
              this.url6 = res.data[6].url

              this.datePublished7 = res.data[7].published_at;
              this.source7 = res.data[7].source;
              this.description7 = res.data[7].description
              this.image7 = res.data[7].image
              this.title7 = res.data[7].title
              this.url7 = res.data[7].url

              this.datePublished8 = res.data[8].published_at;
              this.source8 = res.data[8].source;
              this.description8 = res.data[8].description
              this.image8 = res.data[8].image
              this.title8 = res.data[8].title
              this.url8 = res.data[8].url

              this.datePublished9 = res.data[9].published_at;
              this.source9 = res.data[9].source;
              this.description9 = res.data[9].description
              this.image9 = res.data[9].image
              this.title9 = res.data[9].title
              this.url9 = res.data[9].url

              this.datePublished10 = res.data[10].published_at;
              this.source10 = res.data[10].source;
              this.description10 = res.data[10].description
              this.image10 = res.data[10].image
              this.title10 = res.data[10].title
              this.url10 = res.data[10].url

              this.datePublished11 = res.data[11].published_at;
              this.source11 = res.data[11].source;
              this.description11 = res.data[11].description
              this.image11 = res.data[11].image
              this.title11 = res.data[11].title
              this.url11 = res.data[11].url

              this.datePublished12 = res.data[12].published_at;
              this.source12 = res.data[12].source;
              this.description12 = res.data[12].description
              this.image12 = res.data[12].image
              this.title12 = res.data[12].title
              this.url12 = res.data[12].url

              this.datePublished13 = res.data[13].published_at;
              this.source14 = res.data[14].source;
              this.description14 = res.data[14].description
              this.image14 = res.data[14].image
              this.title14 = res.data[14].title
              this.url14 = res.data[14].url

              this.datePublished14 = res.data[14].published_at;
              this.source13 = res.data[13].source;
              this.description13 = res.data[13].description
              this.image13 = res.data[13].image
              this.title13 = res.data[13].title
              this.url13 = res.data[13].url

              this.datePublished15 = res.data[15].published_at;
              this.source15 = res.data[15].source;
              this.description15 = res.data[15].description
              this.image15 = res.data[15].image
              this.title15 = res.data[15].title
              this.url15 = res.data[15].url

              this.datePublished16 = res.data[16].published_at;
              this.source16 = res.data[16].source;
              this.description16 = res.data[16].description
              this.image16 = res.data[16].image
              this.title16 = res.data[16].title
              this.url16 = res.data[16].url

              this.datePublished17 = res.data[17].published_at;
              this.source17 = res.data[17].source;
              this.description17 = res.data[17].description
              this.image17 = res.data[17].image
              this.title17 = res.data[17].title
              this.url17 = res.data[17].url

              this.datePublished18 = res.data[18].published_at;
              this.source18 = res.data[18].source;
              this.description18 = res.data[18].description
              this.image18 = res.data[18].image
              this.title18 = res.data[18].title
              this.url18 = res.data[18].url

              this.datePublished19 = res.data[19].published_at;
              this.source10 = res.data[19].source;
              this.description19 = res.data[19].description
              this.image19 = res.data[19].image
              this.title19 = res.data[19].title
              this.url19 = res.data[19].url

              this.datePublished20 = res.data[20].published_at;
              this.source20 = res.data[20].source;
              this.description20 = res.data[20].description
              this.image20 = res.data[20].image
              this.title20 = res.data[20].title
              this.url20 = res.data[20].url

              this.datePublished21 = res.data[21].published_at;
              this.source21 = res.data[21].source;
              this.description21 = res.data[21].description
              this.image21 = res.data[21].image
              this.title21 = res.data[21].title
              this.url21 = res.data[21].url       
            })
            .catch(err => {
              console.log(err)
            })
          }
    }
})