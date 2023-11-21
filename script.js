let menu = document.getElementById("icon-menu");
let linksPart = document.querySelector(".nav-links-part");

menu.addEventListener("click", () => {
  linksPart.classList.toggle("hide");
});

linksPart.addEventListener("click", () => {
  linksPart.classList.toggle("hide");
});

//////////////////////////////
let input = document.getElementById("input");
let shorentBtn = document.getElementById("shortenBtn");
let copyBtn = document.getElementById("copyBtn");
let link = document.getElementById("link");
let shortLink = document.getElementById("shortLink");
let shortUrls = document.getElementById("shortUrls");
/////////////////////////////

async function copyContent(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}
/////////////////////////////

async function shortenIt() {
  const url = "https://url-shortener-service.p.rapidapi.com/shorten";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "a486227ea2mshe421b0e17360a4fp10cc5djsn73d41f8a3c59",
      "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
    },
    body: new URLSearchParams({
      url: "https://www.youtube.com/",
    }),
  };
  try {
    const response = await fetch(url, options);
    // console.log(response.status);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

shortenIt();
