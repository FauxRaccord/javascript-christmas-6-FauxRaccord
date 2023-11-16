/* eslint-disable max-lines-per-function */
import { OrderCalculator, MainOrder } from "../../../src/lib/Domain/index.js";
import { validCase } from "../../TestCase/index.js";

describe("OrderCalculator 테스트", () => {
  test.each([...validCase])(
    "메뉴가 주어졌을 때, 할인 전 총주문 금액을 성공적으로 계산해야 한다",
    /** @param {import("../../TestCase/ValidCase.js").MockedCase} mockedCase */
    (mockedCase) => {
      const mainOrder = new MainOrder(mockedCase.date);
      mainOrder.setMenus(mockedCase.rawOrders);
      const result = OrderCalculator.originalTotal(mainOrder);
      expect(result).toEqual(mockedCase.originalTotal);
    },
  );

  test.each([...validCase])(
    "메뉴가 주어졌을 때, 증정품을 성공적으로 계산해야 한다",
    /** @param {import("../../TestCase/ValidCase.js").MockedCase} mockedCase */
    (mockedCase) => {
      const mainOrder = new MainOrder(mockedCase.date);
      mainOrder.setMenus(mockedCase.rawOrders);
      const result = OrderCalculator.reward(mainOrder);
      expect(result).toEqual(mockedCase.reward);
    },
  );

  test.each([...validCase])(
    "메뉴가 주어졌을 때, 혜택 내역을 성공적으로 계산해야 한다",
    /** @param {import("../../TestCase/ValidCase.js").MockedCase} mockedCase */
    (mockedCase) => {
      const mainOrder = new MainOrder(mockedCase.date);
      mainOrder.setMenus(mockedCase.rawOrders);
      const result = OrderCalculator.benefitInfo(mainOrder);
      expect(result).toEqual(mockedCase.benefitInfo);
    },
  );

  test.each([...validCase])(
    "메뉴가 주어졌을 때, 총혜택 금액을 성공적으로 계산해야 한다",
    /** @param {import("../../TestCase/ValidCase.js").MockedCase} mockedCase */
    (mockedCase) => {
      const mainOrder = new MainOrder(mockedCase.date);
      mainOrder.setMenus(mockedCase.rawOrders);
      const result = OrderCalculator.benefitValue(mainOrder);
      expect(result).toEqual(mockedCase.benefitValue);
    },
  );

  test.each([...validCase])(
    "메뉴가 주어졌을 때, 할인 후 예상 결제 금액을 성공적으로 계산해야 한다",
    /** @param {import("../../TestCase/ValidCase.js").MockedCase} mockedCase */
    (mockedCase) => {
      const mainOrder = new MainOrder(mockedCase.date);
      mainOrder.setMenus(mockedCase.rawOrders);
      const result = OrderCalculator.discountedTotal(mainOrder);
      expect(result).toEqual(mockedCase.discountedTotal);
    },
  );

  test.each([...validCase])(
    "메뉴가 주어졌을 때, 배지를 성공적으로 계산해야 한다",
    /** @param {import("../../TestCase/ValidCase.js").MockedCase} mockedCase */
    (mockedCase) => {
      const mainOrder = new MainOrder(mockedCase.date);
      mainOrder.setMenus(mockedCase.rawOrders);
      const result = OrderCalculator.badge(mainOrder);
      expect(result).toEqual(mockedCase.badge);
    },
  );
});
