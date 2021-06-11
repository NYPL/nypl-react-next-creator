'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SocialMediaItem = require('./../SocialMediaItem/SocialMediaItem');

var _SocialMediaItem2 = _interopRequireDefault(_SocialMediaItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderSocialMediaItems = function renderSocialMediaItems(data) {
  return data.map(function (item, i) {
    return _react2.default.createElement(_SocialMediaItem2.default, {
      className: item.className,
      name: item.name,
      link: item.link,
      component: item.component,
      iconId: item.iconId,
      key: i
    });
  });
};

var SocialMediaList = function SocialMediaList(_ref) {
  var data = _ref.data,
      id = _ref.id,
      className = _ref.className;
  return _react2.default.createElement(
    'ul',
    {
      id: id,
      className: className
    },
    renderSocialMediaItems(data)
  );
};

SocialMediaList.propTypes = {
  className: _propTypes2.default.string,
  id: _propTypes2.default.string,
  data: _propTypes2.default.array
};

exports.default = SocialMediaList;