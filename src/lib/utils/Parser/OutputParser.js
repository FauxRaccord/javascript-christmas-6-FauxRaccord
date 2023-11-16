import { OUTPUT } from "../../Constants/index.js";

class OutputParser {
  static nestedMenus(nestedMenus) {
    return Object.values(nestedMenus)
      .map((menus) => OutputParser.menus(menus))
      .reduce((accArr, curArr) => accArr.concat(curArr), []);
  }

  static menus(menus) {
    return Object.entries(menus)
      .map(([key, value]) => {
        const menuArray = [key, OUTPUT.WHITE_SPACE, value, OUTPUT.MENU_UNIT];
        return OutputParser.concatMessage(menuArray);
      });
  }

  static benefitInfo(benefits) {
    return Object.entries(benefits)
      .map(([key, value]) => {
        if (value === 0) return OUTPUT.EMPTY;
        return OutputParser.concatMessage([
          OUTPUT.BENEFIT_DICT[key],
          OUTPUT.COLON,
          OUTPUT.WHITE_SPACE,
          OUTPUT.DASH,
          OutputParser.monetaryForamt(value),
        ]);
      })
      .filter((benefit) => benefit.length !== 0);
  }

  static monetaryForamt(money) {
    return OutputParser.concatMessage([
      money.toLocaleString("en-US"),
      OUTPUT.MONEY_UNIT,
    ]);
  }

  static formatEmptyArray(array) {
    if (array.length === 0) return [OUTPUT.NO_ITEMS];
    return array;
  }

  static concatMessage(array) {
    return array.join(OUTPUT.EMPTY);
  }

  static lineSeperateMessage(array) {
    return array.join(OUTPUT.LINE_SEPARATOR);
  }
}

export default OutputParser;
