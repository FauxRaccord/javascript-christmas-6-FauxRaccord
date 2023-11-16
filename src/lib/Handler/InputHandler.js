import { MainOrder } from "../Domain/index.js";
import { InputView, OutputView } from "../View/index.js";
import { ERROR } from "../Constants/index.js";
import { ValidationError } from "../Error/index.js";

class InputHandler {
  static async date() {
    try {
      const date = await InputView.readDate();
      const order = new MainOrder(date);
      return order;
    } catch (err) {
      if (!(err instanceof ValidationError)) throw err;
      OutputView.printError(ERROR.INVALID_DATE);
      return InputHandler.date();
    }
  }

  /** @param {MainOrder} mainOrder  */
  static async menus(mainOrder) {
    try {
      const rawOrder = await InputView.readRawOrder();
      mainOrder.setMenus(rawOrder);
      return mainOrder;
    } catch (err) {
      if (!(err instanceof ValidationError)) throw err;
      OutputView.printError(ERROR.INVALID_ORDER);
      return InputHandler.menus(mainOrder);
    }
  }
}

export default InputHandler;
