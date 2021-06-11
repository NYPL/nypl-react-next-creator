import React from 'react';
import PropTypes from 'prop-types';
import SocialMediaItem from './../SocialMediaItem/SocialMediaItem';

const renderSocialMediaItems = (data) =>
  data.map((item, i) =>
    <SocialMediaItem
      className={item.className}
      name={item.name}
      link={item.link}
      component={item.component}
      iconId={item.iconId}
      key={i}
    />
  );

const SocialMediaList = ({ data, id, className }) =>
  <ul
    id={id}
    className={className}
  >
    {renderSocialMediaItems(data)}
  </ul>;

SocialMediaList.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  data: PropTypes.array,
};

export default SocialMediaList;
