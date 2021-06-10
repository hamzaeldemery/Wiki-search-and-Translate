import axios from "axios";

const baseURL = "https://en.wikipedia.org/w/api.php";

export const Wikipedia = axios.create({
    baseURL,
    params: {
        action: "query",
        list: "search",
        format: "json",
    },
});
