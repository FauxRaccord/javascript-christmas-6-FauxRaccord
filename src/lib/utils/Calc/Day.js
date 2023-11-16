import { DOMAIN } from "../../Constants/index.js";

class DayCalc {
  static isWeekend(day) {
    const mod = day % DOMAIN.WEEK_LENGTH;
    return DOMAIN.WEEKEND_MOD.has(mod);
  }

  static isSpecialDay(day) {
    return DOMAIN.SPECIAL_DAYS.has(day);
  }

  static eventMoneyMultiplier(start, end, day) {
    if (end < day) return 0;
    return day - start;
  }
}

export default DayCalc;
