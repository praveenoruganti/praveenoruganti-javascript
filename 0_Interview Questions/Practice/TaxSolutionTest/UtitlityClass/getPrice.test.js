const func = require("./stringSort");
const inv = new func();
test("test sorted arrays", () => {
  expect(
    inv.getPrice(["baz bar £12.49", "foo £0.85", "bar baz foo at 11.50"])
  ).toStrictEqual(["12.49", "0.85", "11.50"]);
});
