class ItemCalc {
  static sumObjValue(obj) {
    const result = Object.values(obj);
    return ItemCalc.sumArray(result);
  }

  static sumArray(array) {
    return array.reduce((acc, cur) => acc + cur, 0);
  }
}

export default ItemCalc;
