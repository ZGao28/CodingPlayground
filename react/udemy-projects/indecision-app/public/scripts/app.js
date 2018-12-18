'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            options: ['read book', 'clean room']
        };
        _this.resetOptions = _this.resetOptions.bind(_this);
        _this.addOption = _this.addOption.bind(_this);
        _this.makeChoice = _this.makeChoice.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'resetOptions',
        value: function resetOptions() {
            this.setState({
                options: []
            });
        }
    }, {
        key: 'makeChoice',
        value: function makeChoice() {
            var randomNumber = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[randomNumber]);
        }
    }, {
        key: 'addOption',
        value: function addOption(option) {
            if (option) {
                this.setState(function (prevState) {
                    return {
                        options: prevState.options.concat(option)
                    };
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var appData = {
                title: 'IndecisionApp',
                subtitle: 'Put your life in the hands of a computer'
            };
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: appData.title, subtitle: appData.subtitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0, makeChoice: this.makeChoice, resetOptions: this.resetOptions }),
                React.createElement(Options, { options: this.state.options }),
                React.createElement(AddOption, { add: this.addOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title ? this.props.title : 'No Current Title'
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subtitle ? this.props.subtitle : 'No Current Subtitle'
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { disabled: !this.props.hasOptions, onClick: this.props.makeChoice },
                    'What should I do?'
                ),
                React.createElement(
                    'button',
                    { onClick: this.props.resetOptions },
                    'Reset all Options'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var AddOption = function (_React$Component4) {
    _inherits(AddOption, _React$Component4);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this4 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this4.addOption = _this4.addOption.bind(_this4);
        return _this4;
    }

    _createClass(AddOption, [{
        key: 'addOption',
        value: function addOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value;
            this.props.add(option);
            e.target.elements.option.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.addOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var Options = function (_React$Component5) {
    _inherits(Options, _React$Component5);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.props.options.map(function (option) {
                    return React.createElement(Option, { key: option, description: option });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component6) {
    _inherits(Option, _React$Component6);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'p',
                null,
                this.props.description
            );
        }
    }]);

    return Option;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
