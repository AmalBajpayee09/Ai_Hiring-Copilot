import api from "./api";

export const evaluateCandidate = (data) =>
    api.post("/evaluation", data);