function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var gretting = "Hello, I'm" + identify.call(this);
    console.log(gretting);
}
var me = {
    name: "Zhangjing"
};
var you = {
    name: "junjia"
};
identify.call(me);
identify.call(you);
speak.call(me);