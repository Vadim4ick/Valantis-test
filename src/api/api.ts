import axios from "axios";
import md5 from "md5";

const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, ""); // Получаем текущий таймштамп в формате ГГГГММДД
const password = "Valantis"; // Пароль для доступа к API
const authString = `${password}_${timestamp}`;
const xAuth = md5(authString); // Вычисляем MD5-хэш от пароля и таймштампа

export const $api = axios.create({
  baseURL: "http://api.valantis.store:40000",
  headers: {
    "X-Auth": xAuth,
  },
});
