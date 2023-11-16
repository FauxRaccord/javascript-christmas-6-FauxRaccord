import { DomainParser } from "../../../../src/lib/utils/Parser/index.js";
import { validCase } from "../../../TestCase/index.js";

describe("DomainParser 테스트", () => {
  test.each([...validCase])(
    "메뉴가 주어졌을 때, 카테고리를 나누어 객체를 생성해야 한다.",
    /** @param {import("../../../TestCase/ValidCase").MockedCase} mockedCase */
    (mockedCase) => {
      const result = DomainParser.menus(mockedCase.rawOrders);
      expect(result).toEqual(mockedCase.menus);
    },
  );
});
