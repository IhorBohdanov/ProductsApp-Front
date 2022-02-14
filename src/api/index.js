import { queries } from "./queries";
import { BASE_URL, PAGE_SIZE } from "../constants";

const processError = async (res) => {
  const result = await res.json();
  console.log(result)
  
  if (result.errors?.length) {
    const errorsString = result.errors.reduce((prev, cur) => prev + cur.param + ' ' + cur.msg + '\n', '');
    alert(errorsString);
  }
}

const getQueryFromOptions = ({ filters, page }) => {
  let query = '?';
  for (let valueName in filters) {
    if (filters[valueName]) {
      query += `${valueName}=${filters[valueName]}&`
    }
  }

  if (page) {
    query += `page=${page}&`;
    query += `pageSize=${PAGE_SIZE}`;
  }

  return query;
}

export const getProducts = async (options) => {
  const query = getQueryFromOptions(options);
  return await fetch(BASE_URL + queries.PRODUCTS + query)
    .then((res) => {
      if (!res.ok) {
        processError(res);
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

export const getProduct = async ({ id }) => {
  return await fetch(BASE_URL + queries.PRODUCTS + "/" + id)
    .then((res) => {
      if (!res.ok) {
        processError(res);
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

export const deleteProduct = async (id) => {
  return await fetch(BASE_URL + queries.PRODUCTS + "/" + id, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) {
        processError(res);
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

export const createProduct = async (product) => {
  return await fetch(BASE_URL + queries.PRODUCTS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then(async (res) => {
      if (!res.ok) {       
        processError(res); 
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

export const updateProduct = async ({
  id,
  name,
  description,
  price,
  category,
}) => {
  return await fetch(BASE_URL + queries.PRODUCTS + `/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      description,
      price,
      category,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        processError(res);
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

export const getCategories = async () => {
  return await fetch(BASE_URL + queries.CATEGORIES)
    .then((res) => {
      if (!res.ok) {
        processError(res);
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

export const getCategory = async (id) => {
  return await fetch(BASE_URL + queries.CATEGORIES + `/${id}`)
    .then((res) => {
      if (!res.ok) {
        processError(res);
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

export const createCategory = async (category) => {
  return await fetch(BASE_URL + queries.CATEGORIES, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  })
    .then((res) => {
      if (!res.ok) {
        processError(res);
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

export const updateCategory = async ({ id, name }) => {
  return await fetch(BASE_URL + queries.CATEGORIES + `/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  })
    .then((res) => {
      if (!res.ok) {
        processError(res);
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

export const deleteCategory = async (id) => {
  return await fetch(BASE_URL + queries.CATEGORIES + `/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) {
        processError(res);
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      return data;
    });
};
