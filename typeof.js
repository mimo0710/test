// 基本类型有六种： 
// null，undefined，boolean，number，string，symbol。
console.log(typeof 1); //number
console.log(typeof null); //object
//PS：为什么会出现这种情况呢？
//因为在 JS 的最初版本中，使用的是 32 位系统，
//为了性能考虑使用低位存储了变量的类型信息，
//000 开头代表是对象，然而 null 表示为全零，
//所以将它错误的判断为 object 。