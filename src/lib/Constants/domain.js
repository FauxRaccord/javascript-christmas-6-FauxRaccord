import { CATEGORY_DICT, COMMON_STRINGS } from "./common.js";

const MENU = {
  CATEGORIES: Object.keys(CATEGORY_DICT),
  MENU_DICT: {
    양송이수프: { price: 6000, category: CATEGORY_DICT.appetizer },
    타파스: { price: 5500, category: CATEGORY_DICT.appetizer },
    시저샐러드: { price: 8000, category: CATEGORY_DICT.appetizer },
    티본스테이크: { price: 55000, category: CATEGORY_DICT.main },
    바비큐립: { price: 54000, category: CATEGORY_DICT.main },
    해산물파스타: { price: 35000, category: CATEGORY_DICT.main },
    크리스마스파스타: { price: 25000, category: CATEGORY_DICT.main },
    초코케이크: { price: 15000, category: CATEGORY_DICT.dessert },
    아이스크림: { price: 5000, category: CATEGORY_DICT.dessert },
    제로콜라: { price: 3000, category: CATEGORY_DICT.drink },
    레드와인: { price: 60000, category: CATEGORY_DICT.drink },
    샴페인: { price: 25000, category: CATEGORY_DICT.drink },
  },
};

const DISCOUNT = {
  WEEKDAY_DISCOUNT_PER_MENUS: 2023,
  WEEKEND_DISCOUNT_PER_MENUS: 2023,
  SPECIAL_DAY_DISCOUNT: 1000,
  D_DAY_START_INCLUSIVE: 1,
  D_DAY_END_INCLUSIVE: 25,
  D_DAY_DEFAULT_DISCOUNT: 1000,
  D_DAY_BONUS_DISCOUNT: 100,
};

const REWARD = {
  REWARD_THRESHOLD_INCLUSIVE: 120000,
  REWARD_MENUS: {
    샴페인: 1,
  },
};

const BADGE = {
  BADGE_TRESHOLD: {
    산타: 20000,
    트리: 10000,
    별: 5000,
  },
};

const DAY = {
  WEEKEND_MOD: new Set([1, 2]),
  WEEK_LENGTH: 7,
  SPECIAL_DAYS: new Set([3, 10, 17, 24, 25, 31]),
};

const EVENT_REQUIREMENTS = {
  EVENT_THRESHOLD_INCLUSIVE: 10000,
};

const DOMAIN = Object.freeze({
  ...COMMON_STRINGS,
  ...MENU,
  ...DISCOUNT,
  ...REWARD,
  ...BADGE,
  ...DAY,
  ...EVENT_REQUIREMENTS,
});

export default DOMAIN;
