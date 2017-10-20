const linkSupportsPreload = function (tokenList, token) {
  if (!tokenList || !tokenList.supports) {
    return false;
  }
  try {
    return tokenList.supports(token);
  } catch (e) {
    if (e instanceof TypeError) {
      console.log("The DOMTokenList doesn't have a supported tokens list");
    } else {
      console.error("That shouldn't have happened");
    }
    return false;
  }
};
export default linkSupportsPreload;