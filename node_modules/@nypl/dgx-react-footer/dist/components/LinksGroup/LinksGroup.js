'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('../../utils/utils.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderLinkItems = function renderLinkItems(data, urlType) {
  return data.map(function (item, i) {
    return _react2.default.createElement(
      'li',
      { key: i },
      _react2.default.createElement(
        'a',
        {
          href: urlType === 'absolute' ? item.link : (0, _utils.convertUrlRelative)(item.link)
        },
        item.name
      )
    );
  });
};

var LinksGroup = function LinksGroup(_ref) {
  var data = _ref.data,
      urlType = _ref.urlType;
  return _react2.default.createElement(
    'li',
    null,
    _react2.default.createElement(
      'ul',
      { className: 'linkItemList' },
      renderLinkItems(data, urlType)
    )
  );
};

LinksGroup.propTypes = {
  data: _propTypes2.default.array,
  urlType: _propTypes2.default.string
};

exports.default = LinksGroup;