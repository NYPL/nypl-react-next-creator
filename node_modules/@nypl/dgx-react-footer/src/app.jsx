import React from 'react';
import ReactDOM from 'react-dom';
import a11y from 'react-a11y';
import Footer from './Footer';
import './styles/styles.scss';

a11y(React, { ReactDOM, includeSrcNode: true });

/* app.jsx
 * Used for local development of React Components
 */
ReactDOM.render(
  <Footer id="footer" className="footer" urlType="absolute" />,
  document.getElementById('footerPreview')
);
