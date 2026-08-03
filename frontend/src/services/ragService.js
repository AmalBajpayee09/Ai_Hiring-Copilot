import api from "./api";

export const askResume = (data) =>
    api.post("/rag/ask", data);