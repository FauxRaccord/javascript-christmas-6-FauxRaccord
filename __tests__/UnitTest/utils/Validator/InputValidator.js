/* eslint-disable max-lines-per-function */
import { InputValidator } from "../../../../src/lib/utils/Validator/index.js";
import {
  validInputDates,
  invalidInputDates,
  validInputMenus,
  invalidInputMenus,
} from "../../../TestCase/index.js";

describe("InputValidator 테스트", () => {
  test.each([...validInputDates])(
    "%s와 같이 방문 예정일이 주어지면 정상적으로 처리되어야 한다.",
    (dateString) => {
      expect(() => InputValidator.date(dateString)).not.toThrow();
    },
  );

  test.each([...invalidInputDates])(
    "%s와 같이 방문 예정일이 주어지면 에러를 발생시켜야 한다.",
    (dateString) => {
      expect(() => InputValidator.date(dateString)).toThrow();
    },
  );

  test.each([...validInputMenus])(
    "%s와 같이 메뉴가 주어지면 정상적으로 처리되어야 한다.",
    (menuString) => {
      expect(() => InputValidator.menus(menuString)).not.toThrow();
    },
  );

  test.each([...invalidInputMenus])(
    "%s와 같이 메뉴가 주어지면 에러를 발생시켜야 한다.",
    (menuString) => {
      expect(() => InputValidator.menus(menuString)).toThrow();
    },
  );
});
