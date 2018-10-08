// 数组更新检测：变异方法

new Vue({
        el: 'example',
        data: {
            parentMessage: 'Parent',
            items: [
                { message: 'Foo' },
                { message: 'Bar' }
            ]
        }

    })
    // 被添加到数组末尾的元素。当调用该方法时，新的 length 属性值将被返回。
Push()
    //「返回值」从数组中删除最后一个元素(当数组为空时返回undefined)。
pop()
    //从数组中删除第一个元素，并返回该元素的值 如果数组为空则返回undefined 。 
shift()
    //将一个或多个元素添加到数组的开头，并返回新数组的长度。
unshift()
    //通过删除现有元素和/或添加新元素来更改一个数组的内容
splice(start[, deleteCount[, item1[, item2[, ...]]]])
    //排序首字母或者首数字
sort()
    //方法将数组中元素的位置颠倒
reverse()

https: //developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array