let menu = document.getElementById("icon-menu");
let linksPart = document.querySelector(".nav-links-part");

menu.addEventListener("click", () => {
  linksPart.classList.toggle("hide");
});

linksPart.addEventListener("click", () => {
  linksPart.classList.toggle("hide");
});

/////////////////////////////
const url = "https://url-shortener-service.p.rapidapi.com/shorten";
const options = {
  method: "POST",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "X-RapidAPI-Key": "a486227ea2mshe421b0e17360a4fp10cc5djsn73d41f8a3c59",
    "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
  },
  body: new URLSearchParams({
    url: "https://google.com/",
  }),
};

async function foo() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

foo();
