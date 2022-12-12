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
export declare const floatObj: {
    add: (a: any, b: any) => number | undefined;
    subtract: (a: any, b: any) => number | undefined;
    multiply: (a: any, b: any) => number | undefined;
    divide: (a: any, b: any) => number | undefined;
};
export declare const initList: ({ minScale, maxScale, }: {
    minScale: number;
    maxScale: number;
}) => any[];
