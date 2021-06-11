// Import libraries
import React from 'react';
import PropTypes from 'prop-types';
import LinksGroup from './../LinksGroup/LinksGroup';

const renderLinksGroups = (data, urlType) =>
  data.map((item, i) =>
    <LinksGroup data={item} key={i} urlType={urlType} />
  );

const FooterLinks = ({ data, className, urlType }) => (
  <ul className={className}>
    {renderLinksGroups(data, urlType)}
  </ul>
);

FooterLinks.propTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
  urlType: PropTypes.string,
};

export default FooterLinks;
