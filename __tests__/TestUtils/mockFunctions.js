import { MissionUtils } from "@woowacourse/mission-utils";
import { EOL as LINE_SEPARATOR } from "os";

export const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();

    return Promise.resolve(input);
  });
};

export const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();

  return logSpy;
};

export const getOutput = (logSpy) => [...logSpy.mock.calls].join(LINE_SEPARATOR);

export const getUnmatchedLog = (logs, expected) => {
  const logsSet = new Set(logs.split(LINE_SEPARATOR));
  const unmatchedLog = expected
    .map((e) => {
      if (logsSet.has(e)) return null;
      return e;
    })
    .filter((e) => e !== null);
  return unmatchedLog;
};
