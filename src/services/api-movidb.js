import axios from "axios";

// Usamos o axios para criar uma referência ao endpoint da API/Service (chamada de baseURL) e configuramos também o uso da API key

const apiKey = process.env.EXPO_PUBLIC_API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export { api, apiKey };
