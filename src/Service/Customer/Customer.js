import http from "../http";

export const apiGetCustomer = () => {
  return http.get("/customer.php");
};

export const apiUpdateCustomer = ( idcus, username, data) => {
    return http.put('/customer.php', {idcus ,username ,  ...data});
}

export const apiDeleteCusbyID = (idcus) => {
    return http.delete(`/customer.php?idcus=${idcus}`);
  };
  