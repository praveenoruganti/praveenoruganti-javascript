const func = require("./stringSort");
const inv = new func();
test("test sorted arrays", () => {
  expect(
    inv.catString([
      "1 book at £12.49",
      "1 music CD at £14.99",
      "1 chocolate bar at £0.85",
    ])
  ).toStrictEqual([
    ["1 book at £12.49", "1 music CD at £16.49", "1 chocolate bar at £0.85"],
    "Sales Taxes: £1.50",
    "Total: £29.83",
  ]);
});
