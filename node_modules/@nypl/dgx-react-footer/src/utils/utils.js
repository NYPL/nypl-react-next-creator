/**
 * convertUrlRelative(url)
 * A utility function to support the Footer component's urlType prop.
 * If urlType is set to 'absolute', it will leave the url as-is. If not
 * this function will remove the NYPL domain and convert the string to a relative link,
 * which is more useful for QA and test environments.
 * @param (String) Url 
 */
const convertUrlRelative = (url) => {
  if (typeof url !== 'string') {
    return '#';
  }
  const regex = new RegExp(/^http(s)?\:\/\/(www.)?nypl.org/i);
  // Test regex matching pattern
  return (regex.test(url)) ? url.replace(regex, '') : url;
};

export {convertUrlRelative};
