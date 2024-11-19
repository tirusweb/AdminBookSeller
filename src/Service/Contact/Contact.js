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

export const apiGetContactUsername = (username) => {
    return http.get(`/contactbyuser.php?username=${username}`);
} 

export const apiSeenContact = (data) => {
    return http.post('/contactbyuser.php', data);
} 

export const apiGetContactLast = (username) => {
    return http.get(`/contactlast.php?username=${username}`);
} 
