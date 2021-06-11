'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LinksGroup = require('./../LinksGroup/LinksGroup');

var _LinksGroup2 = _interopRequireDefault(_LinksGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderLinksGroups = function renderLinksGroups(data, urlType) {
  return data.map(function (item, i) {
    return _react2.default.createElement(_LinksGroup2.default, { data: item, key: i, urlType: urlType });
  });
}; // Import libraries


var FooterLinks = function FooterLinks(_ref) {
  var data = _ref.data,
      className = _ref.className,
      urlType = _ref.urlType;
  return _react2.default.createElement(
    'ul',
    { className: className },
    renderLinksGroups(data, urlType)
  );
};

FooterLinks.propTypes = {
  data: _propTypes2.default.array,
  className: _propTypes2.default.string,
  urlType: _propTypes2.default.string
};

exports.default = FooterLinks;