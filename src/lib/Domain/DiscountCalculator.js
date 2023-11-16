// eslint-disable-next-line no-unused-vars
import MainOrder from "./MainOrder.js";
import BasicCalculator from "./BasicCalculator.js";
import { DayCalc, ItemCalc } from "../utils/Calc/index.js";
import { DOMAIN } from "../Constants/index.js";

class DiscountCalculator {
  // 상속 메서드(논리적)
  /** @param {MainOrder} mainOrder  */
  static #calcEventFlag(mainOrder) {
    return BasicCalculator.calcEventFlag(mainOrder);
  }

  // 고유 메서드
  /** @param {MainOrder} mainOrder  */
  static discountInfo(mainOrder) {
    const christmas = DiscountCalculator.christmasDiscount(mainOrder);
    const weekday = DiscountCalculator.weekdayDiscount(mainOrder);
    const weekend = DiscountCalculator.weekendDiscount(mainOrder);
    const special = DiscountCalculator.specialDiscount(mainOrder);

    return {
      christmas, weekday, weekend, special,
    };
  }

  /** @param {MainOrder} mainOrder  */
  static weekdayDiscount(mainOrder) {
    const eventFlag = DiscountCalculator.#calcEventFlag(mainOrder);
    if (!eventFlag) return 0;

    const day = mainOrder.getDate();
    if (DayCalc.isWeekend(day)) return 0;
    const { dessert } = mainOrder.getMenus();
    const quantity = ItemCalc.sumObjValue(dessert);
    return quantity * DOMAIN.WEEKDAY_DISCOUNT_PER_MENUS;
  }

  /** @param {MainOrder} mainOrder  */
  static weekendDiscount(mainOrder) {
    const eventFlag = DiscountCalculator.#calcEventFlag(mainOrder);
    if (!eventFlag) return 0;

    const day = mainOrder.getDate();
    if (!DayCalc.isWeekend(day)) return 0;
    const { main } = mainOrder.getMenus();
    const quantity = ItemCalc.sumObjValue(main);
    return quantity * DOMAIN.WEEKEND_DISCOUNT_PER_MENUS;
  }

  /** @param {MainOrder} mainOrder  */
  static specialDiscount(mainOrder) {
    const eventFlag = DiscountCalculator.#calcEventFlag(mainOrder);
    if (!eventFlag) return 0;

    const day = mainOrder.getDate();
    if (!DayCalc.isSpecialDay(day)) return 0;
    return DOMAIN.SPECIAL_DAY_DISCOUNT;
  }

  /** @param {MainOrder} mainOrder  */
  static christmasDiscount(mainOrder) {
    const eventFlag = DiscountCalculator.#calcEventFlag(mainOrder);
    if (!eventFlag) return 0;

    const day = mainOrder.getDate();
    const [start, end] = [DOMAIN.D_DAY_START_INCLUSIVE, DOMAIN.D_DAY_END_INCLUSIVE];

    if (end < day) return 0;
    const multiplier = DayCalc.eventMoneyMultiplier(start, end, day);
    return DOMAIN.D_DAY_DEFAULT_DISCOUNT + multiplier * DOMAIN.D_DAY_BONUS_DISCOUNT;
  }
}

export default DiscountCalculator;
