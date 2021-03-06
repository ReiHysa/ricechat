import axios from "axios";
import { getToken } from "./auth";

export const fetchAllUsers = async () => {
  const config = {
    method: "get",
    url: `https://rice-chat.herokuapp.com/api/`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios(config);
  return response.data;
};

export const deleteMessage = async (id) => {
  const config = {
    method: "delete",
    url: `https://rice-chat.herokuapp.com/api/messages/${id}/`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios(config);
  return response.data;
};

export const deleteAChat = async (id) => {
  const config = {
    method: "delete",
    url: `https://rice-chat.herokuapp.com/api/chats/${id}/`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios(config);
  return response.data;
};

export const fetchAllChats = async () => {
  const config = {
    method: "get",
    url: `https://rice-chat.herokuapp.com/api/chats/`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios(config);
  return response.data;
};

export const fetchUserChats = async (id) => {
  const config = {
    method: "get",
    url: `https://rice-chat.herokuapp.com/api/${id}/`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios(config);
  return response.data.chats;
};

export const fetchChat = async (id) => {
  const config = {
    method: "get",
    url: `https://rice-chat.herokuapp.com/api/chats/${id}/`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios(config);
  return response.data;
};

export const fetchAllMessages = async () => {
  const config = {
    method: "get",
    url: `https://rice-chat.herokuapp.com/api/messages/`,
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios(config);
  return response.data;
};

export const postMessageToChat = async (data, id) => {
  return makeAxiosRequest(`chats/${id}`, data);
};

export const createMessage = async (data) => {
  const config = {
    method: "post",
    url: `https://rice-chat.herokuapp.com/api/messages/`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    },
    data: data,
  };
  const response = await axios(config);
  return response.data;
};

export const createChat = async (id) => {
  const config = {
    method: "post",
    url: `https://rice-chat.herokuapp.com/api/${id}/chats/`,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    },
  };
  const response = await axios(config);
  return response.data;
};

export const updateChats = async (id, data) => {
  const config = {
    method: "post",
    url: `https://rice-chat.herokuapp.com/api/${id}/`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  const response = await axios(config);
  return response.data;
};

export const login = async (data) => {
  return makeAxiosRequest("login", data);
};

export const register = async (data) => {
  return makeAxiosRequest("register", data);
};

export const makeAxiosRequest = async (url, data) => {
  const config = getAxiosRequestConfig(url, data);

  const response = await axios(config);
  return response.data;
};

export const getAxiosRequestConfig = (requestUrl, data, method = "post") => {
  const config = {
    method,
    url: `https://rice-chat.herokuapp.com/api/${requestUrl}/`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  return config;
};
