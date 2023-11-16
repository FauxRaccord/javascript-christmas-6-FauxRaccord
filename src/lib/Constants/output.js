import { COMMON_STRINGS } from "./common.js";

const VIEW_LOGIC = {
  BENEFIT_DICT: {
    weekday: "평일 할인",
    weekend: "주말 할인",
    special: "특별 할인",
    christmas: "크리스마스 디데이 할인",
    reward: "증정 이벤트",
  },
};

const DATA_FORMATTING = {
  MENU_UNIT: "개",
  MONEY_UNIT: "원",
  NO_ITEMS: "없음",
  DATE_PREFIX: "12월 ",
  DATE_SUFFIX: "일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!",
  ERROR_HEAD: "[ERROR] ",
};

const HEADERS = {
  INITIAL_HEADER: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
  MENU_HEADER: "<주문 메뉴>",
  ORIGINAL_TOTAL_HEADER: "<할인 전 총주문 금액>",
  REWARD_HEADER: "<증정 메뉴>",
  BENEFIT_INFO_HEADER: "<혜택 내역>",
  BENEFIT_VALUE_HEADER: "<총혜택 금액>",
  DISCOUNTED_TOTAL_HEADER: "<할인 후 예상 결제 금액>",
  BADGE_HEADER: "<12월 이벤트 배지>",
};

const OUTPUT = {
  ...COMMON_STRINGS,
  ...VIEW_LOGIC,
  ...DATA_FORMATTING,
  ...HEADERS,
};

export default OUTPUT;
