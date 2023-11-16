/* eslint-disable max-lines-per-function */
import { MainOrder } from "../../../src/lib/Domain/index.js";
import { InputHandler } from "../../../src/lib/Handler/index.js";
import { tryErrorCase } from "../../TestCase/index.js";
import { mockQuestions } from "../../TestUtils/mockFunctions.js";

describe("InputHandler 테스트", () => {
  test("유효하지 않은 날짜가 입력되면 유효한 입력이 제공될 때까지 반복한다.", async () => {
    const questions = [...tryErrorCase.dateInputs];
    mockQuestions(questions);

    const mainOrder = await InputHandler.date();
    const result = mainOrder.getDate();
    expect(result).toEqual(tryErrorCase.expectedDate);
  });

  test("유효하지 않은 메뉴가 입력되면 유효한 입력이 제공될 때까지 반복한다.", async () => {
    const mainOrder = new MainOrder(tryErrorCase.expectedDate);
    const questions = [...tryErrorCase.menusInputs];
    mockQuestions(questions);

    await InputHandler.menus(mainOrder);
    const result = mainOrder.getMenus();
    expect(result).toEqual(tryErrorCase.expectedMenus);
  });
});
