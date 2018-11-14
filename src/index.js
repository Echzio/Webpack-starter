import $ from 'jquery';
import some from './some.js';


$('.title').html('Webpack Document');

console.log(some.avg(2, 3, 4, 5, 6, 7));

console.log(some.max(1, 2, 3, 4, 5));

console.log(some.merge({
    a: 1
}, {
    b: 2
}));