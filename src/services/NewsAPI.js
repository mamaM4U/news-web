import axios from "axios";

function getNews(){
    const apiKey = "347d9cd586994981ab7a7298d912edd8";
    const res = axios.get(`https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`).then((response) => response.data.articles).catch((error) => console.log(error))
    return res ;
}

export default {getNews};