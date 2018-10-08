// for (var i = 1; i <= 5; i++) {
//     setTimeout(function timer() {
//         console.log(i)
//     }, i * 1000)
// }
// for (var i = 1; i <= 5; i++) {
//     (function() {
//         var j = i;
//         setTimeout(function timer() {
//             console.log(j)
//         }, j * 1000 + 6000)
//     })()
// }
// for (var i = 1; i <= 5; i++) {
//     let j = i;
//     setTimeout(function timer() {
//         console.log(j)
//     }, j * 1000 + 12000)
// }
// for (var i = 1; i <= 5; i++) {
//     let j = i; //给闭包一个块儿作用域
//     setTimeout(function() {
//         console.log(j)
//     }, j * 1000 + 18000)

// }
// for (let i = 1; i <= 5; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, i * 1000 + 24000)
// }


// function CoolModule() {
//     var something = "cool";
//     var another = [1, 2, 3];

//     function doSomething() {
//         console.log(something);
//     }

//     function doAnother() {
//         console.log(another.join("~"));
//     }
//     return {
//         doSomething: doSomething,
//         doAnother: doAnother
//     };

// }
// var foo = CoolModule();
// foo.doSomething();
// foo.doAnother();
// //私有数据变量something another以及两个内部函数doSomething()&&doAnother()
// //它们都拥有覆盖在foo()内部作用域上的词法作用域


// function CoolModule(id) {
//     function indentify() {
//         console.log(id);
//     }
//     return {
//         indentify: indentify
//     }
// }
// var foo1 = CoolModule('foo1');
// var foo2 = CoolModule('foo2');
// foo1.indentify();

var obj = {
    id: "hello",
    cool: function coolFn() {
        console.log(this.id)
    }
}
var id = "goodbye";
obj.cool();
setTimeOut(obj.cool, 1000);