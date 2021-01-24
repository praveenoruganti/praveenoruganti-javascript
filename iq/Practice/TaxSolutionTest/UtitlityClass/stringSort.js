const { string } = require("yargs");

module.exports = class StringSorter {
  catString = (arr) => {
    const excluded = /(book)|(chocolate)|(chocolates)|(pills)/,
      imports = /(imported)/;
    let prices = this.getPrice(arr),
      taxArr = [],
      total = 0,
      tTotal = 0;
    arr.forEach((str, ind) => {
      let ex = excluded.test(str);
      let imp = imports.test(str),
        fl = parseFloat(prices[ind]);
      //calculate tax and categorise str
      if (ex && imp) {
        let calcTax = (Math.ceil((fl / 100) * 5 * 20) / 20).toFixed(2);
        taxArr[ind] = fl + parseFloat(calcTax);
      } else if (!ex && !imp) {
        let calcTax = (Math.ceil((fl / 100) * 10 * 20) / 20).toFixed(2);
        taxArr[ind] = fl + parseFloat(calcTax);
      } else if (!ex && imp) {
        let calcTax = (Math.ceil((fl / 100) * 15 * 20) / 20).toFixed(2);
        taxArr[ind] = fl + parseFloat(calcTax);
      } else {
        taxArr[ind] = fl;
      }
      //apply prices
      arr = this.applyNewPrice(arr, taxArr, ind);
      let tFloat = parseFloat(taxArr[ind]);
      //get totals
      if (total === 0) total = tFloat;
      else total += tFloat;

      if (fl !== tFloat) {
        tTotal += tFloat - fl;
      }
    });
    //round totals.
    total = total.toFixed(2);
    tTotal = (Math.round(tTotal * 20) / 20).toFixed(2);
    return [arr, `Sales Taxes: £${tTotal}`, `Total: £${total}`];
  };

  getPrice = (arr) => {
    let priceArr = [];
    arr.forEach((item, ind) => {
      if (item.includes("£")) priceArr[ind] = item.split("£")[1];
      else priceArr[ind] = item.split("at ")[1];
    });
    return priceArr;
  };

  applyNewPrice = (arr, newVal, ind) => {
    //round val
    newVal[ind] = newVal[ind].toFixed(2);
    if (arr[ind].includes("£"))
      arr[ind] = `${arr[ind].split("£")[0]}£${newVal[ind]}`;
    else {
      arr[ind] = `${arr[ind].split("at ")[0]}£${newVal[ind]}`;
      console.log(newVal[ind]);
    }
    //return for test
    return arr;
  };
};
