
const sitiosABloquear = [
  "*://www.youtube.com/*",
    "*://youtube.com/*",
    "*://m.youtube.com/*"
];

const urlAlternativa = "https://www.google.com/";

browser.webRequest.onBeforeRequest.addListener(
  function (detalles) {
    return { redirectUrl: urlAlternativa };
  },
  { urls: sitiosABloquear },
  ["blocking"]
);

