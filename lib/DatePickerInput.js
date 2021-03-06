'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Props = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _class2, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _tcomb = require('tcomb');

var _tcomb2 = _interopRequireDefault(_tcomb);

var _tcombReact = require('tcomb-react');

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

var _DatePicker = require('./DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _model = require('./utils/model');

var _utils = require('./utils');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var INVALID = 'Invalid date';
var ENTER_KEYCODE = 13;

var Props = exports.Props = {
  value: _tcomb2.default.maybe(_model.Value),
  valueLink: _tcomb2.default.maybe(_tcomb2.default.interface({
    value: _tcomb2.default.maybe(_model.Value),
    requestChange: _tcomb2.default.Function
  })),
  onChange: _tcomb2.default.maybe(_tcomb2.default.Function),
  onShow: _tcomb2.default.maybe(_tcomb2.default.Function),
  onHide: _tcomb2.default.maybe(_tcomb2.default.Function),
  onClear: _tcomb2.default.maybe(_tcomb2.default.Function),
  small: _tcomb2.default.maybe(_tcomb2.default.Boolean),
  defaultValue: _tcomb2.default.maybe(_model.Value),
  minDate: _tcomb2.default.maybe(_model.Value),
  maxDate: _tcomb2.default.maybe(_model.Value),
  locale: _tcomb2.default.maybe(_tcomb2.default.String),
  startMode: _tcomb2.default.maybe(_tcomb2.default.enums.of(['day', 'month', 'year'])),
  startDate: _tcomb2.default.maybe(_model.Value),
  fixedMode: _tcomb2.default.maybe(_tcomb2.default.Boolean),
  displayFormat: _tcomb2.default.maybe(_tcomb2.default.String),
  returnFormat: _tcomb2.default.maybe(_tcomb2.default.String),
  format: _tcomb2.default.maybe(_tcomb2.default.String),
  validationFormat: _tcomb2.default.maybe(_tcomb2.default.String),
  showOnInputClick: _tcomb2.default.maybe(_tcomb2.default.Boolean),
  closeOnClickOutside: _tcomb2.default.maybe(_tcomb2.default.Boolean),
  showInputButton: _tcomb2.default.maybe(_tcomb2.default.Boolean),
  autoClose: _tcomb2.default.maybe(_tcomb2.default.Boolean),
  floating: _tcomb2.default.maybe(_tcomb2.default.Boolean),
  disabled: _tcomb2.default.maybe(_tcomb2.default.Boolean),
  position: _tcomb2.default.maybe(_tcomb2.default.enums.of(['top', 'bottom'])),
  iconClassName: _tcomb2.default.maybe(_tcomb2.default.String),
  iconClearClassName: _tcomb2.default.maybe(_tcomb2.default.String),
  className: _tcomb2.default.maybe(_tcomb2.default.String), // used to omit from inputProps
  style: _tcomb2.default.maybe(_tcomb2.default.Object), // used to omit from inputProps
  placeholder: _tcomb2.default.maybe(_tcomb2.default.String)
};

/** A decent and pretty date picker to be used with React
 * @param value - current date
 * @param valueLink - valueLink object to replace "value" and "onChange"
 * @param onChange - called when value changes
 * @param onShow - called when datepicker is opened
 * @param onHide - called when datepicker is closed
 * @param onClear - called when value is cleared
 * @param small - whether it's small or not
 * @param defaultValue - default date
 * @param minDate - minimum date selectable by the user
 * @param maxDate - maximum date selectable by the user
 * @param locale - locale used for translations
 * @param startMode - the start view of the datepicker
 * @param startDate - specify an initial "visible" date with no need to select a defaultValue
 * @param fixedMode - whether the user can use multiple views or not
 * @param displayFormat - MomentJS format used to display current date
 * @param returnFormat - MomentJS format used to format date before returing through "onChange"
 * @param format - MomentJS format used to format date before returing through "onChange"
 * @param validationFormat - MomentJS format used to format date before returing through "onChange"
 * @param showOnInputClick - whether the datepicker should open when user click on the input
 * @param closeOnClickOutside - whether the datepicker should close when user clicks outside of it
 * @param showInputButton - whether the input-button should be rendered
 * @param autoClose - pass true if you want the datepicker to close automatically after the user selects a value
 * @param floating - whether the datepicker should float over the page content (absolute position)
 * @param position - whether the datepicker should be rendered above or below the input field
 * @param disabled - whether the datepicker should be disabled or not
 * @param iconClassName - classname used for the icon
 * @param iconClearClassName - classname used for the clear icon
 */

var DatePickerInput = (_dec = (0, _utils.skinnable)(), _dec2 = (0, _tcombReact.props)(Props, { strict: false }), (0, _utils.format)(_class = (0, _utils.valueLink)(_class = _dec(_class = _dec2(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(DatePickerInput, _React$Component);

  function DatePickerInput(props) {
    _classCallCheck(this, DatePickerInput);

    var _this = _possibleConstructorReturn(this, (DatePickerInput.__proto__ || Object.getPrototypeOf(DatePickerInput)).call(this, props));

    _initialiseProps.call(_this);

    if (props.locale) {
      _moment2.default.locale(props.locale);
    }
    var _date = _this.getValueLink().value || props.defaultValue;
    var date = typeof _date === 'string' ? _this.parsePropDateString(_date) : (0, _moment2.default)(_date);
    _this.state = {
      date: _date ? date : undefined,
      hasValue: !!_date,
      dateString: _date ? _this.formatDisplayedDate(date) : '',
      showing: false
    };
    return _this;
  }

  _createClass(DatePickerInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.closeOnClickOutside) {
        this.addOnClickListener();
      }
    }
  }, {
    key: 'getLocals',
    value: function getLocals(props) {
      var showInputButton = props.showInputButton,
          iconClassName = props.iconClassName,
          showOnInputClick = props.showOnInputClick,
          onClear = props.onClear,
          small = props.small,
          iconClearClassName = props.iconClearClassName,
          defaultValue = props.defaultValue,
          minDate = props.minDate,
          maxDate = props.maxDate,
          locale = props.locale,
          startMode = props.startMode,
          startDate = props.startDate,
          fixedMode = props.fixedMode,
          floating = props.floating,
          closeOnClickOutside = props.closeOnClickOutside,
          className = props.className,
          disabled = props.disabled,
          position = props.position,
          style = props.style;
      var _state = this.state,
          active = _state.showing,
          hasValue = _state.hasValue,
          value = _state.dateString,
          date = _state.date;


      var inputProps = (0, _omit2.default)(props, Object.keys(Props));
      var onInputClick = showOnInputClick ? this.show : undefined;
      var onButtonClick = showInputButton ? this.toggleDatePicker : undefined;
      var onInputClear = onClear ? this.onClear : undefined;

      return {
        style: style,
        className: (0, _classnames2.default)('react-datepicker-component', { 'is-disabled': disabled }, className),
        inputProps: _extends({
          value: value,
          small: small, active: active, hasValue: hasValue,
          iconClassName: iconClassName, iconClearClassName: iconClearClassName,
          onInputClick: onInputClick, onButtonClick: onButtonClick, onInputClear: onInputClear,
          onInputChange: this.onChangeInput,
          onInputKeyUp: this.hideOnEnterKey,
          placeholder: props.placeholder
        }, inputProps),
        datePickerProps: active && {
          defaultValue: defaultValue,
          minDate: minDate,
          maxDate: maxDate,
          locale: locale,
          startMode: startMode,
          startDate: startDate,
          fixedMode: fixedMode,
          floating: floating,
          position: position,
          closeOnClickOutside: closeOnClickOutside,
          value: date ? date.toDate() : undefined,
          onChange: this._onChangeDate
        }
      };
    }
  }, {
    key: 'template',
    value: function template(_ref) {
      var _this2 = this;

      var className = _ref.className,
          style = _ref.style,
          inputProps = _ref.inputProps,
          datePickerProps = _ref.datePickerProps;

      return _react2.default.createElement(
        'div',
        _extends({ style: style, className: className }, { ref: function ref(input) {
            _this2.datePickerInputRef = input;
          } }),
        _react2.default.createElement(_Input2.default, inputProps),
        datePickerProps && _react2.default.createElement(_DatePicker2.default, datePickerProps)
      );
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _getValueLink = this.getValueLink(nextProps),
          value = _getValueLink.value;

      // Update `date` and `dateString` if `props.value` has changed


      if (value !== INVALID && value !== this.getValueLink().value) {
        if (value) {
          var date = typeof value === 'string' ? this.parsePropDateString(value, nextProps) : (0, _moment2.default)(value);
          this.setState({
            date: date,
            dateString: date.isValid() ? this.formatDisplayedDate(date, nextProps) : this.state.dateString
          });
        } else {
          this.setState({
            date: undefined,
            dateString: ''
          });
        }
      }

      // Close datepicker if `disabled` has switched to `true`
      if (nextProps.disabled && !this.props.disabled) {
        this.hide();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.closeOnClickOutside) {
        this.removeOnClickListener();
      }
    }
  }]);

  return DatePickerInput;
}(_react2.default.Component), _class2.defaultProps = {
  onShow: function onShow() {},
  onHide: function onHide() {},
  startMode: 'day',
  autoClose: true,
  closeOnClickOutside: true,
  floating: true,
  small: false,
  showInputButton: true,
  position: 'bottom',
  iconClassName: 'icon-rc-datepicker icon-rc-datepicker_calendar',
  iconClearClassName: 'icon-rc-datepicker icon-rc-datepicker_clear',
  className: '',
  style: {}
}, _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.datePickerInputRef = null;

  this.addOnClickListener = function () {
    if (window.attachEvent) {
      // Internet Explorer
      window.attachEvent('onclick', _this3.hideOnClickOutside);
    } else if (window.addEventListener) {
      window.addEventListener('click', _this3.hideOnClickOutside, false);
    }
  };

  this.removeOnClickListener = function () {
    if (window.detachEvent) {
      // Internet Explorer
      window.detachEvent('onclick', _this3.hideOnClickOutside);
    } else if (window.removeEventListener) {
      window.removeEventListener('click', _this3.hideOnClickOutside, false);
    }
  };

  this.getDatePickerInput = function () {
    return _reactDom2.default.findDOMNode(_this3.datePickerInputRef);
  };

  this.isEventInsideDatePickerInput = function (el) {
    if (el === _this3.getDatePickerInput()) {
      return true;
    } else if (el.parentNode) {
      return _this3.isEventInsideDatePickerInput(el.parentNode);
    } else {
      return false;
    }
  };

  this.hideOnClickOutside = function (e) {
    if (!_this3.isEventInsideDatePickerInput(e.target) && _this3.state.showing) {
      _this3.hide();
    }
  };

  this.hide = function () {
    _this3.setState({ showing: false }, _this3.props.onHide);
  };

  this.show = function () {
    if (!_this3.state.showing) {
      _this3.setState({ showing: true }, _this3.props.onShow);
    }
  };

  this.toggleDatePicker = function () {
    var callback = _this3.state.showing ? _this3.props.onHide : _this3.props.onShow;
    _this3.setState({ showing: !_this3.state.showing }, callback);
  };

  this.hideOnEnterKey = function (e) {
    if (e.keyCode === ENTER_KEYCODE) {
      _this3.hide();
    }
  };

  this.onClear = function () {
    var _date = _this3.props.defaultValue;
    var date = typeof _date === 'string' ? _this3.parsePropDateString(_date) : (0, _moment2.default)(_date);
    _this3.setState({
      date: _date ? date : undefined,
      dateString: _date ? _this3.formatDisplayedDate(date) : '',
      showing: false
    }, _this3.props.onClear);
  };

  this._onChangeDate = function (jsDate) {
    var newDate = (0, _moment2.default)(jsDate);
    var newDateString = _this3.formatDisplayedDate(newDate);
    if (_this3.props.autoClose) {
      _this3.hide();
    }
    _this3.getValueLink().requestChange(jsDate, _this3.formatReturnedDate(newDate));
    if (newDateString !== _this3.state.dateString) {
      _this3.setState({
        hasValue: true,
        date: newDate,
        dateString: newDateString
      });
    }
  };

  this.onChangeInput = function (_ref2) {
    var dateString = _ref2.target.value;

    if (dateString || _this3.state.date) {
      var parsedDate = _this3.parseInputDateString(dateString);
      var date = parsedDate.isValid() ? parsedDate : _this3.state.date;

      var jsDate = parsedDate.isValid() ? parsedDate.toDate() : INVALID;
      var returnedDateString = jsDate ? _this3.formatReturnedDate(parsedDate) : INVALID;

      _this3.setState({
        dateString: dateString,
        date: date,
        hasValue: parsedDate.isValid()
      }, function () {
        return _this3.getValueLink().requestChange(jsDate, returnedDateString);
      });
    } else if (!dateString) {
      _this3.setState({ dateString: dateString });
    }
  };
}, _temp)) || _class) || _class) || _class) || _class);
exports.default = DatePickerInput;