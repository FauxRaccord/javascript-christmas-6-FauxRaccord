/* eslint-disable max-lines-per-function */
import { DiscountCalculator, MainOrder } from "../../../src/lib/Domain/index.js";
import { validCase } from "../../TestCase/index.js";

describe("DiscountCalculator 테스트", () => {
  test.each([...validCase])(
    "메뉴가 주어졌을 때, 평일 할인 금액을 성공적으로 계산해야 한다",
    /** @param {import("../../TestCase/ValidCase.js").MockedCase} mockedCase */
    (mockedCase) => {
      const mainOrder = new MainOrder(mockedCase.date);
      mainOrder.setMenus(mockedCase.rawOrders);
      const result = DiscountCalculator.weekdayDiscount(mainOrder);
      expect(result).toEqual(mockedCase.weekday);
    },
  );

  test.each([...validCase])(
    "메뉴가 주어졌을 때, 주말 할인 금액을 성공적으로 계산해야 한다",
    /** @param {import("../../TestCase/ValidCase.js").MockedCase} mockedCase */
    (mockedCase) => {
      const mainOrder = new MainOrder(mockedCase.date);
      mainOrder.setMenus(mockedCase.rawOrders);
      const result = DiscountCalculator.weekendDiscount(mainOrder);
      expect(result).toEqual(mockedCase.weekend);
    },
  );

  test.each([...validCase])(
    "메뉴가 주어졌을 때, 특별 할인 금액을 성공적으로 계산해야 한다",
    /** @param {import("../../TestCase/ValidCase.js").MockedCase} mockedCase */
    (mockedCase) => {
      const mainOrder = new MainOrder(mockedCase.date);
      mainOrder.setMenus(mockedCase.rawOrders);
      const result = DiscountCalculator.specialDiscount(mainOrder);
      expect(result).toEqual(mockedCase.special);
    },
  );

  test.each([...validCase])(
    "메뉴가 주어졌을 때, 크리스마스 디데이 할인 금액을 성공적으로 계산해야 한다",
    /** @param {import("../../TestCase/ValidCase.js").MockedCase} mockedCase */
    (mockedCase) => {
      const mainOrder = new MainOrder(mockedCase.date);
      mainOrder.setMenus(mockedCase.rawOrders);
      const result = DiscountCalculator.christmasDiscount(mainOrder);
      expect(result).toEqual(mockedCase.christmas);
    },
  );
});
