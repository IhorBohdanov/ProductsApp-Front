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

export const getProducts = async (options) => {
  return await fetch(BASE_URL + queries.PRODUCTS)
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

export const getProduct = async ({id}) => {
  return await fetch(BASE_URL + queries.PRODUCTS + '/' + id)
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

export const deleteProduct = async (id) => {
  return await fetch(BASE_URL + queries.PRODUCTS + '/' + id, { method: "DELETE"})
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

export const updateProduct = async (product) => {
  console.log('updateProduct', product);
  return await fetch(BASE_URL + queries.PRODUCTS + `/${product.id}`, { 
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(product),
  })
    .then((res) => {
      if(!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      return data;
    })
}

export const getCategories = async () => {
  return await fetch(BASE_URL + queries.CATEGORIES)
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

export const deleteCategory = async (id) => {
  return await fetch(BASE_URL + queries.CATEGORIES + `/${id}`, {
    method: 'DELETE',
  })
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



