const linkSupportsPreload = function (tokenList, token) {
  if (!tokenList || !tokenList.supports) {
    return false;
  }
  try {
    return tokenList.supports(token);
  } catch (e) {
    return false;
  }
};
export default linkSupportsPreload;
