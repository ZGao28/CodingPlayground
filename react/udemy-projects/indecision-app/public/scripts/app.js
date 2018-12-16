'use strict';

// Sample react component

var user = {
    name: 'Zi Gao',
    location: 'Ottawa',
    age: 19
};

var appElement = document.getElementById('app');

// can return undefined to omit a JSX element
var getLocation = function getLocation(location) {
    return location ? React.createElement(
        'p',
        null,
        location
    ) : undefined;
};

var multiplier = {
    numbers: [1, 6],
    constant: 2,
    performMultiplication: function performMultiplication() {
        var _this = this;

        return this.numbers.map(function (number) {
            return number * _this.constant;
        });
    }
};

getLocation = function getLocation(location) {
    return location ? React.createElement(
        'p',
        null,
        location
    ) : undefined;
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Not Signed In'
    ),
    user.age >= 20 && React.createElement(
        'p',
        null,
        user.age
    ),
    getLocation(user.location),
    React.createElement(
        'p',
        null,
        multiplier.performMultiplication()
    )
);

ReactDOM.render(template, appElement);
