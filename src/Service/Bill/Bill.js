import http from "../http";


export const apiGetBill = () => {
    return http.get("/bill.php");
}

export const apiGetBillS = () => {
    return http.get("/bills.php");
}

export const apiGetBillByStatus = (status) => {
    return http.get(`/billbystatus.php?status=${status}`);
}

export const apiUpdateBill = (idbill, status) => {
    return http.post(`/bills.php`, { idbill, status });
};


export const apiGetBillDate = (dateFrom , dateTo) => {
    return http.get(`/billtodate.php?dateFrom=${dateFrom}&dateTo=${dateTo}`);
}
