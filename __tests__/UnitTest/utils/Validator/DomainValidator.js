/* eslint-disable max-lines-per-function */
import { DomainValidator } from "../../../../src/lib/utils/Validator/index.js";
import {
  validDomainDates,
  valiidDomainMenus,
  invalidDomainDates,
  invalidDomainMenus,
} from "../../../TestCase/index.js";

describe("DomainValidator 테스트", () => {
  test.each([...validDomainDates])(
    "%s와 같이 방문 예정일이 주어지면 정상적으로 처리되어야 한다.",
    (dateString) => {
      expect(() => DomainValidator.date(dateString)).not.toThrow();
    },
  );

  test.each([...invalidDomainDates])(
    "%s와 같이 방문 예정일이 주어지면 에러를 발생시켜야 한다.",
    (dateString) => {
      expect(() => DomainValidator.date(dateString)).toThrow();
    },
  );

  test.each([...valiidDomainMenus])(
    "%s와 같이 메뉴가 주어지면 정상적으로 처리되어야 한다.",
    (menuString) => {
      expect(() => DomainValidator.menus(menuString)).not.toThrow();
    },
  );

  test.each([...invalidDomainMenus])(
    "%s와 같이 메뉴가 주어지면 에러를 발생시켜야 한다.",
    (menuString) => {
      expect(() => DomainValidator.menus(menuString)).toThrow();
    },
  );
});
