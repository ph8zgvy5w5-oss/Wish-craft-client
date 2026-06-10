import axios from "axios";

const api = axios.create({
    baseURL: "https://wish-craft-server.onrender.com"
})

export default api