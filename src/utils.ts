/**
* floatObj 包含加减乘除四个方法，能确保浮点数运算不丢失精度
*
* 精度丢失问题（或称舍入误差，其根本原因是二进制和实现位数限制有些数无法有限表示
* 以下是十进制小数对应的二进制表示
*      0.1 >> 0.0001 1001 1001 1001…（1001无限循环）
*      0.2 >> 0.0011 0011 0011 0011…（0011无限循环）
* 计算机里每种数据类型的存储是一个有限宽度，比如 JavaScript
  使用 64 位存储数字类型，因此超出的会舍去。舍去的部分就是精度丢失的部分。
*
* ** method **
*  add / subtract / multiply /divide
*
* ** explame **
*  0.1 + 0.2 == 0.30000000000000004 （多了 0.00000000000004）
*  0.2 + 0.4 == 0.6000000000000001  （多了 0.0000000000001）
*  19.9 * 100 == 1989.9999999999998 （少了 0.0000000000002）
*
* floatObj.add(0.1, 0.2) === 0.3
* floatObj.multiply(19.9, 100) === 1990
*
*/
export const floatObj = (function () {
  /*
   * 判断obj是否为一个整数 整数取整后还是等于自己。利用这个特性来判断是否是整数
   */
  function isInteger(obj: any) {
    // 或者使用 Number.isInteger()
    return Math.floor(obj) === obj;
  }
  /*
   * 将一个浮点数转成整数，返回整数和倍数。如 3.14 >> 314，倍数是 100
   * @param floatNum {number} 小数
   * @return {object}
   *   {times:100, num: 314}
   */
  function toInteger(floatNum: any) {
    // 初始化数字与精度 times精度倍数  num转化后的整数
    var ret = { times: 1, num: 0 };
    var isNegative = floatNum < 0; //是否是小数
    if (isInteger(floatNum)) {
      // 是否是整数
      ret.num = floatNum;
      return ret; //是整数直接返回
    }
    var strfi = floatNum + ""; // 转换为字符串
    var dotPos = strfi.indexOf(".");
    var len = strfi.substr(dotPos + 1).length; // 拿到小数点之后的位数
    var times = Math.pow(10, len); // 精度倍数
    /* 为什么加0.5?
            前面讲过乘法也会出现精度问题
            假设传入0.16344556此时倍数为100000000
            Math.abs(0.16344556) * 100000000=0.16344556*10000000=1634455.5999999999 
            少了0.0000000001
            加上0.5 0.16344556*10000000+0.5=1634456.0999999999 parseInt之后乘法的精度问题得以矫正
        */
    var pi: any = Math.abs(floatNum) * times + 0.5;
    var intNum = parseInt(pi, 10);
    // debugger;
    ret.times = times;
    if (isNegative) {
      intNum = -intNum;
    }
    ret.num = intNum;
    return ret;
  }

  /*
   * 核心方法，实现加减乘除运算，确保不丢失精度
   * 思路：把小数放大为整数（乘），进行算术运算，再缩小为小数（除）
   * @param a {number} 运算数1
   * @param b {number} 运算数2
   */
  function operation(a: any, b: any, op: any) {
    var o1 = toInteger(a);
    var o2 = toInteger(b);
    var n1 = o1.num; // 3.25+3.153
    var n2 = o2.num;
    var t1 = o1.times;
    var t2 = o2.times;
    var max = t1 > t2 ? t1 : t2;
    var result = null;
    switch (op) {
      // 加减需要根据倍数关系来处理
      case "add":
        if (t1 === t2) {
          // 两个小数倍数相同
          result = n1 + n2;
        } else if (t1 > t2) {
          // o1 小数位 大于 o2
          result = n1 + n2 * (t1 / t2);
        } else {
          // o1小数位小于 o2
          result = n1 * (t2 / t1) + n2;
        }
        return result / max;
      case "subtract":
        if (t1 === t2) {
          result = n1 - n2;
        } else if (t1 > t2) {
          result = n1 - n2 * (t1 / t2);
        } else {
          result = n1 * (t2 / t1) - n2;
        }
        return result / max;
      case "multiply":
        // 325*3153/(100*1000) 扩大100倍 ==>缩小100倍
        result = (n1 * n2) / (t1 * t2);
        return result;
      case "divide":
        // (325/3153)*(1000/100)  缩小100倍 ==>扩大100倍
        result = (n1 / n2) * (t2 / t1);
        return result;
    }
  }

  // 加减乘除的四个接口
  function add(a: any, b: any) {
    return operation(a, b, "add");
  }
  function subtract(a: any, b: any) {
    return operation(a, b, "subtract");
  }
  function multiply(a: any, b: any) {
    return operation(a, b, "multiply");
  }
  function divide(a: any, b: any) {
    return operation(a, b, "divide");
  }
  return {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
  };
})();

export const initList = ({
  minScale,
  maxScale,
}: {
  minScale: number;
  maxScale: number;
}) => {
  const scaleSpan = 0.1;
  let list = [];
  let tmp: any = minScale;
  list.push({ value: tmp });
  while (tmp <= maxScale) {
    tmp = floatObj.add(tmp, scaleSpan);
    list.push({ value: tmp });
  }

  list = list.map((x: any) => ({
    ...x,
    isInt: x.value % 1 === 0,
  }));
  console.log(list);
  return list;
};
