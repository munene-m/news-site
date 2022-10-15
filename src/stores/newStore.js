// import axios from "axios";
import { createPinia } from "pinia";
import { defineStore } from "pinia";
const pinia = createPinia()
export default pinia

export const useNewsStore = defineStore('store',{
    state: () => ({
        
    }),
    actions: {

    }
})