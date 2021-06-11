import React from 'react';
import PropTypes from 'prop-types';
import { NYPLTextLogo } from '@nypl/dgx-svg-icons';

import FooterLinks from './components/FooterLinks/FooterLinks';
import SocialMediaList from './components/SocialMediaList/SocialMediaList';
import footerConfig from './footerConfig';

const Footer = (props) => (
  <footer id={props.id} className={props.className} role="contentinfo">
    <div className={`${props.className}-content`}>
      <FooterLinks
        className="footerLinks"
        data={footerConfig.nyplLinks}
        urlType={props.urlType}
      />
      <SocialMediaList
        data={footerConfig.socialMedia}
        id="SocialMediaList"
        className="socialMedia"
      />
    </div>
    <div className="footer-content--secondary">
      <div className="facade">
        <img src="https://cdn-d8.nypl.org/s3fs-public/2020-05/NYPL_MainFacadeRev2Cam2.png" alt="NYPL Main Building Facade" />
      </div>
      <div className="copyright">
        <p>© The New York Public Library, {new Date().getFullYear()}</p>
        <p>The New York Public Library is a 501(c)(3) | EIN 13-1887440</p>
      </div>
    </div>
    <span className="logoText icon-logo-type">
      <NYPLTextLogo
        title="New York Public Library"
        ariaHidden={false}
        focusable={false}
      />
    </span>
  </footer>
);

Footer.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  urlType: PropTypes.string,
};

Footer.defaultProps = {
  id: 'footer',
  className: 'footer',
  urlType: 'relative',
};

export default Footer;
