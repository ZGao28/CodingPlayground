'use strict';

var appElement = document.getElementById('app');

var visible = false;

var toggleVisibility = function toggleVisibility() {
    visible = !visible;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visible ? 'Hide Details' : 'Show Details'
        ),
        visible ? React.createElement(
            'h5',
            null,
            'Here are some details'
        ) : false
    );
    ReactDOM.render(template, appElement);
};

render();
