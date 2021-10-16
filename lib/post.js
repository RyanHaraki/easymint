// WORK ON THIS TMR

import axios from "axios";

const form = new FormData();
form.append("file", "");

const options = {
  method: "POST",
  url: "https://api.nftport.xyz/v0/mints/easy/files",
  params: { chain: "polygon" },
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: "a81e18c2-87a7-414f-bdec-5c02489b34ee",
    "content-type": "multipart/form-data; boundary=---011000010111000001101001",
  },
  data: "[form]",
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
