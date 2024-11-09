import React from "react";
import http from "../http";


export const apiGetContact = () => {
    return http.get("/contact.php");
}

export const apiUpdateContact = (id, feedback) => {
    return http.post(`/contact.php`, { id, feedback });
};

export const apiDeleteContact = (id) => {
    return http.delete(`/contact.php?id=${id}`);
}