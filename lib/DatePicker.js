'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _tcomb = require('tcomb');

var _tcomb2 = _interopRequireDefault(_tcomb);

var _tcombReact = require('tcomb-react');

var _utils = require('./utils');

var _model = require('./utils/model');

var _DayPicker = require('./daypicker/DayPicker');

var _DayPicker2 = _interopRequireDefault(_DayPicker);

var _MonthPicker = require('./monthpicker/MonthPicker');

var _MonthPicker2 = _interopRequireDefault(_MonthPicker);

var _YearPicker = require('./yearpicker/YearPicker');

var _YearPicker2 = _interopRequireDefault(_YearPicker);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePicker = (_dec = (0, _utils.skinnable)(), _dec2 = (0, _tcombReact.props)({
  onChange: _tcomb2.default.maybe(_tcomb2.default.Function),
  value: _tcomb2.default.maybe(_model.Value),
  valueLink: _tcomb2.default.maybe(_tcomb2.default.interface({
    value: _tcomb2.default.maybe(_model.Value),
    requestChange: _tcomb2.default.Function
  })),
  defaultValue: _tcomb2.default.maybe(_model.Value),
  minDate: _tcomb2.default.maybe(_model.Value),
  maxDate: _tcomb2.default.maybe(_model.Value),
  locale: _tcomb2.default.maybe(_tcomb2.default.String),
  startMode: _tcomb2.default.maybe(_model.Mode),
  startDate: _tcomb2.default.maybe(_model.Value),
  fixedMode: _tcomb2.default.maybe(_tcomb2.default.Boolean),
  returnFormat: _tcomb2.default.maybe(_tcomb2.default.String),
  floating: _tcomb2.default.maybe(_tcomb2.default.Boolean),
  closeOnClickOutside: _tcomb2.default.maybe(_tcomb2.default.Boolean), // used only with DatePickerInput
  className: _tcomb2.default.maybe(_tcomb2.default.String),
  prevIconClassName: _tcomb2.default.maybe(_tcomb2.default.String),
  nextIconClassName: _tcomb2.default.maybe(_tcomb2.default.String),
  position: _tcomb2.default.maybe(_tcomb2.default.enums.of(['top', 'bottom'])),
  style: _tcomb2.default.maybe(_tcomb2.default.Object),
  placeholder: _tcomb2.default.maybe(_tcomb2.default.String)
}), (0, _utils.valueLink)(_class = (0, _utils.format)(_class = _dec(_class = _dec2(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  function DatePicker(props) {
    _classCallCheck(this, DatePicker);

    var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props));

    _this.getStateFromProps = function (_props) {
      var _this$getValueLink = _this.getValueLink(_props),
          value = _this$getValueLink.value;

      var defaultValue = _props.defaultValue,
          startDate = _props.startDate,
          startMode = _props.startMode;

      var date = typeof value === 'string' ? _this.parsePropDateString(value) : (0, _moment2.default)(value);
      var initialDate = defaultValue ? typeof defaultValue === 'string' ? _this.parsePropDateString(defaultValue) : (0, _moment2.default)(defaultValue) : typeof startDate === 'string' ? _this.parsePropDateString(startDate) : (0, _moment2.default)(startDate);

      var visibleDate = value ? date.clone() : initialDate; // must be copy, otherwise they get linked
      return {
        date: value ? date.clone() : undefined,
        visibleDate: visibleDate,
        mode: startMode
      };
    };

    _this.onChangeVisibleDate = function (date) {
      _this.setState({ visibleDate: date });
    };

    _this.onChangeSelectedDate = function (date) {
      _this.setState({
        visibleDate: date.clone(), // must be copy, otherwise they get linked
        date: date
      }, function () {
        return _this.getValueLink().requestChange(date.toDate());
      });
    };

    _this.onChangeMode = function (mode) {
      setTimeout(function () {
        return _this.setState({ mode: mode });
      });
    };

    _this.changeYear = function (year) {
      _this.setState({ visibleDate: _this.state.visibleDate.clone().year(year) });
    };

    _this.changeMonth = function (month) {
      _this.setState({ visibleDate: _this.state.visibleDate.clone().month(month) });
    };

    if (props.locale) {
      _moment2.default.locale(props.locale);
      if (process.env.NODE_ENV !== 'production' && _moment2.default.locale() !== props.locale) {
        console.warn('Setting "' + props.locale + '" as locale failed. Did you import it correctly?'); // eslint-disable-line no-console
      }
    }
    _this.state = _this.getStateFromProps(props);
    return _this;
  }

  _createClass(DatePicker, [{
    key: 'getLocals',
    value: function getLocals(_ref) {
      var className = _ref.className,
          style = _ref.style,
          floating = _ref.floating,
          minDate = _ref.minDate,
          maxDate = _ref.maxDate,
          fixedMode = _ref.fixedMode,
          prevIconClassName = _ref.prevIconClassName,
          nextIconClassName = _ref.nextIconClassName,
          position = _ref.position;
      var _state = this.state,
          mode = _state.mode,
          date = _state.date,
          visibleDate = _state.visibleDate;

      return {
        style: style,
        className: (0, _classnames2.default)('react-datepicker', className, { floating: floating, 'position-top': position === 'top' }),
        dayPickerProps: mode === (0, _model.Mode)('day') && {
          date: date, visibleDate: visibleDate,
          minDate: minDate, maxDate: maxDate,
          mode: mode,
          fixedMode: fixedMode,
          prevIconClassName: prevIconClassName,
          nextIconClassName: nextIconClassName,
          changeMonth: this.changeMonth,
          onSelectDate: this.onChangeSelectedDate,
          onChangeMode: this.onChangeMode
        },
        monthPickerProps: mode === (0, _model.Mode)('month') && {
          date: date, visibleDate: visibleDate,
          minDate: minDate, maxDate: maxDate,
          mode: mode,
          fixedMode: fixedMode,
          prevIconClassName: prevIconClassName,
          nextIconClassName: nextIconClassName,
          changeYear: this.changeYear,
          onSelectDate: this.onChangeSelectedDate,
          onChangeMode: this.onChangeMode,
          onChangeVisibleDate: this.onChangeVisibleDate
        },
        yearPickerProps: mode === (0, _model.Mode)('year') && {
          date: date, visibleDate: visibleDate,
          minDate: minDate, maxDate: maxDate,
          mode: mode,
          fixedMode: fixedMode,
          prevIconClassName: prevIconClassName,
          nextIconClassName: nextIconClassName,
          changeYear: this.changeYear,
          onSelectDate: this.onChangeSelectedDate,
          onChangeMode: this.onChangeMode,
          onChangeVisibleDate: this.onChangeVisibleDate
        }
      };
    }
  }, {
    key: 'template',
    value: function template(_ref2) {
      var className = _ref2.className,
          style = _ref2.style,
          dayPickerProps = _ref2.dayPickerProps,
          monthPickerProps = _ref2.monthPickerProps,
          yearPickerProps = _ref2.yearPickerProps;

      return _react2.default.createElement(
        'div',
        { className: className, style: style },
        dayPickerProps && _react2.default.createElement(_DayPicker2.default, dayPickerProps),
        monthPickerProps && _react2.default.createElement(_MonthPicker2.default, monthPickerProps),
        yearPickerProps && _react2.default.createElement(_YearPicker2.default, yearPickerProps)
      );
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.getValueLink(nextProps).value !== this.getValueLink().value) {
        this.setState(this.getStateFromProps(nextProps));
      }
    }
  }]);

  return DatePicker;
}(_react2.default.Component), _class2.defaultProps = {
  startMode: 'day',
  className: '',
  prevIconClassName: 'icon-rc-datepicker icon-rc-datepicker_prev',
  nextIconClassName: 'icon-rc-datepicker icon-rc-datepicker_next',
  style: {},
  position: 'bottom'
}, _temp)) || _class) || _class) || _class) || _class);
exports.default = DatePicker;