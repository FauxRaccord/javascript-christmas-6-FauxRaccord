import { DOMAIN } from "../../Constants/index.js";

class DomainParser {
  static menus(rawOrder) {
    const result = Object.fromEntries(DOMAIN.CATEGORIES.map((k) => [k, {}]));
    rawOrder.forEach((menu) => {
      const [name, quantity] = menu.split(DOMAIN.DASH);
      const { category } = DOMAIN.MENU_DICT[name];
      result[category][name] = Number(quantity);
    });
    return result;
  }
}

export default DomainParser;
