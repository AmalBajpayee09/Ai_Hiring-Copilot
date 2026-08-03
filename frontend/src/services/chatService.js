import api from "./api";

export const askAI = (data) =>
    api.post("/chat", data);