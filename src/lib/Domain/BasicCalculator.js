import { ItemCalc } from "../utils/Calc/index.js";
import { DOMAIN } from "../Constants/index.js";

class BasicCalculator {
  /** @param {MainOrder} mainOrder  */
  static originalTotal(mainOrder) {
    const nestedMenus = mainOrder.getMenus();
    const result = Object.values(nestedMenus)
      .map((menus) => BasicCalculator.calcMenus(menus));
    return ItemCalc.sumArray(result);
  }

  /** @param {{[menu: string]: number}} menus  */
  static calcMenus(menus) {
    const result = Object.entries(menus)
      .map(([k, v]) => DOMAIN.MENU_DICT[k].price * v);
    return ItemCalc.sumArray(result);
  }

  /** @param {MainOrder} mainOrder  */
  static calcEventFlag(mainOrder) {
    const originalTotal = BasicCalculator.originalTotal(mainOrder);
    return Boolean(DOMAIN.EVENT_THRESHOLD_INCLUSIVE <= originalTotal);
  }
}

export default BasicCalculator;
