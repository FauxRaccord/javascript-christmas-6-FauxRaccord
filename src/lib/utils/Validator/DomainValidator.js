import { DOMAIN, VALIDATION } from "../../Constants/index.js";
import { ValidationError } from "../../Error/index.js";

class DomainValidator {
  static date(date) {
    if (date < VALIDATION.MIN_DATE_INCLUSIVE) throw new ValidationError();
    if (VALIDATION.MAX_DATE_INCLUSIVE < date) throw new ValidationError();
  }

  // 전체 메뉴를 4n으로 탐색하는 비효율성이 있으나 책임 분리를 위해 나눔
  static menus(rawOrder) {
    rawOrder.forEach((menu) => {
      DomainValidator.#validateSingleMenu(menu);
    });
    DomainValidator.#checkIncludesNonDrink(rawOrder);
    DomainValidator.#checkMenuLength(rawOrder);
  }

  static #validateSingleMenu(menu) {
    const [name, value] = menu.split(VALIDATION.DASH);
    if (!(name in DOMAIN.MENU_DICT)) {
      throw new ValidationError();
    }
    if (value < VALIDATION.MIN_ITEM_QUANTITY_INCLUSIVE) {
      throw new ValidationError();
    }
  }

  static #checkIncludesNonDrink(rawOrder) {
    const result = rawOrder.some((menu) => {
      const [name, _] = menu.split(VALIDATION.DASH);
      const { category } = DOMAIN.MENU_DICT[name];
      return VALIDATION.NON_DRINK_CATEGORY.includes(category);
    });
    if (!result) throw new ValidationError();
  }

  static #checkMenuLength(rawOrder) {
    const menuLength = rawOrder
      .map((menu) => {
        const [_, quantity] = menu.split(VALIDATION.DASH);
        return Number(quantity);
      })
      .reduce((acc, cur) => acc + cur, 0);
    if (VALIDATION.MAX_MENU_LENGTH_INLCUSLIVE < menuLength) {
      throw new ValidationError();
    }
  }
}

export default DomainValidator;
