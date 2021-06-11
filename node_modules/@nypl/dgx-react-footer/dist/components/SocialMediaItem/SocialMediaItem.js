'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dgxSvgIcons = require('@nypl/dgx-svg-icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var availableIcons = {
  TwitterIcon: _dgxSvgIcons.TwitterIcon,
  FaceBookIcon: _dgxSvgIcons.FaceBookIcon,
  InstagramIcon: _dgxSvgIcons.InstagramIcon,
  YoutubeIcon: _dgxSvgIcons.YoutubeIcon
};

var SocialMediaItem = function SocialMediaItem(_ref) {
  var className = _ref.className,
      name = _ref.name,
      link = _ref.link,
      component = _ref.component,
      iconId = _ref.iconId;
  return _react2.default.createElement(
    'li',
    null,
    _react2.default.createElement(
      'a',
      {
        className: className,
        href: link
      },
      _react2.default.createElement(availableIcons[component], { title: name, ariaHidden: false, focusable: false, iconId: iconId })
    )
  );
};

SocialMediaItem.propTypes = {
  className: _propTypes2.default.string,
  name: _propTypes2.default.string,
  link: _propTypes2.default.string,
  component: _propTypes2.default.string,
  iconId: _propTypes2.default.string
};

exports.default = SocialMediaItem;