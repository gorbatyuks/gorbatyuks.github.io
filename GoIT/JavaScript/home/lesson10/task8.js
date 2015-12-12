/**
 * Created by ≈жик on 01.12.2015.
 */
var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link' ];

var classesObj = {};

arr.forEach(function(elem) {
    if (!classesObj[elem]) {
        classesObj[elem] = 1;
    } else {
        classesObj[elem] += 1;
    }
});

var result = [];

for (var className in classesObj) {
    result.push(className);
}


result.sort(function(a, b) {
    return classesObj[b] - classesObj[a];
});

console.log(result);