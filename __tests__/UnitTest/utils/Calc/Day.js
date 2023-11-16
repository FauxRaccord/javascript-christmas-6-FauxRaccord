import { DayCalc } from "../../../../src/lib/utils/Calc/index.js";

describe("DayCalc 테스트", () => {
  test("이벤트 기간의 종료일보다 이후일 경우 이벤트 멀티플라이어는 0을 반환한다.", () => {
    const expected = 0;
    const start = 1;
    const end = 25;
    const target = 26;

    const result = DayCalc.eventMoneyMultiplier(start, end, target);
    expect(result).toEqual(expected);
  });
});
