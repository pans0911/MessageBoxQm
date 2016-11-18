'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./MessageBoxQm.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by pans on 16/11/18.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var MessageBoxQm = function (_Component) {
  _inherits(MessageBoxQm, _Component);

  function MessageBoxQm(props) {
    _classCallCheck(this, MessageBoxQm);

    var _this = _possibleConstructorReturn(this, (MessageBoxQm.__proto__ || Object.getPrototypeOf(MessageBoxQm)).call(this, props));

    _this.state = {
      is_hide: true
    };
    return _this;
  }

  _createClass(MessageBoxQm, [{
    key: 'open',
    value: function open(time) {
      var hidetime = time == undefined ? 500 : time;
      this.setState({
        is_hide: false
      });
      var that = this;
      setTimeout(function () {
        that.setState({
          is_hide: true
        });
      }, hidetime);
    }
  }, {
    key: 'render',
    value: function render() {
      var message = (0, _classnames2.default)({
        "hide": this.state.is_hide,
        "message-box": true
      });
      return _react2.default.createElement(
        'div',
        { className: message },
        this.props.children
      );
    }
  }]);

  return MessageBoxQm;
}(_react.Component);

exports.default = MessageBoxQm;
//# sourceMappingURL=MessageBoxQm.js.map