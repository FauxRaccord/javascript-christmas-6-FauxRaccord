import { MainOrder } from "../../../src/lib/Domain/index.js";

describe("MainOrder 테스트", () => {
  test("이미 메뉴가 설정되어 있을 때, 메뉴 설정을 시도하는 경우 에러가 발생되어야 한다.", () => {
    const date = 8;
    const rawOrder = ["바비큐립-4"];
    const mainOrder = new MainOrder(date);

    mainOrder.setMenus(rawOrder);

    expect(() => mainOrder.setMenus(rawOrder)).toThrow();
  });
});
