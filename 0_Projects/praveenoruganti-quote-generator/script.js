let JSON_SOURCE ="./quotes.json";

let fetchJSON = (a) => {
  let f = new XMLHttpRequest();
  f.open("GET", a, false);
  f.send(null);
  return f.responseText;
};

let quotes = JSON.parse(fetchJSON(JSON_SOURCE));

let setQuote = () => {
  let QuoteRandomNumber = Math.floor(Math.random() * quotes.length);

  let randomQuote = quotes[QuoteRandomNumber];

  document.getElementById("quote-body").innerText = randomQuote.quote;

  document.getElementById("quote-speaker").innerText =
    "~" + randomQuote.speaker;
};

document.getElementById("clickme").onclick = function () {
  setQuote();
};

setQuote();
