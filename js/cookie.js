// Check for the cookie
var query = parseQueryString(window.location.search);
if (!getParameter("apiKey", query) && !((window.location.pathname == "/setup.html")||(window.location.pathname == "/rfqaSetup.html"))) {
  window.location.pathname = "/setup.html";
}

// Read the cookie
function getCookie(name) {
  var re = new RegExp(name + "=([^;]+)");
  var cookieValue = re.exec(document.cookie);
  if (cookieValue !== null) {
    return unescape(cookieValue[1]);
  } else {
    return null;
  }
}

// Write cookie
function createCookie(name, value) {
  document.cookie = name + "=" + value;
}

function getParameter (parameterName, query) {
    var value = query[parameterName.toLowerCase()];
    return value || getCookie(parameterName);
}

function parseQueryString (queryString) {
    if (!queryString) return {};

    var query = {};
    var pairs = queryString.replace(/^\?/, '').split('&');

    for (var i = 0; i < pairs.length; ++i) {
        var tuple = pairs[i].split('=');
        query[tuple[0].toLowerCase()] = tuple[1];
    }

    return query;
}