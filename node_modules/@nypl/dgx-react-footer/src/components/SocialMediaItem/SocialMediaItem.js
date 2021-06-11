import React from 'react';
import PropTypes from 'prop-types';
import {
  TwitterIcon,
  FaceBookIcon,
  InstagramIcon,
  YoutubeIcon,
} from '@nypl/dgx-svg-icons';

const availableIcons = {
  TwitterIcon,
  FaceBookIcon,
  InstagramIcon,
  YoutubeIcon,
};

const SocialMediaItem = ({ className, name, link, component, iconId }) => (
  <li>
    <a
      className={className}
      href={link}
    >
      {
        React.createElement(
          availableIcons[component],
          { title: name, ariaHidden: false, focusable: false, iconId }
        )
      }
    </a>
  </li>
);

SocialMediaItem.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string,
  component: PropTypes.string,
  iconId: PropTypes.string,
};

export default SocialMediaItem;
