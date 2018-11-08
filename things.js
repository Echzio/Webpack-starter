const array_counter = function (array) {
    return "В массиве находится " + array.length + " элементов!";
};

const multiply = function(x, y) {
    return `${x} умножить ${y} равно ${x * y}`;
}

const some_value = 451;

module.exports = {
    array_counter: array_counter,
    some_value: some_value,
    multiply: multiply
};