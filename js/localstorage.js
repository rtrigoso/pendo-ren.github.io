// Check for the query
var query = parseQueryString(window.location.search);
if (!getQueryParams("apiKey", query) && !((window.location.pathname == "/setup.html")||(window.location.pathname == "/rfqaSetup.html"))) {
  window.location.pathname = "/setup.html";
}

// Write parameter
function setParameter(name, value) {
  localStorage.setItem(name, value);
}

function getParameter (name) {
    return localStorage.getItem(name);
}

function removeParameter (name) {
    localStorage.removeItem(name);
}

function getQueryParams (parameterName, query) {
    var value = query[parameterName.toLowerCase()];
    return value || getParameter(parameterName);
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
