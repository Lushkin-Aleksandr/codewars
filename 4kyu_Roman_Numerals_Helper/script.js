// TODO: create a RomanNumerals helper object

class RomanNumerals {
  static m = "M"; // 1000
  static cm = "CM"; // 900
  static d = "D"; // 500
  static cd = "CD"; // 400
  static c = "C"; // 100
  static xc = "XC"; // 90
  static l = "L"; // 50
  static xl = "XL"; // 40
  static x = "X"; // 10
  static ix = "IX"; // 9
  static v = "V"; // 5
  static iv = "IV"; // 4
  static i = "I"; // 1

  static toRoman(num) {
    const m = this.getWholeNumber(num, 1000);
    num -= m * 1000;
    const cm = this.getWholeNumber(num, 900);
    num -= cm * 900;
    const d = this.getWholeNumber(num, 500);
    num -= d * 500;
    const cd = this.getWholeNumber(num, 400);
    num -= cd * 400;
    const c = this.getWholeNumber(num, 100);
    num -= c * 100;
    const xc = this.getWholeNumber(num, 90);
    num -= xc * 90;
    const l = this.getWholeNumber(num, 50);
    num -= l * 50;
    const xl = this.getWholeNumber(num, 40);
    num -= xl * 40;
    const x = this.getWholeNumber(num, 10);
    num -= x * 10;
    const ix = this.getWholeNumber(num, 9);
    num -= ix * 9;
    const v = this.getWholeNumber(num, 5);
    num -= v * 5;
    const iv = this.getWholeNumber(num, 4);
    num -= iv * 4;

    const i = num;

    return this.joinRomanSymbols(m, cm, d, cd, c, xc, l, xl, x, ix, v, iv, i);
  }

  static fromRoman(romanNum) {
    let arr = [];
    let number = 0;

    if (romanNum.includes(this.cm)) {
      arr.push(this.cm);
      romanNum = romanNum.replace(this.cm, "");
    }
    if (romanNum.includes(this.cd)) {
      arr.push(this.cd);
      romanNum = romanNum.replace(this.cd, "");
    }
    if (romanNum.includes(this.xc)) {
      arr.push(this.xc);
      romanNum = romanNum.replace(this.xc, "");
    }
    if (romanNum.includes(this.xl)) {
      arr.push(this.xl);
      romanNum = romanNum.replace(this.xl, "");
    }
    if (romanNum.includes(this.ix)) {
      arr.push(this.ix);
      romanNum = romanNum.replace(this.ix, "");
    }
    if (romanNum.includes(this.iv)) {
      arr.push(this.iv);
      romanNum = romanNum.replace(this.iv, "");
    }

    let romanNumArr = romanNum.split("");
    arr = arr.concat(romanNumArr);

    arr.forEach((el) => {
      number += this.convertSymbolToNumber(el);
    });

    return number;
  }

  static convertSymbolToNumber(symbol) {
    switch (symbol) {
      case "M":
        return 1000;
      case "CM":
        return 900;
      case "D":
        return 500;
      case "CD":
        return 400;
      case "C":
        return 100;
      case "XC":
        return 90;
      case "L":
        return 50;
      case "XL":
        return 40;
      case "X":
        return 10;
      case "IX":
        return 9;
      case "V":
        return 5;
      case "IV":
        return 4;
      case "I":
        return 1;
    }
  }

  static getWholeNumber(num, wholeNum) {
    return Math.floor(num / wholeNum);
  }

  static joinRomanSymbols(m, cm, d, cd, c, xc, l, xl, x, ix, v, iv, i) {
    let result =
      this.m.repeat(m) +
      this.cm.repeat(cm) +
      this.d.repeat(d) +
      this.cd.repeat(cd) +
      this.c.repeat(c) +
      this.xc.repeat(xc) +
      this.l.repeat(l) +
      this.xl.repeat(xl) +
      this.x.repeat(x) +
      this.ix.repeat(ix) +
      this.v.repeat(v) +
      this.iv.repeat(iv) +
      this.i.repeat(i);

    return result;
  }
}
