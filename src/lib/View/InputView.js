import { Console } from "@woowacourse/mission-utils";
import { InputValidator } from "../utils/Validator/index.js";
import { INPUT } from "../Constants/index.js";

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(INPUT.DATE);
    InputValidator.date(input);
    const result = Number(input);
    return result;
  },
  async readRawOrder() {
    const input = await Console.readLineAsync(INPUT.RAW_ORDER);
    InputValidator.menus(input);
    const result = input.split(INPUT.COMMA);
    return result;
  },
};

export default InputView;
