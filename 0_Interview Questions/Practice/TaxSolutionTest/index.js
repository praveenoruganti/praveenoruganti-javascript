const StringSorter = require("./UtitlityClass/stringSort");

let testCase1 = [
    "1 book at £12.49",
    "1 music CD at £14.99",
    "1 chocolate bar at £0.85",
  ],
  testCase2 = [
    "1 imported box of chocolates at £10.00",
    "1 imported bottle of perfume at £47.50",
  ],
  testCase3 = [
    "1 imported bottle of perfume at £27.99",
    "1 bottle of perfume at £18.99",
    "1 packet of headache pills at £9.75",
    "1 box of imported chocolates at 11.25",
  ];

const app = (inputs) => {
  const st = new StringSorter();
  const outputs = st.catString(inputs);
  console.log("My outputs:", outputs);
};

app(testCase3);
