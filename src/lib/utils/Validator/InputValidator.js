import { VALIDATION } from "../../Constants/index.js";
import { ValidationError } from "../../Error/index.js";

class InputValidator {
  static date(date) {
    InputValidator.#checkInputProvided(date);
    InputValidator.#isInteger(date);
  }

  static menus(rawOrder) {
    InputValidator.#checkInputProvided(rawOrder);
    rawOrder
      .split(VALIDATION.COMMA)
      .forEach((menu) => {
        InputValidator.#singleMenu(menu);
      });
    InputValidator.#checkUniqueConstraint(rawOrder);
  }

  static #singleMenu(menu) {
    InputValidator.#checkOneDashIncluded(menu);
    const [_, value] = menu.split(VALIDATION.DASH);
    InputValidator.#isInteger(value);
  }

  static #checkInputProvided(input) {
    if (input === undefined) {
      throw new Error();
    }
  }

  static #checkOneDashIncluded(menu) {
    const dashCount = Array.from(menu)
      .filter((char) => char === VALIDATION.DASH)
      .length;
    if (dashCount !== 1) {
      throw new ValidationError();
    }
  }

  static #checkUniqueConstraint(rawOrder) {
    const visited = new Set();
    const uniqueConstraintViolated = rawOrder
      .split(VALIDATION.COMMA)
      .some((menu) => {
        const [name, _] = menu.split(VALIDATION.DASH);
        const result = visited.has(name);
        visited.add(name);
        return result;
      });
    if (uniqueConstraintViolated) {
      throw new ValidationError();
    }
  }

  static #isInteger(value) {
    if (parseInt(value, VALIDATION.RADIX_PARAM).toString() !== value) {
      throw new ValidationError();
    }
  }
}

export default InputValidator;
