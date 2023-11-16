// eslint-disable-next-line no-unused-vars
import { MainOrder } from "./lib/Domain/index.js";
import { InputHandler, ResultHandler } from "./lib/Handler/index.js";
import { OutputView } from "./lib/View/index.js";
import { ERROR } from "./lib/Constants/index.js";

class App {
  /** @type {MainOrder} */
  #mainOrder;

  async run() {
    try {
      OutputView.printInitial();
      this.#mainOrder = await InputHandler.date();
      await InputHandler.menus(this.#mainOrder);

      const result = ResultHandler.calcResult(this.#mainOrder);
      ResultHandler.printResult(result);
    } catch (err) {
      OutputView.printError(err.message);
    }
  }

  requestResult() {
    if (!this.#mainOrder || !this.#mainOrder.getMenus()) {
      throw new Error(ERROR.INSTANCE_NOT_INITIALIZED);
    }
    return ResultHandler.calcResult(this.#mainOrder);
  }
}

export default App;
