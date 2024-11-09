import http from "../http";

export const apiGetProduct = () => {
  return http.get("/product.php");
};

export const apiGetDetailProduct = (id) => {
  return http.get(`/detailbook.php?id=${id}`);
};

export const apiGetProductById = (id) => {
    return http.get(`/updateproduct.php?id=${id}`);
  };

  export const apiUpdateBook = (formData) => {
    return http.post("/updatebook.php", formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};

export const apiCreateBook = (formData) => {
  return http.post("/product.php", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const apiCreateDetailBook = (formData) => {
  return http.post("/detailbook.php", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};


export const apiGetProductByType = (type) => {
  return http.get(`/productbytype.php?type=${type}`);
};

export const apiUpdateDetailBook = (formData) => {
  return http.post("/updatedetailbook.php", formData, {
      headers: {
          "Content-Type": "multipart/form-data",
      },
  });
};