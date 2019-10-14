import CryptoJS from "crypto-js";
const API_URL = "https://api.smsglobal.com/v2/sms/";

const options = {
  url: "/v2/sms/",
  host: "api.smsglobal.com",
  port: "443"
};

export function sendMessage(message, settings) {
  const requestOptions = { ...settings, ...options, method: "POST" };
  return fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `${generateAuthHeader(requestOptions)}`
    },
    body: JSON.stringify(message)
  });
}

function generateAuthHeader({ apiKey, apiSecret, method, url, host, port }) {
  const optionalData = "";
  const nonce = Math.random()
    .toString(36)
    .substring(7);
  const timestamp = Math.floor(Date.now() / 1000);
  let request = `${timestamp}\n${nonce}\n${method}\n${url}\n${host}\n${port}\n${optionalData}\n`;
  var hash = CryptoJS.HmacSHA256(request, apiSecret);
  var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
  return `MAC id="${apiKey}", ts="${timestamp}", nonce="${nonce}", mac="${hashInBase64}"`;
}
