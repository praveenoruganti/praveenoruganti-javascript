const func = require("./stringSort");
const inv = new func();
test("test sorted arrays", () => {
  expect(
    inv.applyNewPrice(["1 music CD at £14.99"], [16.49], 0)
  ).toStrictEqual(["1 music CD at £16.49"]);
});
