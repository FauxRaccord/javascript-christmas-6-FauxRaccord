/* eslint-disable max-lines-per-function */
import App from "../../src/App.js";
import { validCase, tryErrorCase } from "../TestCase/index.js";
import {
  mockQuestions,
  getLogSpy,
  getOutput,
  getUnmatchedLog,
} from "../TestUtils/mockFunctions.js";

describe("App 테스트", () => {
  test.each([...validCase])(
    "메뉴가 주어졌을 때, 성공적으로 실행 후 로그를 출력하여야 한다.",
    /** @param {import("../TestCase/ValidCase.js").MockedCase} mockedCase */
    async (mockedCase) => {
      const questions = [
        mockedCase.date.toString(),
        mockedCase.rawOrders.join(","),
      ];
      mockQuestions(questions);
      const logSpy = getLogSpy();

      const app = new App();
      await app.run();

      const logs = getOutput(logSpy);
      const unmatchedLog = getUnmatchedLog(logs, mockedCase.logs);
      expect(unmatchedLog).toEqual([]);
    },
  );

  test("잘못된 입력이 주어질 경우 에러 메시지를 출력하고 다시 시도한 뒤 실행하여야 한다.", async () => {
    const questions = [...tryErrorCase.dateInputs, ...tryErrorCase.menusInputs];
    mockQuestions(questions);
    const logSpy = getLogSpy();

    const app = new App();
    await app.run();

    const logs = getOutput(logSpy);
    const unmatchedLog = getUnmatchedLog(logs, tryErrorCase.logs);
    expect(unmatchedLog).toEqual([]);
  });

  test("입력 없이 실행되는 환경의 경우, 정상적으로 종료되어야 한다.", async () => {
    const logSpy = getLogSpy();

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("날짜까지만 입력되는 환경의 경우, 정상적으로 종료되어야 한다.", async () => {
    const logSpy = getLogSpy();
    const questions = ["25"];
    mockQuestions(questions);

    const app = new App();
    await app.run();

    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining("[ERROR]"));
  });

  test("App이 실행된 이후에 결과를 요청하면 정상적으로 처리되어야 한다.", async () => {
    const mockedCase = validCase.at(0);
    const questions = [
      mockedCase.date.toString(),
      mockedCase.rawOrders.join(","),
    ];
    mockQuestions(questions);

    const app = new App();
    await app.run();

    expect(() => app.requestResult()).not.toThrow();
  });

  test("App이 실행되기 이전에 결과를 요청하면 에러를 발생시켜야 한다.", () => {
    const app = new App();

    expect(() => app.requestResult()).toThrow();
  });
});
