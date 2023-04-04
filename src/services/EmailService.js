import axios from "axios";

const http = axios.create({
  baseURL: "https://dztsurveying.fly.dev/",
});

export default {
  sendEmail(details) {
    return http.post("/sendEmail", details);
  },
};
