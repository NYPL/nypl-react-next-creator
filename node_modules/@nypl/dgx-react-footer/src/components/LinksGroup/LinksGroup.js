import React from 'react';
import PropTypes from 'prop-types';
import { convertUrlRelative } from '../../utils/utils.js'

const renderLinkItems = (data, urlType) =>
  data.map((item, i) =>
    <li key={i}>
      <a 
        href={(urlType === 'absolute') ? item.link : convertUrlRelative(item.link)}
      >
        {item.name}
      </a>
    </li>
  );

const LinksGroup = ({ data, urlType }) => (
  <li>
    <ul className="linkItemList">
      {renderLinkItems(data, urlType)}
    </ul>
  </li>
);

LinksGroup.propTypes = {
  data: PropTypes.array,
  urlType: PropTypes.string,
};

export default LinksGroup;
