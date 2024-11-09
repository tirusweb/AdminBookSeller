import React from "react";
import http from "../http";

export const apiGetUser = () => {
  return http.get("/user.php");
};

export const apiGetUserByname = (username) => {
  return http.get(`/updateuser.php?username=${username}`);
};

export const apiUpdateUser = (username, data) => {
  return http.post(`/updateuser.php`, { username, ...data });
};

export const apiDeleteUserByname = (username) => {
  return http.delete(`/updateuser.php?username=${username}`);
};


// login admin
export const apiLoginAdmin = (username, pass) => {
  return http.get('/admin.php', {
      params: {
          username: username,
          pass: pass,
      },
  });
};