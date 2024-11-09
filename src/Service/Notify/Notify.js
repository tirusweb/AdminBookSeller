import http from "../http";


export const apiGetNotify = () => {
    return http.get("/notify.php");
}

export const apiDeleteNotify = (id) => {
    return http.delete(`/notify.php?id=${id}`);
}

export const apiAddNotify = (data) => {
    return http.post("/notify.php", data);
}

export const apiGetNotifyByID = (id) => {
    return http.get(`/notifyid.php?id=${id}`);
}

export const apiUpdateNotify = (id, data) => {
    return http.post(`/notifyid.php`, { id, ...data });
};