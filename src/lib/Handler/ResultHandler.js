// eslint-disable-next-line no-unused-vars
import { MainOrder, OrderCalculator } from "../Domain/index.js";
import { OutputView } from "../View/index.js";

/**
 * @typedef {Object} Result
 * @property {number} date
 * @property {{appetizer: {}, main: {}, dessert:{}, drink: {}}} menus
 * @property {number} originalTotal
 * @property {{}} reward
 * @property {{}} benefitInfo
 * @property {number} benefitValue
 * @property {number} discountedTotal
 * @property {string} badge
 */

class ResultHandler {
  /** @param {MainOrder} mainOrder  */
  static calcResult(mainOrder) {
    return {
      date: mainOrder.getDate(),
      menus: mainOrder.getMenus(),
      originalTotal: OrderCalculator.originalTotal(mainOrder),
      reward: OrderCalculator.reward(mainOrder),
      benefitInfo: OrderCalculator.benefitInfo(mainOrder),
      benefitValue: OrderCalculator.benefitValue(mainOrder),
      discountedTotal: OrderCalculator.discountedTotal(mainOrder),
      badge: OrderCalculator.badge(mainOrder),
    };
  }

  /** @param {Result} result  */
  static printResult(result) {
    OutputView.printDate(result.date);
    OutputView.printMenu(result.menus);
    OutputView.printOriginalTotal(result.originalTotal);
    OutputView.printReward(result.reward);
    OutputView.printBenefitInfo(result.benefitInfo);
    OutputView.printBenefitValue(result.benefitValue);
    OutputView.printDiscountedTotal(result.discountedTotal);
    OutputView.printBadge(result.badge);
  }
}

export default ResultHandler;
