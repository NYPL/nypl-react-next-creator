# NYPL Footer

This repository is the footer component for the ReactJS applications of nypl.org.

### Version

0.5.7

### App Installation

To install this module, run:

```sh
$ npm install --save @nypl/dgx-react-footer
```

This component is a scoped NPM module. This means that when installing, NPM will create a `@NYPL` folder and the `dgx-react-footer` component (and other NYPL scoped components) will be there.

## Usage

Import using ES6 style syntax:
```
// Application.jsx
import Footer from '@nypl/dgx-react-footer';
```

Import using ES5 style syntax:
```
// Application.jsx
var Footer =  require('@nypl/dgx-react-footer');
```

Call the instance in your application component:
```
<Footer id="footer" className="footer" />
```
### Component Props

- `urlType`: Type of URL's to be established for NYPL link elements. If empty, it will utilize `relative` URL's by default. If `absolute` URL's are required, such as for apps that live at a different domain, initialize the Footer component as follows:

```sh
  <Footer urlType='absolute' /> // Sets all URLs to absolute
  <Footer /> // Sets all URLs to relative
```

### Styles
You can write your own styles for the footer but we suggest you use the styles that come in the package. It's written in SASS and to import we use the Webpack syntax in SASS:

```
// app.scss
@import "~@nypl/dgx-react-footer/dist/styles/styles.scss";
```


### Local Installation
Install all dependencies listed under package.json

```sh
$ npm install
```

### Development Mode
We use Webpack to fire off a hot-reloading development server. This allows for continuous code changes without the need to refresh your browser.

This starts the server at localhost:3000 defaulting to `NODE_ENV=development`.

```sh
$ npm start
```

### Production Mode
To build the component and serve the minified files, run the following two commands. Setting the `NODE_ENV` flag to production triggers the production environment.

```sh
$ npm run babel-build
$ NODE_ENV=production npm start
```

### Contribute

1. Fork this repo.
2. Create a feature branch - `git checkout -b new-feature`.
3. Commit your changes - `git commit -am 'Description of feature'`.
4. Push the branch - `git push origin new-feature`.
5. Create a new Pull Request.


Contributors
----
NYPL Digital Experience
