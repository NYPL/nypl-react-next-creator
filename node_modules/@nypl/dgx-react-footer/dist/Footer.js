'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dgxSvgIcons = require('@nypl/dgx-svg-icons');

var _FooterLinks = require('./components/FooterLinks/FooterLinks');

var _FooterLinks2 = _interopRequireDefault(_FooterLinks);

var _SocialMediaList = require('./components/SocialMediaList/SocialMediaList');

var _SocialMediaList2 = _interopRequireDefault(_SocialMediaList);

var _footerConfig = require('./footerConfig');

var _footerConfig2 = _interopRequireDefault(_footerConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
  return _react2.default.createElement(
    'footer',
    { id: props.id, className: props.className, role: 'contentinfo' },
    _react2.default.createElement(
      'div',
      { className: props.className + '-content' },
      _react2.default.createElement(_FooterLinks2.default, {
        className: 'footerLinks',
        data: _footerConfig2.default.nyplLinks,
        urlType: props.urlType
      }),
      _react2.default.createElement(_SocialMediaList2.default, {
        data: _footerConfig2.default.socialMedia,
        id: 'SocialMediaList',
        className: 'socialMedia'
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'footer-content--secondary' },
      _react2.default.createElement(
        'div',
        { className: 'facade' },
        _react2.default.createElement('img', { src: 'https://cdn-d8.nypl.org/s3fs-public/2020-05/NYPL_MainFacadeRev2Cam2.png', alt: 'NYPL Main Building Facade' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'copyright' },
        _react2.default.createElement(
          'p',
          null,
          '\xA9 The New York Public Library, ',
          new Date().getFullYear()
        ),
        _react2.default.createElement(
          'p',
          null,
          'The New York Public Library is a 501(c)(3) | EIN 13-1887440'
        )
      )
    ),
    _react2.default.createElement(
      'span',
      { className: 'logoText icon-logo-type' },
      _react2.default.createElement(_dgxSvgIcons.NYPLTextLogo, {
        title: 'New York Public Library',
        ariaHidden: false,
        focusable: false
      })
    )
  );
};

Footer.propTypes = {
  id: _propTypes2.default.string,
  className: _propTypes2.default.string,
  urlType: _propTypes2.default.string
};

Footer.defaultProps = {
  id: 'footer',
  className: 'footer',
  urlType: 'relative'
};

exports.default = Footer;