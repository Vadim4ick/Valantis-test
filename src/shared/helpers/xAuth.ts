import md5 from "md5";

const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, ""); // Получаем текущий таймштамп в формате ГГГГММДД
const password = "Valantis"; // Пароль для доступа к API
const authString = `${password}_${timestamp}`;
export const xAuth = md5(authString); // Вычисляем MD5-хэш от пароля и таймштампа
