// events

const events = require('events');

const myEmit = new events.EventEmitter();

myEmit.on('some_event', function (text) {
    console.log(text);
});

myEmit.emit('some_event', 'Обработчик событий сработал!');

// util

const util = require('util');
const cars = function (model) {
    this.model = model;
};

util.inherits(cars, events.EventEmitter);

const bmw = new cars('bmw');
const audi = new cars('audi');
const volvo = new cars('volvo');

const Cars = [bmw, audi, volvo];
Cars.forEach(function (car) {
    car.on('speed', function (text) {
        console.log(car.model + ' speed is - ' + text);
    })
})


bmw.emit('speed', '254.5 km');
volvo.emit('speed', '180 km');