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

        title11: "",
        description11: "",
        url11: "",
        urlToImage11: "",
        datePublished11: "",
        source11: "",

        title12: "",
        description12: "",
        url12: "",
        urlToImage12: "",
        datePublished12: "",
        source12: "",

        title13: "",
        description13: "",
        url13: "",
        urlToImage13: "",
        datePublished13: "",
        source13: "",

        title14: "",
        description14: "",
        url14: "",
        urlToImage14: "",
        datePublished14: "",
        source14: "",

        title15: "",
        description15: "",
        url15: "",
        urlToImage15: "",
        datePublished15: "",
        source15: "",

        title16: "",
        description16: "",
        url16: "",
        urlToImage16: "",
        datePublished16: "",
        source16: "",

        title17: "",
        description17: "",
        url17: "",
        urlToImage17: "",
        datePublished17: "",
        source17: "",

        title18: "",
        description18: "",
        url18: "",
        urlToImage18: "",
        datePublished18: "",
        source18: "",

        title19: "",
        description19: "",
        url19: "",
        urlToImage19: "",
        datePublished19: "",
        source19: "",

        title20: "",
        description20: "",
        url20: "",
        urlToImage20: "",
        datePublished20: "",
        source20: "",

        title21: "",
        description21: "",
        url21: "",
        urlToImage21: "",
        datePublished21: "",
        source21: "",

        title22: "",
        description22: "",
        url22: "",
        urlToImage22: "",
        datePublished22: "",
        source22: "",

        title23: "",
        description23: "",
        url23: "",
        urlToImage23: "",
        datePublished23: "",
        source23: "",

        title24: "",
        description24: "",
        url24: "",
        urlToImage24: "",
        datePublished24: "",
        source24: "",

        title25: "",
        description25: "",
        url25: "",
        urlToImage25: "",
        datePublished25: "",
        source25: "",

        title26: "",
        description26: "",
        url26: "",
        urlToImage26: "",
        datePublished26: "",
        source26: "",

        title27: "",
        description27: "",
        url27: "",
        urlToImage27: "",
        datePublished27: "",
        source27: "",

        title28: "",
        description28: "",
        url28: "",
        urlToImage28: "",
        datePublished28: "",
        source28: "",

        title29: "",
        description29: "",
        url29: "",
        urlToImage29: "",
        datePublished29: "",
        source29: "",

        title30: "",
        description30: "",
        url30: "",
        urlToImage30: "",
        datePublished30: "",
        source30: "",

        title31: "",
        description31: "",
        url31: "",
        urlToImage31: "",
        datePublished31: "",
        source31: "",
    }),
    actions: {
         getTopHeadlines () {
            fetch(`https://newsapi.org/v2/everything?q=crypto&from=2022-10-14&sortBy=popularity&apiKey=${this.apiKey}`)
            .then(res => res.json())
            .then((res) => {
              this.datePublished = res.articles[50].publishedAt;
              this.source = res.articles[50].source.name;
              this.description = res.articles[50].description
              this.urlToImage = res.articles[50].urlToImage
              this.title = res.articles[50].title
              this.url = res.articles[50].url

              this.datePublished1 = res.articles[1].publishedAt;
              this.source1 = res.articles[1].source.name;
              this.description1 = res.articles[1].description
              this.urlToImage1 = res.articles[1].urlToImage
              this.title1 = res.articles[1].title
              this.url1 = res.articles[1].url

              this.datePublished2 = res.articles[2].publishedAt;
              this.source2 = res.articles[2].source.name;
              this.description2 = res.articles[2].description
              this.urlToImage2 = res.articles[2].urlToImage
              this.title2 = res.articles[2].title
              this.url2 = res.articles[2].url

              this.datePublished3 = res.articles[3].publishedAt;
              this.source3 = res.articles[3].source.name;
              this.description3 = res.articles[3].description
              this.urlToImage3 = res.articles[3].urlToImage
              this.title3 = res.articles[3].title
              this.url3 = res.articles[3].url

              this.datePublished4 = res.articles[4].publishedAt;
              this.source4 = res.articles[4].source.name;
              this.description4 = res.articles[4].description
              this.urlToImage4 = res.articles[4].urlToImage
              this.title4 = res.articles[4].title
              this.url4 = res.articles[4].url

              this.datePublished5 = res.articles[5].publishedAt;
              this.source5 = res.articles[5].source.name;
              this.description5 = res.articles[5].description
              this.urlToImage5 = res.articles[5].urlToImage
              this.title5 = res.articles[5].title
              this.url5 = res.articles[5].url

              this.datePublished6 = res.articles[6].publishedAt;
              this.source6 = res.articles[6].source.name;
              this.description6 = res.articles[6].description
              this.urlToImage6 = res.articles[6].urlToImage
              this.title6 = res.articles[6].title
              this.url6 = res.articles[6].url

              this.datePublished7 = res.articles[7].publishedAt;
              this.source7 = res.articles[7].source.name;
              this.description7 = res.articles[7].description
              this.urlToImage7 = res.articles[7].urlToImage
              this.title7 = res.articles[7].title
              this.url7 = res.articles[7].url

              this.datePublished8 = res.articles[8].publishedAt;
              this.source8 = res.articles[8].source.name;
              this.description8 = res.articles[8].description
              this.urlToImage8 = res.articles[8].urlToImage
              this.title8 = res.articles[8].title
              this.url8 = res.articles[8].url

              this.datePublished9 = res.articles[9].publishedAt;
              this.source9 = res.articles[9].source.name;
              this.description9 = res.articles[9].description
              this.urlToImage9 = res.articles[9].urlToImage
              this.title9 = res.articles[9].title
              this.url9 = res.articles[9].url

              this.datePublished110 = res.articles[10].publishedAt;
              this.source10 = res.articles[10].source.name;
              this.description10 = res.articles[10].description
              this.urlToImage10 = res.articles[10].urlToImage
              this.title10 = res.articles[10].title
              this.url10 = res.articles[10].url

              this.datePublished11 = res.articles[11].publishedAt;
              this.source11 = res.articles[11].source.name;
              this.description11 = res.articles[11].description
              this.urlToImage11 = res.articles[11].urlToImage
              this.title11 = res.articles[11].title
              this.url11 = res.articles[11].url

              this.datePublished12 = res.articles[12].publishedAt;
              this.source12 = res.articles[12].source.name;
              this.description12 = res.articles[12].description
              this.urlToImage12 = res.articles[12].urlToImage
              this.title12 = res.articles[12].title
              this.url12 = res.articles[12].url
              
              this.datePublished13 = res.articles[13].publishedAt;
              this.source13 = res.articles[13].source.name;
              this.description12 = res.articles[13].description
              this.urlToImage13 = res.articles[13].urlToImage
              this.title13 = res.articles[13].title
              this.url13 = res.articles[13].url

              this.datePublished14 = res.articles[14].publishedAt;
              this.source14 = res.articles[14].source.name;
              this.description14 = res.articles[14].description
              this.urlToImage14 = res.articles[14].urlToImage
              this.title14 = res.articles[14].title
              this.url14 = res.articles[14].url

              this.datePublished15 = res.articles[15].publishedAt;
              this.source15 = res.articles[15].source.name;
              this.description15 = res.articles[15].description
              this.urlToImage15 = res.articles[15].urlToImage
              this.title15 = res.articles[15].title
              this.url15 = res.articles[15].url

              this.datePublished16 = res.articles[16].publishedAt;
              this.source16 = res.articles[16].source.name;
              this.description16 = res.articles[16].description
              this.urlToImage16 = res.articles[16].urlToImage
              this.title16 = res.articles[16].title
              this.url16 = res.articles[16].url

              this.datePublished17 = res.articles[17].publishedAt;
              this.source17 = res.articles[17].source.name;
              this.description17= res.articles[17].description
              this.urlToImage17 = res.articles[17].urlToImage
              this.title17 = res.articles[17].title
              this.url17 = res.articles[17].url

              this.datePublished18 = res.articles[18].publishedAt;
              this.source18 = res.articles[18].source.name;
              this.description18 = res.articles[18].description
              this.urlToImage18 = res.articles[18].urlToImage
              this.title18 = res.articles[18].title
              this.url18 = res.articles[18].url

              this.datePublished19 = res.articles[19].publishedAt;
              this.source19 = res.articles[19].source.name;
              this.description19 = res.articles[19].description
              this.urlToImage19 = res.articles[19].urlToImage
              this.title19 = res.articles[19].title
              this.url19 = res.articles[19].url

              this.datePublished20 = res.articles[20].publishedAt;
              this.source20 = res.articles[20].source.name;
              this.description20 = res.articles[20].description
              this.urlToImage20 = res.articles[20].urlToImage
              this.title20 = res.articles[20].title
              this.url20 = res.articles[20].url

              this.datePublished21 = res.articles[21].publishedAt;
              this.source21 = res.articles[21].source.name;
              this.description21 = res.articles[21].description
              this.urlToImage21 = res.articles[21].urlToImage
              this.title21 = res.articles[21].title
              this.url21 = res.articles[21].url

              this.datePublished21 = res.articles[21].publishedAt;
              this.source21 = res.articles[21].source.name;
              this.description21 = res.articles[21].description
              this.urlToImage21 = res.articles[21].urlToImage
              this.title21 = res.articles[21].title
              this.url21 = res.articles[21].url

              this.datePublished22 = res.articles[22].publishedAt;
              this.source22 = res.articles[22].source.name;
              this.description22 = res.articles[22].description
              this.urlToImage22 = res.articles[22].urlToImage
              this.title22 = res.articles[22].title
              this.url22 = res.articles[22].url

              this.datePublished23 = res.articles[23].publishedAt;
              this.source23 = res.articles[23].source.name;
              this.description23 = res.articles[23].description
              this.urlToImage23 = res.articles[23].urlToImage
              this.title23 = res.articles[23].title
              this.url23 = res.articles[23].url

              this.datePublished24 = res.articles[24].publishedAt;
              this.source24 = res.articles[24].source.name;
              this.description24 = res.articles[24].description
              this.urlToImage24 = res.articles[24].urlToImage
              this.title24 = res.articles[24].title
              this.url24 = res.articles[24].url

              this.datePublished25 = res.articles[25].publishedAt;
              this.source25 = res.articles[25].source.name;
              this.description25 = res.articles[25].description
              this.urlToImage25 = res.articles[25].urlToImage
              this.title25 = res.articles[25].title
              this.url25 = res.articles[25].url

              this.datePublished26 = res.articles[26].publishedAt;
              this.source26 = res.articles[26].source.name;
              this.description26 = res.articles[26].description
              this.urlToImage26 = res.articles[26].urlToImage
              this.title26 = res.articles[26].title
              this.url26 = res.articles[26].url

              this.datePublished27 = res.articles[27].publishedAt;
              this.source27 = res.articles[27].source.name;
              this.description27 = res.articles[27].description
              this.urlToImage27 = res.articles[27].urlToImage
              this.title27 = res.articles[27].title
              this.url27 = res.articles[27].url

              this.datePublished28 = res.articles[28].publishedAt;
              this.source28 = res.articles[28].source.name;
              this.description28 = res.articles[28].description
              this.urlToImage28 = res.articles[28].urlToImage
              this.title28 = res.articles[28].title
              this.url28 = res.articles[28].url

              this.datePublished29 = res.articles[29].publishedAt;
              this.source29 = res.articles[29].source.name;
              this.description29 = res.articles[29].description
              this.urlToImage29 = res.articles[29].urlToImage
              this.title29 = res.articles[29].title
              this.url29 = res.articles[29].url

              this.datePublished30 = res.articles[30].publishedAt;
              this.source30 = res.articles[30].source.name;
              this.description30 = res.articles[30].description
              this.urlToImage30 = res.articles[30].urlToImage
              this.title30 = res.articles[30].title
              this.url30 = res.articles[30].url

              this.datePublished30 = res.articles[31].publishedAt;
              this.source30 = res.articles[31].source.name;
              this.description30 = res.articles[31].description
              this.urlToImage30 = res.articles[31].urlToImage
              this.title30 = res.articles[31].title
              this.url30 = res.articles[31].url
            })
            .catch(err => {
              console.log(err)
            })
          }
    }
})