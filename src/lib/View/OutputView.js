import { Console } from "@woowacourse/mission-utils";
import { OutputParser } from "../utils/Parser/index.js";
import { ERROR, OUTPUT } from "../Constants/index.js";

const OutputView = {
  printInitial() {
    Console.print(OUTPUT.INITIAL_HEADER);
  },

  printDate(date) {
    const dateArray = [OUTPUT.DATE_PREFIX, date, OUTPUT.DATE_SUFFIX];
    const formattedDate = OutputParser.concatMessage(dateArray);
    const message = [formattedDate, OUTPUT.EMPTY];
    Console.print(OutputParser.lineSeperateMessage(message));
  },

  printMenu(nestedMenus) {
    const menuArray = OutputParser.nestedMenus(nestedMenus);
    const formattedArray = OutputParser.formatEmptyArray(menuArray); // 원칙적으로는 불필요함
    const message = [OUTPUT.MENU_HEADER, ...formattedArray, OUTPUT.EMPTY];
    Console.print(OutputParser.lineSeperateMessage(message));
  },

  printOriginalTotal(originalTotal) {
    const formattedTotal = OutputParser.monetaryForamt(originalTotal);
    const message = [OUTPUT.ORIGINAL_TOTAL_HEADER, formattedTotal, OUTPUT.EMPTY];
    Console.print(OutputParser.lineSeperateMessage(message));
  },

  printReward(rewardObject) {
    const rewardArray = OutputParser.menus(rewardObject);
    const formattedArray = OutputParser.formatEmptyArray(rewardArray);
    const message = [OUTPUT.REWARD_HEADER, ...formattedArray, OUTPUT.EMPTY];
    Console.print(OutputParser.lineSeperateMessage(message));
  },

  printBenefitInfo(benefitInfo) {
    const benefitInfoArray = OutputParser.benefitInfo(benefitInfo);
    const formattedArray = OutputParser.formatEmptyArray(benefitInfoArray);
    const message = [OUTPUT.BENEFIT_INFO_HEADER, ...formattedArray, OUTPUT.EMPTY];
    Console.print(OutputParser.lineSeperateMessage(message));
  },

  printBenefitValue(benefitValue) {
    const formattedBenefit = OutputParser.monetaryForamt(benefitValue ? benefitValue * -1 : 0);
    const message = [OUTPUT.BENEFIT_VALUE_HEADER, formattedBenefit, OUTPUT.EMPTY];
    Console.print(OutputParser.lineSeperateMessage(message));
  },

  printDiscountedTotal(discountedTotal) {
    const formattedDiscountTotal = OutputParser.monetaryForamt(discountedTotal);
    const message = [OUTPUT.DISCOUNTED_TOTAL_HEADER, formattedDiscountTotal, OUTPUT.EMPTY];
    Console.print(OutputParser.lineSeperateMessage(message));
  },

  printBadge(badge) {
    const message = [OUTPUT.BADGE_HEADER, (badge ?? OUTPUT.NO_ITEMS), OUTPUT.EMPTY];
    Console.print(OutputParser.lineSeperateMessage(message));
  },

  printError(originalMessage) {
    let message = originalMessage;
    if (!Object.values(ERROR).includes(originalMessage)) {
      message = ERROR.UNKNOWN_ERROR;
    }
    const errorMessage = [OUTPUT.ERROR_HEAD, message];
    Console.print(OutputParser.concatMessage(errorMessage));
  },
};

export default OutputView;
