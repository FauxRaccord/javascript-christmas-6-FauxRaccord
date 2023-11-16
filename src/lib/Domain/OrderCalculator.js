// eslint-disable-next-line no-unused-vars
import MainOrder from "./MainOrder.js";
import BasicCalculator from "./BasicCalculator.js";
import DiscountCalculator from "./DiscountCalculator.js";
import { ItemCalc } from "../utils/Calc/index.js";
import { DOMAIN } from "../Constants/index.js";

// 위에 있는 메서드에서 아래의 메서드를 참조하면 순환 참조(논리적) 위험
// 상속을 피하기 메서드를 전달
class OrderCalculator {
  // 상속 메서드(논리적)
  /** @param {MainOrder} mainOrder  */
  static #getEventFlag(mainOrder) {
    return BasicCalculator.calcEventFlag(mainOrder);
  }

  /** @param {{[menu: string]: number}} menus  */
  static #calcMenus(menus) {
    return BasicCalculator.calcMenus(menus);
  }

  /** @param {MainOrder} mainOrder  */
  static originalTotal(mainOrder) {
    return BasicCalculator.originalTotal(mainOrder);
  }

  /** @param {MainOrder} mainOrder  */
  static #discountInfo(mainOrder) {
    return DiscountCalculator.discountInfo(mainOrder);
  }

  // 고유 메서드
  /** @param {MainOrder} mainOrder  */
  static reward(mainOrder) {
    const eventFlag = OrderCalculator.#getEventFlag(mainOrder);
    if (!eventFlag) return {};

    const originalTotal = OrderCalculator.originalTotal(mainOrder);
    const rewardFlag = Boolean(DOMAIN.REWARD_THRESHOLD_INCLUSIVE <= originalTotal);
    if (rewardFlag) return { ...DOMAIN.REWARD_MENUS };
    return {};
  }

  /** @param {MainOrder} mainOrder  */
  static benefitInfo(mainOrder) {
    const discountInfo = OrderCalculator.#discountInfo(mainOrder);
    const rewardMenu = OrderCalculator.reward(mainOrder);
    const rewardValue = OrderCalculator.#calcMenus(rewardMenu);
    return { ...discountInfo, reward: rewardValue };
  }

  /** @param {MainOrder} mainOrder  */
  static benefitValue(mainOrder) {
    const benefitInfo = OrderCalculator.benefitInfo(mainOrder);
    return ItemCalc.sumObjValue(benefitInfo);
  }

  /** @param {MainOrder} mainOrder  */
  static discountedTotal(mainOrder) {
    const originalTotal = OrderCalculator.originalTotal(mainOrder);
    const discountInfo = OrderCalculator.#discountInfo(mainOrder);
    const discountValue = ItemCalc.sumObjValue(discountInfo);
    return originalTotal - discountValue;
  }

  /** @param {MainOrder} mainOrder  */
  static badge(mainOrder) {
    const benefitValue = OrderCalculator.benefitValue(mainOrder);
    const res = Object.entries(DOMAIN.BADGE_TRESHOLD)
      .sort((a, b) => a[1] - b[1])
      .reduce((acc, [key, value]) => {
        if (value <= benefitValue) return key;
        return acc;
      }, null);
    return res;
  }
}

export default OrderCalculator;
