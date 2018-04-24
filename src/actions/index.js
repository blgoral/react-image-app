import axios from 'axios'

export const FETCH_DATA = 'fetch_data'




const ROOT_URL = 'https://api.imgur.com/3/gallery/search/top/day?q='
//Imgur access token from .env file
const ACCESS_TOKEN = process.env.ACCESS_TOKEN

export function fetchData (searchTerm) {
  const request = axios({
    method:'get',
    url: `${ROOT_URL}${searchTerm}`,
    headers: { 'Authorization' : `Client-ID ${ACCESS_TOKEN}` }

})
  return {
    type: FETCH_DATA,
    payload: request
  }
}
