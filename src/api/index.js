import { queries } from "./queries";
import { BASE_URL } from "../constants";

import axios from 'axios'; 


const instance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});


const options = {
  // method: "GET",
  mode: 'no-cors',
  // credentials: "same-origin",
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  //   'Access-Control-Allow-Origin': '*',
  //   'Accept': '*/*',
  //   'Accept-Encoding': 'gzip, deflate, br',
  },
}

export const getProducts = () => {
  try {

    axios.get('http://localhost:5000/products').then((res) => {
      console.log(res);
    })
    // fetch('http://localhost:5000/products', options)
    //   .then((res) => {
    //     console.log(res)
    //     return res.json()
    //   })
    //   .then((data) => {
    //     console.log(data)
    //   });
    
    // console.log(res);

    // if (!res.ok) {
    //   throw(new Error('Fail'))
    // }
    
    // return await res.json();  
  } catch(err) {
    throw(err)
  }
};
