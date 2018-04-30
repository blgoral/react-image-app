import _ from 'lodash'
import axios from 'axios'

export const FETCH_DATA = 'fetch_data'




const ROOT_URL = 'https://api.imgur.com/3/gallery/search/top/all?q='
//Imgur access token from .env file
const CLIENT_ID = process.env.CLIENT_ID

export function fetchData (searchTerm) {
  const request = axios({
    method:'get',
    url: `${ROOT_URL}${searchTerm}`,
    headers: { 'Authorization' : `Client-ID ${CLIENT_ID}` }

})


  return {
    type: FETCH_DATA,
    payload: request
  }
}
