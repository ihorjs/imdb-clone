webpackJsonp([0],{

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchOneMovie = exports.pickedMovie = exports.removeLike = exports.addLike = exports.getMovieInfo = undefined;
exports.getTrendingMovies = getTrendingMovies;
exports.topRatedMovies = topRatedMovies;

var _axios = __webpack_require__(68);

var _axios2 = _interopRequireDefault(_axios);

var _moviesData = __webpack_require__(81);

var _moviesData2 = _interopRequireDefault(_moviesData);

var _types = __webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function getTrendingMovies() {
  var _this = this;

  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var search, goodMovies;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              search = new _moviesData2.default();
              _context.next = 3;
              return search.discoverMovies();

            case 3:
              console.log(search.result);
              goodMovies = search.result;


              dispatch({
                type: _types.GET_TRENDING_MOVIES,
                payload: goodMovies
              });

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
}

var getMovieInfo = exports.getMovieInfo = function getMovieInfo() {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _axios2.default.get('/api/movie').then(function (res) {
                return dispatch({
                  type: _types.GATHER_MOVIES,
                  payload: res.data
                });
              }).catch(function (err) {
                return console.log(err);
              });

            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var addLike = exports.addLike = function addLike(id) {
  return function (dispatch) {

    _axios2.default.post('/api/movie/like/' + id).then(function (res) {
      return dispatch(getMovieInfo());
    }).catch(function (err) {
      return console.log(err);
    });
  };
};

var removeLike = exports.removeLike = function removeLike(id) {
  return function (dispatch) {
    _axios2.default.post('/api/movie/unlike/' + id).then(function (res) {
      return dispatch(getMovieInfo());
    }).catch(function (err) {
      return console.log(err);
    });
  };
};

function topRatedMovies() {
  var _this2 = this;

  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch) {
      var search, goodMovies;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              search = new _moviesData2.default();
              _context3.next = 3;
              return search.topRatedMovies();

            case 3:
              console.log(search.result);
              goodMovies = search.result;


              dispatch({
                type: _types.TOP_RATED_MOVIES,
                payload: goodMovies
              });

            case 6:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this2);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
}

var pickedMovie = exports.pickedMovie = function pickedMovie(movie) {
  return function (dispatch) {

    dispatch({
      type: _types.PICKED_MOVIE,
      payload: movie
    });
  };
};

var searchOneMovie = exports.searchOneMovie = function searchOneMovie(movie) {
  return function (dispatch) {

    dispatch({
      type: _types.SEARCH_MOVIE,
      payload: movie
    });
  };
};

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(36);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectListGroup = function SelectListGroup(_ref) {
  var name = _ref.name,
      value = _ref.value,
      error = _ref.error,
      info = _ref.info,
      onChange = _ref.onChange,
      options = _ref.options;

  var selectOptions = options.map(function (option) {
    return _react2.default.createElement(
      'option',
      { key: option.label, value: option.value },
      option.label
    );
  });
  return _react2.default.createElement(
    'div',
    { className: 'form-group start-xs' },
    _react2.default.createElement(
      'select',
      {
        className: (0, _classnames2.default)('form-control', {
          'is-invalid': error
        }),

        name: name,
        value: value,
        onChange: onChange },
      selectOptions
    ),
    info && _react2.default.createElement(
      'small',
      { className: 'form-text ' },
      info
    ),
    error && _react2.default.createElement(
      'div',
      { className: 'invalid-feedback' },
      error
    )
  );
};

SelectListGroup.propTypes = {
  name: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string.isRequired,
  info: _propTypes2.default.string,
  onChange: _propTypes2.default.func.isRequired,
  options: _propTypes2.default.array.isRequired

};

exports.default = SelectListGroup;

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(36);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextAreaFieldGroup = function TextAreaFieldGroup(_ref) {
  var name = _ref.name,
      placeholder = _ref.placeholder,
      value = _ref.value,
      error = _ref.error,
      info = _ref.info,
      onChange = _ref.onChange;

  return _react2.default.createElement(
    'div',
    { className: 'form-group start-xs' },
    _react2.default.createElement('textarea', {
      className: (0, _classnames2.default)('form-control', {
        'is-invalid': error
      }),
      placeholder: placeholder,
      name: name,
      value: value,
      onChange: onChange

    }),
    info && _react2.default.createElement(
      'small',
      { className: 'form-text ' },
      info
    ),
    error && _react2.default.createElement(
      'div',
      { className: 'invalid-feedback' },
      error
    )
  );
};

TextAreaFieldGroup.propTypes = {
  name: _propTypes2.default.string.isRequired,
  placeholder: _propTypes2.default.string,
  value: _propTypes2.default.string.isRequired,
  info: _propTypes2.default.string,
  error: _propTypes2.default.string,
  onChange: _propTypes2.default.func.isRequired

};

exports.default = TextAreaFieldGroup;

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(46);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _moviesData = __webpack_require__(81);

var _moviesData2 = _interopRequireDefault(_moviesData);

var _reactRouterDom = __webpack_require__(31);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(20);

var _authActions = __webpack_require__(80);

var _profileActions = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Header, [{
    key: 'onLogoutClick',
    value: function onLogoutClick(e) {
      e.preventDefault();
      this.props.clearCurrentProfile();
      this.props.logoutUser();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$auth = this.props.auth,
          isAuthenticated = _props$auth.isAuthenticated,
          user = _props$auth.user;


      var authLinks = _react2.default.createElement(
        'ul',
        { className: 'rightInfo' },
        _react2.default.createElement(
          'li',
          { className: 'oneAuth' },
          _react2.default.createElement(
            'a',
            null,
            'Movies'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'twoAuth' },
          _react2.default.createElement(
            'a',
            null,
            'TV Shows'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'linkButton' },
          _react2.default.createElement('img', {
            className: 'rounded-circle',
            src: user.avatar,
            alt: user.name,

            style: { width: '25px', marginRight: '5px' },
            title: 'You must have a Gravatar connected to your email to display an image'
          }),
          _react2.default.createElement(
            'ul',
            { className: 'sub-menu' },
            _react2.default.createElement(
              'li',
              { className: 'sub-link' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: 'profilepage' },
                user.name
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'sub-link-two' },
              _react2.default.createElement(
                'a',
                { onClick: this.onLogoutClick.bind(this)
                },
                'Logout'
              )
            )
          )
        ),
        _react2.default.createElement('hr', null)
      );

      var guestLinks = _react2.default.createElement(
        'ul',
        { className: 'rightInfo' },
        _react2.default.createElement(
          'li',
          { className: 'one' },
          _react2.default.createElement(
            'a',
            { onClick: this.hitButton },
            'Movies'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'two' },
          _react2.default.createElement(
            'a',
            null,
            'TV Shows'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'three' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/login', className: 'linkButton' },
            'Login'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'four' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/register', className: 'linkButton' },
            'Register'
          )
        ),
        _react2.default.createElement('hr', null)
      );

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'navbar' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/', className: 'compName' },
            'Moviizz'
          ),
          _react2.default.createElement(
            'div',
            { className: 'rightArea' },
            isAuthenticated ? authLinks : guestLinks
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

Header.propTypes = {
  logoutUser: _propTypes2.default.func.isRequired,
  auth: _propTypes2.default.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { logoutUser: _authActions.logoutUser, clearCurrentProfile: _profileActions.clearCurrentProfile })(Header);

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(68);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setAuthToken = function setAuthToken(token) {
  if (token) {
    //Apply to every request
    _axios2.default.defaults.headers.common['Authorization'] = token;
  } else {
    //Delete auth header
    delete _axios2.default.defaults.headers.common['Authorization'];
  }
};

exports.default = setAuthToken;

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isEmpty = function isEmpty(value) {
    return value === undefined || value === null || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && Object.keys(value).length === 0 || typeof value === 'string' && value.trim().length === 0;
};

exports.default = isEmpty;

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(31);

var _jwtDecode = __webpack_require__(220);

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _setAuthToken = __webpack_require__(178);

var _setAuthToken2 = _interopRequireDefault(_setAuthToken);

var _reactDom = __webpack_require__(46);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _authActions = __webpack_require__(80);

var _reactRedux = __webpack_require__(20);

var _store = __webpack_require__(299);

var _store2 = _interopRequireDefault(_store);

var _profileActions = __webpack_require__(69);

var _PrivateRoute = __webpack_require__(284);

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moviesData = __webpack_require__(81);

var _moviesData2 = _interopRequireDefault(_moviesData);

var _Register = __webpack_require__(283);

var _Register2 = _interopRequireDefault(_Register);

var _Login = __webpack_require__(282);

var _Login2 = _interopRequireDefault(_Login);

var _MovieSection = __webpack_require__(288);

var _MovieSection2 = _interopRequireDefault(_MovieSection);

var _ProfilePage = __webpack_require__(289);

var _ProfilePage2 = _interopRequireDefault(_ProfilePage);

var _CreateProfile = __webpack_require__(285);

var _CreateProfile2 = _interopRequireDefault(_CreateProfile);

var _EditProfile = __webpack_require__(286);

var _EditProfile2 = _interopRequireDefault(_EditProfile);

var _MovieProfile = __webpack_require__(292);

var _MovieProfile2 = _interopRequireDefault(_MovieProfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Header from './pages/Header'


//Check for token
if (localStorage.jwtToken) {
  //Set auth token header auth
  (0, _setAuthToken2.default)(localStorage.jwtToken);
  // Decode token and get user info and expiration
  var decoded = (0, _jwtDecode2.default)(localStorage.jwtToken);
  //Set user and isAuthenticated
  _store2.default.dispatch((0, _authActions.setCurrentUser)(decoded));

  //Check for expired token
  var currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    //Logout user
    _store2.default.dispatch((0, _authActions.logoutUser)());
    //clear current profile
    _store2.default.dispatch((0, _profileActions.clearCurrentProfile)());
    //Redirect to login
    window.location.href = '/';
  }
}

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: _store2.default },
        _react2.default.createElement(
          _reactRouterDom.BrowserRouter,
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _MovieSection2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/register', component: _Register2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/login', component: _Login2.default }),
            _react2.default.createElement(
              _reactRouterDom.Switch,
              null,
              _react2.default.createElement(_PrivateRoute2.default, { exact: true, path: '/profilepage', component: _ProfilePage2.default })
            ),
            _react2.default.createElement(
              _reactRouterDom.Switch,
              null,
              _react2.default.createElement(_PrivateRoute2.default, { exact: true, path: '/create-profile', component: _CreateProfile2.default })
            ),
            _react2.default.createElement(
              _reactRouterDom.Switch,
              null,
              _react2.default.createElement(_PrivateRoute2.default, { exact: true, path: '/edit-profile', component: _EditProfile2.default })
            ),
            _react2.default.createElement(
              _reactRouterDom.Switch,
              null,
              _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/moviepath/:movieName', component: _MovieProfile2.default })
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(20);

var _classnames = __webpack_require__(36);

var _classnames2 = _interopRequireDefault(_classnames);

var _authActions = __webpack_require__(80);

var _reactDom = __webpack_require__(46);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _TextFieldGroup = __webpack_require__(91);

var _TextFieldGroup2 = _interopRequireDefault(_TextFieldGroup);

var _reactRouterDom = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));

    _this.state = {

      email: '',
      password: '',

      errors: {}
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.auth.isAuthenticated) {
        this.props.history.push('/');
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.auth.isAuthenticated) {
        this.props.history.push('/');
      }

      if (nextProps.errors) {
        this.setState({ errors: nextProps.errors });
      }
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(e) {
      e.preventDefault();
      var userData = {

        email: this.state.email,
        password: this.state.password

      };
      this.props.loginUser(userData);
    }
  }, {
    key: 'render',
    value: function render() {
      var errors = this.state.errors;

      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement('div', { className: 'left-split col-xs-6' }),
        _react2.default.createElement(
          'div',
          { className: 'right-split col-xs-6' },
          _react2.default.createElement(
            'div',
            { className: 'loginForm' },
            _react2.default.createElement(
              'div',
              { className: 'row center-xs' },
              _react2.default.createElement(
                'div',
                { className: 'display-3' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/', className: 'display-4 ' },
                  'Movizz'
                ),
                _react2.default.createElement(
                  'h1',
                  { className: 'display-5' },
                  'Sign in to your account'
                ),
                _react2.default.createElement(
                  'form',
                  { onSubmit: this.onSubmit },
                  _react2.default.createElement(
                    'div',
                    { className: 'all-forms' },
                    _react2.default.createElement(
                      'h1',
                      { className: 'display-6 start-xs' },
                      'Email'
                    ),
                    _react2.default.createElement(_TextFieldGroup2.default, {
                      name: 'email',
                      type: 'email',
                      value: this.state.email,
                      onChange: this.onChange,
                      error: errors.email
                    }),
                    _react2.default.createElement(
                      'h1',
                      { className: 'display-6 start-xs' },
                      'Password'
                    ),
                    _react2.default.createElement(_TextFieldGroup2.default, {
                      name: 'password',
                      type: 'password',
                      value: this.state.password,
                      onChange: this.onChange,
                      error: errors.password
                    }),
                    _react2.default.createElement('input', {
                      type: 'submit',
                      className: 'btn btn-block' })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react.Component);

Login.propTypes = {
  loginUser: _propTypes2.default.func.isRequired,
  auth: _propTypes2.default.object.isRequired,
  errors: _propTypes2.default.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { loginUser: _authActions.loginUser })(Login);

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(31);

var _reactDom = __webpack_require__(46);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = __webpack_require__(36);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = __webpack_require__(20);

var _authActions = __webpack_require__(80);

var _TextFieldGroup = __webpack_require__(91);

var _TextFieldGroup2 = _interopRequireDefault(_TextFieldGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_Component) {
  _inherits(Register, _Component);

  function Register() {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this));

    _this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(Register, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.errors) {
        this.setState({ errors: nextProps.errors });
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(e) {
      e.preventDefault();
      var newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2

      };

      this.props.registerUser(newUser, this.props.history);
    }
  }, {
    key: 'render',
    value: function render() {
      var errors = this.state.errors;


      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement('div', { className: 'left-split col-xs-6' }),
        _react2.default.createElement(
          'div',
          { className: 'right-split col-xs-6' },
          _react2.default.createElement(
            'div',
            { className: 'registerForm' },
            _react2.default.createElement(
              'div',
              { className: 'row center-xs' },
              _react2.default.createElement(
                'div',
                { className: 'display-3' },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/', className: 'display-4 ' },
                  'Movizz'
                ),
                _react2.default.createElement(
                  'h1',
                  { className: 'display-5' },
                  'Create account'
                ),
                _react2.default.createElement(
                  'form',
                  { noValidate: true, onSubmit: this.onSubmit },
                  _react2.default.createElement(
                    'div',
                    { className: 'all-forms' },
                    _react2.default.createElement(
                      'h1',
                      { className: 'display-6 start-xs' },
                      'Name'
                    ),
                    _react2.default.createElement(_TextFieldGroup2.default, {
                      name: 'name',
                      value: this.state.name,
                      onChange: this.onChange,
                      error: errors.name
                    }),
                    _react2.default.createElement(
                      'h1',
                      { className: 'display-6 start-xs' },
                      'Email'
                    ),
                    _react2.default.createElement(_TextFieldGroup2.default, {
                      name: 'email',
                      type: 'email',
                      value: this.state.email,
                      onChange: this.onChange,
                      error: errors.email,
                      info: 'This site uses Gravatar, so if you want a profile picture use a Gravatar email'
                    }),
                    _react2.default.createElement(
                      'h1',
                      { className: 'display-6 start-xs' },
                      'Password'
                    ),
                    _react2.default.createElement(_TextFieldGroup2.default, {
                      name: 'password',
                      type: 'password',
                      value: this.state.password,
                      onChange: this.onChange,
                      error: errors.password
                    }),
                    _react2.default.createElement(
                      'h1',
                      { className: 'display-6 start-xs' },
                      'Confirm password'
                    ),
                    _react2.default.createElement(_TextFieldGroup2.default, {
                      name: 'password2',
                      type: 'password',
                      value: this.state.password2,
                      onChange: this.onChange,
                      error: errors.password2
                    }),
                    _react2.default.createElement('input', {
                      type: 'submit',
                      className: 'btn btn-block' })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Register;
}(_react.Component);

Register.propTypes = {
  registerUser: _propTypes2.default.func.isRequired,
  auth: _propTypes2.default.object.isRequired,
  errors: _propTypes2.default.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { registerUser: _authActions.registerUser })((0, _reactRouterDom.withRouter)(Register));

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(31);

var _reactRedux = __webpack_require__(20);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PrivateRoute = function PrivateRoute(_ref) {
  var Component = _ref.component,
      auth = _ref.auth,
      rest = _objectWithoutProperties(_ref, ['component', 'auth']);

  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
    render: function render(props) {
      return auth.isAuthenticated === true ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
    }

  }));
};

PrivateRoute.propTypes = {
  auth: _propTypes2.default.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(PrivateRoute);

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _reactRouterDom = __webpack_require__(31);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextFieldGroup = __webpack_require__(91);

var _TextFieldGroup2 = _interopRequireDefault(_TextFieldGroup);

var _TextAreaFieldGroup = __webpack_require__(176);

var _TextAreaFieldGroup2 = _interopRequireDefault(_TextAreaFieldGroup);

var _SelectListGroup = __webpack_require__(175);

var _SelectListGroup2 = _interopRequireDefault(_SelectListGroup);

var _profileActions = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateProfile = function (_Component) {
  _inherits(CreateProfile, _Component);

  function CreateProfile(props) {
    _classCallCheck(this, CreateProfile);

    var _this = _possibleConstructorReturn(this, (CreateProfile.__proto__ || Object.getPrototypeOf(CreateProfile)).call(this, props));

    _this.state = {
      handle: '',
      location: '',
      bio: '',
      errors: {}
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(CreateProfile, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.errors) {
        this.setState({ errors: nextProps.errors });
      }
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(e) {
      e.preventDefault();

      var profileData = {
        handle: this.state.handle,
        location: this.state.location,
        bio: this.state.bio
      };
      this.props.createProfile(profileData, this.props.history);
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: 'render',
    value: function render() {
      var errors = this.state.errors;

      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'create-background col-xs-12' },
          _react2.default.createElement(
            'div',
            { className: 'create-profile center-xs' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/', className: 'display-4 ' },
              'Movizz'
            ),
            _react2.default.createElement(
              'h1',
              { className: 'createProfileTitle' },
              'Create your profile'
            ),
            _react2.default.createElement(
              'p',
              { className: 'createProfileInfo' },
              'Lets get some information for your profile'
            ),
            _react2.default.createElement(
              'div',
              { className: 'row center-xs' },
              _react2.default.createElement(
                'div',
                { className: 'display-3' },
                _react2.default.createElement(
                  'form',
                  { onSubmit: this.onSubmit },
                  _react2.default.createElement(
                    'div',
                    { className: 'all-forms' },
                    _react2.default.createElement(
                      'h1',
                      { className: 'display-6 start-xs' },
                      'Handle'
                    ),
                    _react2.default.createElement(_TextFieldGroup2.default, {
                      name: 'handle',

                      value: this.state.handle,
                      onChange: this.onChange,
                      error: errors.handle,
                      info: 'A unique handle for your profile URL.'
                    }),
                    _react2.default.createElement(
                      'h1',
                      { className: 'display-6 start-xs' },
                      'Location'
                    ),
                    _react2.default.createElement(_TextFieldGroup2.default, {
                      name: 'location',

                      value: this.state.location,
                      onChange: this.onChange,
                      error: errors.location
                    }),
                    _react2.default.createElement(
                      'h1',
                      { className: 'display-6 start-xs' },
                      'Bio'
                    ),
                    _react2.default.createElement(_TextAreaFieldGroup2.default, {
                      name: 'bio',
                      value: this.state.bio,
                      onChange: this.onChange,
                      error: errors.bio
                    }),
                    _react2.default.createElement('input', {
                      type: 'submit',
                      className: 'btn btn-block' })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return CreateProfile;
}(_react.Component);

CreateProfile.propTypes = {
  profile: _propTypes2.default.object.isRequired,
  errors: _propTypes2.default.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    profile: state.profile,
    errors: state.errors
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { createProfile: _profileActions.createProfile })((0, _reactRouterDom.withRouter)(CreateProfile));

/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _reactRouterDom = __webpack_require__(31);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextFieldGroup = __webpack_require__(91);

var _TextFieldGroup2 = _interopRequireDefault(_TextFieldGroup);

var _TextAreaFieldGroup = __webpack_require__(176);

var _TextAreaFieldGroup2 = _interopRequireDefault(_TextAreaFieldGroup);

var _SelectListGroup = __webpack_require__(175);

var _SelectListGroup2 = _interopRequireDefault(_SelectListGroup);

var _profileActions = __webpack_require__(69);

var _isEmpty = __webpack_require__(179);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateProfile = function (_Component) {
  _inherits(CreateProfile, _Component);

  function CreateProfile(props) {
    _classCallCheck(this, CreateProfile);

    var _this = _possibleConstructorReturn(this, (CreateProfile.__proto__ || Object.getPrototypeOf(CreateProfile)).call(this, props));

    _this.state = {
      handle: '',
      location: '',
      bio: '',
      errors: {}
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(CreateProfile, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getCurrentProfile();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.errors) {
        this.setState({ errors: nextProps.errors });
      }

      if (nextProps.profile.profile) {
        var profile = nextProps.profile.profile;

        profile.location = !(0, _isEmpty2.default)(profile.location) ? profile.location : '';

        profile.bio = !(0, _isEmpty2.default)(profile.bio) ? profile.bio : '';

        //set component fields state
        this.setState({
          handle: profile.handle,
          location: profile.location,
          bio: profile.bio
        });
      }
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(e) {
      e.preventDefault();

      var profileData = {
        handle: this.state.handle,
        location: this.state.location,
        bio: this.state.bio
      };
      this.props.createProfile(profileData, this.props.history);
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: 'render',
    value: function render() {
      var errors = this.state.errors;

      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'create-background col-xs-12' },
          _react2.default.createElement(
            'div',
            { className: 'create-profile center-xs' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/', className: 'display-4 ' },
              'Movizz'
            ),
            _react2.default.createElement(
              'h1',
              { className: 'createProfileTitle' },
              'Edit your profile'
            ),
            _react2.default.createElement(
              'div',
              { className: 'row center-xs' },
              _react2.default.createElement(
                'div',
                { className: 'display-3' },
                _react2.default.createElement(
                  'form',
                  { onSubmit: this.onSubmit },
                  _react2.default.createElement(
                    'div',
                    { className: 'all-forms' },
                    _react2.default.createElement(
                      'h1',
                      { className: 'display-6 start-xs' },
                      'Handle'
                    ),
                    _react2.default.createElement(_TextFieldGroup2.default, {
                      name: 'handle',

                      value: this.state.handle,
                      onChange: this.onChange,
                      error: errors.handle,
                      info: 'A unique handle for your profile URL.'
                    }),
                    _react2.default.createElement(
                      'h1',
                      { className: 'display-6 start-xs' },
                      'Location'
                    ),
                    _react2.default.createElement(_TextFieldGroup2.default, {
                      name: 'location',

                      value: this.state.location,
                      onChange: this.onChange,
                      error: errors.location
                    }),
                    _react2.default.createElement(
                      'h1',
                      { className: 'display-6 start-xs' },
                      'Bio'
                    ),
                    _react2.default.createElement(_TextAreaFieldGroup2.default, {
                      name: 'bio',
                      value: this.state.bio,
                      onChange: this.onChange,
                      error: errors.bio
                    }),
                    _react2.default.createElement('input', {
                      type: 'submit',
                      className: 'btn btn-block' })
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return CreateProfile;
}(_react.Component);

CreateProfile.propTypes = {
  createProfile: _propTypes2.default.func.isRequired,
  getCurrentProfile: _propTypes2.default.func.isRequired,
  profile: _propTypes2.default.object.isRequired,
  errors: _propTypes2.default.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    profile: state.profile,
    errors: state.errors
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { createProfile: _profileActions.createProfile, getCurrentProfile: _profileActions.getCurrentProfile })((0, _reactRouterDom.withRouter)(CreateProfile));

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(177);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Background = function (_Component) {
  _inherits(Background, _Component);

  function Background() {
    _classCallCheck(this, Background);

    return _possibleConstructorReturn(this, (Background.__proto__ || Object.getPrototypeOf(Background)).apply(this, arguments));
  }

  _createClass(Background, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        { className: 'head' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'div',
          { className: ' movieTitle' },
          _react2.default.createElement(
            'h3',
            null,
            'Blade Runner 2049'
          )
        )
      );
    }
  }]);

  return Background;
}(_react.Component);

exports.default = Background;

/***/ }),

/***/ 288:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(46);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _moviesData = __webpack_require__(81);

var _moviesData2 = _interopRequireDefault(_moviesData);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Background = __webpack_require__(287);

var _Background2 = _interopRequireDefault(_Background);

var _reactRedux = __webpack_require__(20);

var _reactRouterDom = __webpack_require__(31);

var _movieActions = __webpack_require__(174);

var _reactSlick = __webpack_require__(639);

var _reactSlick2 = _interopRequireDefault(_reactSlick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieSection = function (_Component) {
  _inherits(MovieSection, _Component);

  function MovieSection() {
    var _this2 = this;

    _classCallCheck(this, MovieSection);

    var _this = _possibleConstructorReturn(this, (MovieSection.__proto__ || Object.getPrototypeOf(MovieSection)).call(this));

    _this.hitButton = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var query, search, searchMovie;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = _this.state.movies;

              console.log(query);

              if (!query) {
                _context.next = 10;
                break;
              }

              search = new _moviesData2.default(query);
              _context.next = 6;
              return search.getResults();

            case 6:
              searchMovie = search.result;

              console.log(searchMovie);

              _this.props.searchOneMovie(searchMovie);
              if (_this.state.movies != '' && _this.state.showSearch === false) {

                _this.setState({
                  showSearch: true
                });
              }

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));

    _this.componentDidMount = function () {
      window.scrollTo(0, 0);
      _this.props.getTrendingMovies();
      console.log(_this.props.getTrendingMovies());
      console.log(_this.props.match.params.movieName);
      _this.props.topRatedMovies();
    };

    _this.state = {
      movies: '',
      filteredMovies: '',
      moviesData: '',
      showSearch: false
    };
    _this.hitButton = _this.hitButton.bind(_this);
    _this.newMovies = _this.newMovies.bind(_this);
    _this.onChangeMovies = _this.onChangeMovies.bind(_this);
    // this.filteredData = this.filteredData.bind(this)
    _this.searchMovies = _this.searchMovies.bind(_this);
    _this.topMovies = _this.topMovies.bind(_this);
    return _this;
  }

  _createClass(MovieSection, [{
    key: 'onChangeMovies',
    value: function onChangeMovies(e) {
      var _this3 = this;

      e.preventDefault();
      var name = e.target.name;
      var value = e.target.value;
      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this3.state);
      });
    }

    // filteredData(){
    //   if(this.state.filteredMovies != undefined){
    //   var newMovies = Object.values(this.state.moviesData)
    //   console.log(this.state.filteredMovies.length)

    //    newMovies = newMovies.filter(movie => {

    //     var movieText = movie.title.split('').filter(word => word != '').map(word => word.toLowerCase()).join('');
    //     var searchText = this.state.movies.split('').filter(word => word != '').map(word => word.toLowerCase()).join('')
    //     var n = movieText.match(searchText)
    //       if(n != null){
    //         return movie
    //       }
    //     })
    //     this.setState({
    //       filteredMovies: newMovies
    //     })
    //   }


    // }


  }, {
    key: 'newMovies',
    value: function newMovies() {

      var moviesData = this.props.movies.moviesData;

      var newMovies = Object.values(moviesData);
      return newMovies.map(function (movie, index) {
        return _react2.default.createElement(
          _reactRouterDom.Link,
          { key: index, to: '/moviepath/' + movie.title },
          _react2.default.createElement(
            'li',
            { className: 'singleMovie' },
            _react2.default.createElement('img', { src: 'https://image.tmdb.org/t/p/w200' + movie.poster_path })
          )
        );
      });
    }
  }, {
    key: 'topMovies',
    value: function topMovies() {

      var moviesData = this.props.movies.topRatedData;

      var newMovies = Object.values(moviesData);
      return newMovies.map(function (movie, index) {
        return _react2.default.createElement(
          _reactRouterDom.Link,
          { key: index, to: '/moviepath/' + movie.title },
          _react2.default.createElement(
            'li',
            { className: 'singleMovie' },
            _react2.default.createElement('img', { src: 'https://image.tmdb.org/t/p/w200' + movie.poster_path })
          )
        );
      });
    }
  }, {
    key: 'onInputPress',
    value: function onInputPress(e) {
      if (e.key === 'Enter') {
        this.hitButton();
      }
    }
  }, {
    key: 'searchMovies',
    value: function searchMovies() {
      console.log(this.props);
      var newMovies = Object.values(this.props.movies.filteredMovies);

      return newMovies.map(function (movie, index) {
        return _react2.default.createElement(
          _reactRouterDom.Link,
          { key: index, to: '/moviepath/' + movie.title },
          _react2.default.createElement(
            'li',
            { className: 'singleMovie' },
            _react2.default.createElement('img', { src: 'https://image.tmdb.org/t/p/w200' + movie.poster_path })
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.props);

      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Background2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'movieSection' },
          _react2.default.createElement(
            'section',
            { className: 'row center-xs' },
            _react2.default.createElement(
              'section',
              { className: 'search-area col-xs-12' },
              _react2.default.createElement('input', { type: 'text', name: 'movies', onChange: this.onChangeMovies, onKeyPress: this.onInputPress.bind(this), placeholder: 'Find movies here...' }),
              _react2.default.createElement(
                'a',
                { onClick: this.hitButton },
                _react2.default.createElement('i', { className: ' searchButton fas fa-search' })
              )
            )
          ),
          _react2.default.createElement(
            'section',
            { className: 'col-xs-12' },
            this.state.showSearch == true && _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h1',
                { className: 'popularTitle col-xs-3' },
                ' Search Results '
              ),
              _react2.default.createElement(
                'div',
                { className: 'row center-xs' },
                _react2.default.createElement(
                  'ul',
                  { className: 'moviesArea col-xs-11' },
                  _react2.default.createElement(
                    _reactSlick2.default,
                    settings,
                    this.searchMovies()
                  )
                )
              )
            ),
            _react2.default.createElement(
              'h1',
              { className: 'popularTitle col-xs-3' },
              ' Discover '
            ),
            _react2.default.createElement(
              'div',
              { className: 'row center-xs' },
              _react2.default.createElement(
                'ul',
                { className: 'moviesArea col-xs-11' },
                _react2.default.createElement(
                  _reactSlick2.default,
                  settings,
                  this.newMovies()
                )
              )
            ),
            _react2.default.createElement(
              'h1',
              { className: 'popularTitle col-xs-3' },
              'Top Rated'
            ),
            _react2.default.createElement(
              'div',
              { className: 'row center-xs' },
              _react2.default.createElement(
                'ul',
                { className: 'moviesArea col-xs-11' },
                _react2.default.createElement(
                  _reactSlick2.default,
                  settings,
                  this.topMovies()
                )
              )
            )
          )
        )
      );
    }
  }]);

  return MovieSection;
}(_react.Component);

MovieSection.propTypes = {
  auth: _propTypes2.default.object.isRequired,
  movies: _propTypes2.default.object.isRequired
};
var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {

    auth: state.auth,
    movies: state.movies

  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { getTrendingMovies: _movieActions.getTrendingMovies, topRatedMovies: _movieActions.topRatedMovies, searchOneMovie: _movieActions.searchOneMovie })((0, _reactRouterDom.withRouter)(MovieSection));

/***/ }),

/***/ 289:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _profileActions = __webpack_require__(69);

var _Header = __webpack_require__(177);

var _Header2 = _interopRequireDefault(_Header);

var _reactRouterDom = __webpack_require__(31);

var _profileActions2 = __webpack_require__(293);

var _profileActions3 = _interopRequireDefault(_profileActions2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProfilePage = function (_Component) {
  _inherits(ProfilePage, _Component);

  function ProfilePage() {
    _classCallCheck(this, ProfilePage);

    return _possibleConstructorReturn(this, (ProfilePage.__proto__ || Object.getPrototypeOf(ProfilePage)).apply(this, arguments));
  }

  _createClass(ProfilePage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getCurrentProfile();
    }
  }, {
    key: 'onDeleteClick',
    value: function onDeleteClick(e) {
      this.props.deleteAccount();
    }
  }, {
    key: 'render',
    value: function render() {
      var user = this.props.auth.user;
      var _props$profile = this.props.profile,
          profile = _props$profile.profile,
          loading = _props$profile.loading;


      var profilePageContent = void 0;

      if (profile === null || loading) {
        profilePageContent = _react2.default.createElement(
          'h4',
          null,
          'Loading...'
        );
      } else {
        if (Object.keys(profile).length > 0) {
          profilePageContent = _react2.default.createElement(
            'div',
            { className: 'profileData' },
            _react2.default.createElement(
              'p',
              { className: 'profileInfoName' },
              'Welcome ',
              _react2.default.createElement(
                'span',
                { className: 'editHandle' },
                user.name
              )
            ),
            _react2.default.createElement(_profileActions3.default, null),
            _react2.default.createElement(
              'button',
              { onClick: this.onDeleteClick.bind(this), className: 'deleteProfileButton' },
              'Delete My Account'
            )
          );
        } else {
          //User is logged in but has no profile
          profilePageContent = _react2.default.createElement(
            'div',
            { className: 'profileData' },
            _react2.default.createElement(
              'p',
              { className: 'profileInfoName' },
              'Welcome ',
              user.name
            ),
            _react2.default.createElement(
              'p',
              { className: 'profileWarning' },
              'There is no info in your profile yet.'
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/create-profile', className: 'createProfileButton' },
              'Create Profile'
            )
          );
        }
      }

      return _react2.default.createElement(
        'div',
        { className: 'profilePage' },
        _react2.default.createElement(
          'header',
          { className: 'profile-head' },
          _react2.default.createElement(_Header2.default, null)
        ),
        _react2.default.createElement(
          'section',
          { className: 'profile-information' },
          profilePageContent,
          _react2.default.createElement(
            'div',
            { className: ' profile-items' },
            _react2.default.createElement(
              'div',
              { className: 'likes-profile' },
              _react2.default.createElement(
                'h1',
                { className: 'profileListTitle' },
                'Movies you like'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'reviews-profile' },
              _react2.default.createElement(
                'h1',
                { className: 'profileListTitle' },
                'Reviews'
              )
            )
          )
        )
      );
    }
  }]);

  return ProfilePage;
}(_react.Component);

ProfilePage.propTypes = {
  getCurrentProfile: _propTypes2.default.func.isRequired,
  deleteAccount: _propTypes2.default.func.isRequired,
  auth: _propTypes2.default.object.isRequired,
  profile: _propTypes2.default.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    profile: state.profile,
    auth: state.auth
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { getCurrentProfile: _profileActions.getCurrentProfile, deleteAccount: _profileActions.deleteAccount })(ProfilePage);

/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _MovieHeader = __webpack_require__(291);

var _MovieHeader2 = _interopRequireDefault(_MovieHeader);

var _reactRedux = __webpack_require__(20);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieBackground = function (_Component) {
  _inherits(MovieBackground, _Component);

  function MovieBackground() {
    _classCallCheck(this, MovieBackground);

    return _possibleConstructorReturn(this, (MovieBackground.__proto__ || Object.getPrototypeOf(MovieBackground)).apply(this, arguments));
  }

  _createClass(MovieBackground, [{
    key: 'render',
    value: function render() {
      var movie = this.props.movies.pickedMovie;
      return _react2.default.createElement(
        'header',
        { className: 'movieProfile' },
        _react2.default.createElement(_MovieHeader2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'movieImage' },
          _react2.default.createElement('img', { className: 'moviesPoster', src: 'https://image.tmdb.org/t/p/original' + movie.poster_path })
        )
      );
    }
  }]);

  return MovieBackground;
}(_react.Component);

MovieBackground.propTypes = {
  movies: _propTypes2.default.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    movies: state.movies
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(MovieBackground);

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(46);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _moviesData = __webpack_require__(81);

var _moviesData2 = _interopRequireDefault(_moviesData);

var _reactRouterDom = __webpack_require__(31);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(20);

var _authActions = __webpack_require__(80);

var _profileActions = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieHeader = function (_Component) {
  _inherits(MovieHeader, _Component);

  function MovieHeader() {
    _classCallCheck(this, MovieHeader);

    var _this = _possibleConstructorReturn(this, (MovieHeader.__proto__ || Object.getPrototypeOf(MovieHeader)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(MovieHeader, [{
    key: 'onLogoutClick',
    value: function onLogoutClick(e) {
      e.preventDefault();
      this.props.clearCurrentProfile();
      this.props.logoutUser();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$auth = this.props.auth,
          isAuthenticated = _props$auth.isAuthenticated,
          user = _props$auth.user;


      var authLinks = _react2.default.createElement(
        'ul',
        { className: 'rightInfo' },
        _react2.default.createElement(
          'li',
          { className: 'oneAuth' },
          _react2.default.createElement(
            'a',
            null,
            'Movies'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'twoAuth' },
          _react2.default.createElement(
            'a',
            null,
            'TV Shows'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'linkButton' },
          _react2.default.createElement('img', {
            className: 'rounded-circle',
            src: user.avatar,
            alt: user.name,

            style: { width: '25px', marginRight: '5px' },
            title: 'You must have a Gravatar connected to your email to display an image'
          }),
          _react2.default.createElement(
            'ul',
            { className: 'sub-menu' },
            _react2.default.createElement(
              'li',
              { className: 'sub-link' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: 'profilepage' },
                user.name
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'sub-link-two' },
              _react2.default.createElement(
                'a',
                { onClick: this.onLogoutClick.bind(this)
                },
                'Logout'
              )
            )
          )
        ),
        _react2.default.createElement('hr', null)
      );

      var guestLinks = _react2.default.createElement(
        'ul',
        { className: 'rightInfo' },
        _react2.default.createElement(
          'li',
          { className: 'one' },
          _react2.default.createElement(
            'a',
            { onClick: this.hitButton },
            'Movies'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'two' },
          _react2.default.createElement(
            'a',
            null,
            'TV Shows'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'three' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/login', className: 'linkButton' },
            'Login'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'four' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/register', className: 'linkButton' },
            'Register'
          )
        ),
        _react2.default.createElement('hr', null)
      );

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'navbar' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/', className: 'compName' },
            'Moviizz'
          ),
          _react2.default.createElement(
            'div',
            { className: 'rightArea' },
            isAuthenticated ? authLinks : guestLinks
          )
        )
      );
    }
  }]);

  return MovieHeader;
}(_react.Component);

MovieHeader.propTypes = {
  logoutUser: _propTypes2.default.func.isRequired,
  auth: _propTypes2.default.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    auth: state.auth
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { logoutUser: _authActions.logoutUser, clearCurrentProfile: _profileActions.clearCurrentProfile })(MovieHeader);

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(68);

var _axios2 = _interopRequireDefault(_axios);

var _classnames = __webpack_require__(36);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = __webpack_require__(20);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(31);

var _MovieBackground = __webpack_require__(290);

var _MovieBackground2 = _interopRequireDefault(_MovieBackground);

var _movieActions = __webpack_require__(174);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieProfile = function (_Component) {
  _inherits(MovieProfile, _Component);

  function MovieProfile() {
    _classCallCheck(this, MovieProfile);

    var _this = _possibleConstructorReturn(this, (MovieProfile.__proto__ || Object.getPrototypeOf(MovieProfile)).call(this));

    _this.state = {
      heartLike: false
    };
    _this.hitButton = _this.hitButton.bind(_this);
    _this.saveMovieInfo = _this.saveMovieInfo.bind(_this);
    _this.findUserLikes = _this.findUserLikes.bind(_this);

    return _this;
  }

  _createClass(MovieProfile, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {

      this.findUserLikes();
      console.log(this.findUserLikes());
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.scrollTo(0, 0);
      this.props.getMovieInfo();
      this.hitButton();
    }
  }, {
    key: 'saveMovieInfo',
    value: function saveMovieInfo(movieData) {

      _axios2.default.post('/api/movie', movieData).then(function (res) {
        console.log(res);
      }).catch(console.error);
    }
  }, {
    key: 'onLikeClick',
    value: function onLikeClick(id) {
      this.props.addLike(id);
      console.log('false');
    }
  }, {
    key: 'onUnLikeClick',
    value: function onUnLikeClick(id) {
      this.props.removeLike(id);
      console.log('true');
    }
  }, {
    key: 'hitButton',
    value: function hitButton() {
      var _this2 = this;

      var discoverData = this.props.movies.moviesData;
      var topData = this.props.movies.topRatedData;
      var searchMovieData = this.props.movies.filteredMovies;
      var moviesData = discoverData.concat(topData);
      var movieData = moviesData.concat(searchMovieData);

      console.log(moviesData);
      var newMovies = Object.values(movieData);
      return newMovies.map(function (movie, index) {
        if (movie.title === _this2.props.match.params.movieName) {
          _this2.props.pickedMovie(movie);

          console.log(_typeof(movie.id));

          var newMovie = {
            movie_id: movie.id,
            movie: movie

          };

          _this2.saveMovieInfo(newMovie);

          //  <Link  key={index} to={`/movie/${movie.title}`}><li className="singleMovie">
          //   <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>

          //  </li></Link>

        }
      });
    }
  }, {
    key: 'findUserLikes',
    value: function findUserLikes() {
      var _this3 = this;

      var bool = false;
      var savedMovie = Object.values(this.props.movies.savedMovie);

      var pickedMovie = this.props.movies.pickedMovie;

      if (savedMovie.find(function (movie) {
        return movie.movie_id === pickedMovie.id;
      })) {
        savedMovie.map(function (movie) {

          if (movie.movie_id == pickedMovie.id) {
            var auth = _this3.props.auth;

            if (movie.likes.filter(function (like) {
              return like.user === auth.user.id;
            }).length > 0) {
              bool = true;
              return bool;
            }
          }
        });
      }
      return bool;
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var movie = this.props.movies.pickedMovie;
      var findLikes = this.findUserLikes();

      return _react2.default.createElement(
        'div',
        { id: 'mainMovieProfile' },
        _react2.default.createElement(_MovieBackground2.default, props),
        _react2.default.createElement(
          'div',
          { className: 'infoBlock col-xs-12' },
          _react2.default.createElement(
            'div',
            { className: ' movieTitle col-xs-9' },
            findLikes ? _react2.default.createElement(
              'div',
              { className: 'heartButton',
                onClick: this.onUnLikeClick.bind(this, movie.id) },
              _react2.default.createElement('i', { className: 'fas fa-heart heartOrange' })
            ) : _react2.default.createElement(
              'div',
              { className: 'heartButton',
                onClick: this.onLikeClick.bind(this, movie.id) },
              _react2.default.createElement('i', { className: 'fas fa-heart heartGrey' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'movieOne' },
              _react2.default.createElement(
                'h6',
                { className: 'movieDate' },
                movie.release_date
              ),
              _react2.default.createElement(
                'h3',
                { className: 'movieName' },
                movie.title
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'p',
                { className: 'movieOverview' },
                movie.overview
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row end-xs' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-3 center-xs' },
              _react2.default.createElement(
                'h3',
                { className: 'scoreBox' },
                'Overall Score'
              ),
              _react2.default.createElement(
                'span',
                { className: 'voteBox' },
                movie.vote_average
              )
            )
          )
        )
      );
    }
  }]);

  return MovieProfile;
}(_react.Component);

MovieProfile.propTypes = {
  auth: _propTypes2.default.object.isRequired,

  movies: _propTypes2.default.object.isRequired,
  profile: _propTypes2.default.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    profile: state.profile,
    auth: state.auth,
    movies: state.movies
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { pickedMovie: _movieActions.pickedMovie, removeLike: _movieActions.removeLike, getMovieInfo: _movieActions.getMovieInfo, addLike: _movieActions.addLike, getTrendingMovies: _movieActions.getTrendingMovies, topRatedMovies: _movieActions.topRatedMovies, searchOneMovie: _movieActions.searchOneMovie })(MovieProfile);

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(31);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var profileActions = function profileActions() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/edit-profile', className: 'editProfileButton' },
      'Edit Profile'
    )
  );
};

exports.default = profileActions;

/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _types.SET_CURRENT_USER:
      return _extends({}, state, {
        isAuthenticated: !(0, _isEmpty2.default)(action.payload),
        user: action.payload
      });
    default:
      return state;
  }
};

var _isEmpty = __webpack_require__(179);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _types = __webpack_require__(55);

var _constants = __webpack_require__(301);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  isAuthenticated: false,
  user: {}
};

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _types.GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
};

var _types = __webpack_require__(55);

var initialState = {};

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(90);

var _authReducer = __webpack_require__(294);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _errorReducer = __webpack_require__(295);

var _errorReducer2 = _interopRequireDefault(_errorReducer);

var _profileReducer = __webpack_require__(298);

var _profileReducer2 = _interopRequireDefault(_profileReducer);

var _movieReducer = __webpack_require__(297);

var _movieReducer2 = _interopRequireDefault(_movieReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  auth: _authReducer2.default,
  errors: _errorReducer2.default,
  profile: _profileReducer2.default,
  movies: _movieReducer2.default

});

/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _types.GET_TRENDING_MOVIES:
      return _extends({}, state, {
        moviesData: action.payload

      });
    case _types.TOP_RATED_MOVIES:
      return _extends({}, state, {
        topRatedData: action.payload
      });
    case _types.PICKED_MOVIE:
      return _extends({}, state, {
        pickedMovie: action.payload
      });
    case _types.GATHER_MOVIES:
      return _extends({}, state, {
        savedMovie: action.payload
      });
    case _types.SEARCH_MOVIE:
      return _extends({}, state, {
        filteredMovies: action.payload
      });

    default:
      return state;
  }
};

var _types = __webpack_require__(55);

var initialState = {
  movies: '',
  filteredMovies: '',
  moviesData: '',
  showSearch: false,
  topRatedData: '',
  pickedMovie: '',
  savedMovie: ''
};

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _types.PROFILE_LOADING:
      return _extends({}, state, {
        loading: true
      });
    case _types.GET_PROFILE:
      return _extends({}, state, {
        profile: action.payload,
        loading: false
      });
    case _types.CLEAR_CURRENT_PROFILE:
      return _extends({}, state, {
        profile: null
      });
    default:
      return state;
  }
};

var _types = __webpack_require__(55);

var initialState = {
  profile: null,
  profiles: null,
  loading: false
};

/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(90);

var _reduxThunk = __webpack_require__(657);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(296);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function saveToLocalStorage(state) {
  try {
    var serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    var serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

var initialState = {};

var middleware = [_reduxThunk2.default];
var persistedState = loadFromLocalStorage();
var store = (0, _redux.createStore)(_reducers2.default, persistedState, (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware)));

store.subscribe(function () {
  return saveToLocalStorage(store.getState());
});

exports.default = store;

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET_ERRORS = exports.GET_ERRORS = 'GET_ERRORS';
var SET_CURRENT_USER = exports.SET_CURRENT_USER = 'SET_CURRENT_USER';
var GET_PROFILE = exports.GET_PROFILE = 'GET_PROFILE';
var PROFILE_LOADING = exports.PROFILE_LOADING = 'PROFILE_LOADING';
var PROFILE_NOT_FOUND = exports.PROFILE_NOT_FOUND = 'PROFILE_NOT_FOUND';
var CLEAR_CURRENT_PROFILE = exports.CLEAR_CURRENT_PROFILE = 'CLEAR_CURRENT_PROFILE';
var GET_PROFILES = exports.GET_PROFILES = 'GET_PROFILES';
var GET_TRENDING_MOVIES = exports.GET_TRENDING_MOVIES = 'GET_TRENDING_MOVIES';
var TOP_RATED_MOVIES = exports.TOP_RATED_MOVIES = 'TOP_RATED_MOVIES';
var PICKED_MOVIE = exports.PICKED_MOVIE = 'PICKED_MOVIE';
var SEARCH_MOVIE = exports.SEARCH_MOVIE = 'SEARCH_MOVIE';
var GATHER_MOVIES = exports.GATHER_MOVIES = 'GATHER_MOVIES';

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(264);
module.exports = __webpack_require__(263);


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearCurrentProfile = exports.setProfileLoading = exports.deleteAccount = exports.createProfile = exports.getCurrentProfile = undefined;

var _axios = __webpack_require__(68);

var _axios2 = _interopRequireDefault(_axios);

var _types = __webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Get current profile
var getCurrentProfile = exports.getCurrentProfile = function getCurrentProfile() {
  return function (dispatch) {
    dispatch(setProfileLoading());
    _axios2.default.get('/api/profile').then(function (res) {
      return dispatch({
        type: _types.GET_PROFILE,
        payload: res.data
      });
    }).catch(function (err) {
      return dispatch({
        type: _types.GET_PROFILE,
        payload: {}
      });
    });
  };
};

//Create profile
var createProfile = exports.createProfile = function createProfile(profileData, history) {
  return function (dispatch) {
    _axios2.default.post('/api/profile', profileData).then(function (res) {
      return history.push('/');
    }).catch(function (err) {
      return dispatch({
        type: _types.GET_ERRORS,
        payload: err.response.data
      });
    });
  };
};

//Delete account & profile
var deleteAccount = exports.deleteAccount = function deleteAccount() {
  return function (dispatch) {
    if (window.confirm('Are you sure? This can NOT be undone!')) {
      _axios2.default.delete('/api/profile').then(function (res) {
        return dispatch({
          type: _types.SET_CURRENT_USER,
          payload: {}
        });
      }).catch(function (err) {
        return dispatch({
          type: _types.GET_ERRORS,
          payload: err.response.data
        });
      });
    }
  };
};

var setProfileLoading = exports.setProfileLoading = function setProfileLoading() {
  return {
    type: _types.PROFILE_LOADING
  };
};

//Clear profile
var clearCurrentProfile = exports.clearCurrentProfile = function clearCurrentProfile() {
  return {
    type: _types.CLEAR_CURRENT_PROFILE
  };
};

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logoutUser = exports.setCurrentUser = exports.loginUser = exports.registerUser = undefined;

var _axios = __webpack_require__(68);

var _axios2 = _interopRequireDefault(_axios);

var _setAuthToken = __webpack_require__(178);

var _setAuthToken2 = _interopRequireDefault(_setAuthToken);

var _jwtDecode = __webpack_require__(220);

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _types = __webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Register User
var registerUser = exports.registerUser = function registerUser(userData, history) {
  return function (dispatch) {
    _axios2.default.post('/api/users/register', userData).then(function (res) {
      return history.push('/login');
    }).catch(function (err) {
      return dispatch({
        type: _types.GET_ERRORS,
        payload: err.response.data
      });
    });
  };
};

//Login - Get User Token
var loginUser = exports.loginUser = function loginUser(userData) {
  return function (dispatch) {
    _axios2.default.post('/api/users/login', userData).then(function (res) {

      //save to localStorage
      var token = res.data.token;
      // Set token to ls

      localStorage.setItem('jwtToken', token);
      //Set token to Auth header
      (0, _setAuthToken2.default)(token);
      //Decode token to get user data
      var decoded = (0, _jwtDecode2.default)(token);
      //Set current user
      dispatch(setCurrentUser(decoded));
    }).catch(function (err) {
      return dispatch({
        type: _types.GET_ERRORS,
        payload: err.response.data
      });
    });
  };
};

//Set logged in user
var setCurrentUser = exports.setCurrentUser = function setCurrentUser(decoded) {
  return {
    type: _types.SET_CURRENT_USER,
    payload: decoded
  };
};

var logoutUser = exports.logoutUser = function logoutUser() {
  return function (dispatch) {
    //Remove token from localStorage
    localStorage.removeItem('jwtToken');
    //Remove auth header for future requests
    (0, _setAuthToken2.default)(false);
    //Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
  };
};

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(68);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var moviesData = function () {
  function moviesData(query) {
    _classCallCheck(this, moviesData);

    this.query = query;
  }

  _createClass(moviesData, [{
    key: 'getResults',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var proxy, key, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                proxy = 'https://cors-anywhere.herokuapp.com/';
                key = '55235c76109068a112aaa3dcd3a08bda';
                _context.prev = 2;
                _context.next = 5;
                return (0, _axios2.default)('https://api.themoviedb.org/3/search/movie?api_key=' + key + '&query=' + this.query);

              case 5:
                res = _context.sent;

                this.result = res.data.results;
                // console.log(this.result);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context['catch'](2);

                alert(_context.t0);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 9]]);
      }));

      function getResults() {
        return _ref.apply(this, arguments);
      }

      return getResults;
    }()
  }, {
    key: 'discoverMovies',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var proxy, key, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                proxy = 'https://cors-anywhere.herokuapp.com/';
                key = '55235c76109068a112aaa3dcd3a08bda';
                _context2.prev = 2;
                _context2.next = 5;
                return (0, _axios2.default)('https://api.themoviedb.org/3/discover/movie?api_key=' + key + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false');

              case 5:
                res = _context2.sent;

                this.result = res.data.results;
                // console.log(this.result);
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2['catch'](2);

                alert(_context2.t0);

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 9]]);
      }));

      function discoverMovies() {
        return _ref2.apply(this, arguments);
      }

      return discoverMovies;
    }()
  }, {
    key: 'topRatedMovies',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var proxy, key, res;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                proxy = 'https://cors-anywhere.herokuapp.com/';
                key = '55235c76109068a112aaa3dcd3a08bda';
                _context3.prev = 2;
                _context3.next = 5;
                return (0, _axios2.default)('https://api.themoviedb.org/3/movie/top_rated?api_key=' + key + '&language=en-US');

              case 5:
                res = _context3.sent;

                this.result = res.data.results;
                // console.log(this.result);
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3['catch'](2);

                alert(_context3.t0);

              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 9]]);
      }));

      function topRatedMovies() {
        return _ref3.apply(this, arguments);
      }

      return topRatedMovies;
    }()
  }]);

  return moviesData;
}();

exports.default = moviesData;

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(36);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextFieldGroup = function TextFieldGroup(_ref) {
  var name = _ref.name,
      placeholder = _ref.placeholder,
      value = _ref.value,
      label = _ref.label,
      error = _ref.error,
      info = _ref.info,
      type = _ref.type,
      onChange = _ref.onChange,
      disabled = _ref.disabled;

  return _react2.default.createElement(
    'div',
    { className: 'form-group start-xs' },
    _react2.default.createElement('input', {
      type: type,
      className: (0, _classnames2.default)('form-control', {
        'is-invalid': error
      }),
      placeholder: placeholder,
      name: name,
      value: value,
      onChange: onChange,
      disabled: disabled
    }),
    info && _react2.default.createElement(
      'small',
      { className: 'form-text ' },
      info
    ),
    error && _react2.default.createElement(
      'div',
      { className: 'invalid-feedback' },
      error
    )
  );
};

TextFieldGroup.propTypes = {
  name: _propTypes2.default.string.isRequired,
  placeholder: _propTypes2.default.string,
  value: _propTypes2.default.string.isRequired,
  info: _propTypes2.default.string,
  type: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  disabled: _propTypes2.default.string

};

TextFieldGroup.defaultProps = {
  type: 'text'
};

exports.default = TextFieldGroup;

/***/ })

},[668]);