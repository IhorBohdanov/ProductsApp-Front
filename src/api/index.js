import { queries } from "./queries";
import { BASE_URL } from "../constants";

import axios from "axios";

// const options = {
//   method: "GET",
//   mode: "no-cors",
//   credentials: "same-origin",
//   headers: {
//     "Content-Type": "application/x-www-form-urlencoded",
//     "Access-Control-Allow-Origin": "*",
//     Accept: "*/*",
//     "Accept-Encoding": "gzip, deflate, br",
//   },
// };

export const getProducts = () => {
  return fetch(BASE_URL + queries.PRODUCTS)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

export const getProduct = ({id}) => {
  return fetch(BASE_URL + queries.PRODUCTS + '/' + id)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      return data;
    });
}

export const deleteProduct = ({id}) => {
  return fetch(BASE_URL + queries.PRODUCTS + '/' + id, { method: "DELETE"})
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    return data;
  });
}


export const getCategories = () => {
  return fetch(BASE_URL + queries.CATEGORIES)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    return data;
  });
}