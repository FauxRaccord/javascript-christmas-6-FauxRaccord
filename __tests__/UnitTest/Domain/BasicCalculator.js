import { BasicCalculator, MainOrder } from "../../../src/lib/Domain/index.js";
import { validCase } from "../../TestCase/index.js";

describe("BasicCalculator 테스트", () => {
  test.each([...validCase])(
    "메뉴가 주어졌을 때, 이벤트 조건 충족 여부를 성공적으로 계산해야 한다",
    /** @param {import("../../TestCase/ValidCase.js").MockedCase} mockedCase */
    (mockedCase) => {
      const mainOrder = new MainOrder(mockedCase.date);
      mainOrder.setMenus(mockedCase.rawOrders);
      const result = BasicCalculator.calcEventFlag(mainOrder);
      expect(result).toEqual(mockedCase.eventFlag);
    },
  );
});
