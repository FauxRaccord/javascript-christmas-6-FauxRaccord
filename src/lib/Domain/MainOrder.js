import { DomainValidator } from "../utils/Validator/index.js";
import { DomainParser } from "../utils/Parser/index.js";

class MainOrder {
  /** @type {number}  */
  #date;

  /** @type {{appetizer: {}, main: {}, dessert:{}, drink: {}}}  */
  #menus;

  /** @param {number} date  */
  constructor(date) {
    DomainValidator.date(date);
    this.#date = date;
  }

  getDate() {
    return this.#date;
  }

  /** @param {[string]} rawOrder  */
  setMenus(rawOrder) {
    if (this.#menus) throw new Error();
    DomainValidator.menus(rawOrder);
    const parsedMenu = DomainParser.menus(rawOrder);
    this.#menus = parsedMenu;
  }

  getMenus() {
    return this.#menus;
  }
}

export default MainOrder;
