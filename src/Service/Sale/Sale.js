import http from "../http";


export const apiGetVoucher = () => {
    return http.get("/sale.php");
}

export const apiDeleteVoucher = (idvou) => {
    return http.delete(`/sale.php?idvou=${idvou}`);
}

export const apiAddVoucher = (data) => {
    return http.post("/sale.php", data);
}

export const apiGetVoucherByID = (idvou) => {
    return http.get(`/saleid.php?idvou=${idvou}`);
}

export const apiUpdateVoucher = (idvou, data) => {
    return http.post(`/saleid.php`, { idvou, ...data });
  };
