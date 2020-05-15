import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID n9mJS6kHxX0auI48OK60ythykL3XRsXMc_XGtzTi32U",
  },
});
