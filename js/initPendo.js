var query = parseQueryString(location.search);

var subKey = getQueryParams("apiKey", query);
var visitorId = getQueryParams("visitorId", query);
var email = getQueryParams("email", query);
var accountName = getQueryParams("accountName", query);
accountId = getQueryParams("accountId", query);
var agentHost = getQueryParams("agentHost", query);

setParameter("apiKey", subKey);
setParameter("visitorId", visitorId);
setParameter("email", email);
setParameter("accountName", accountName);
setParameter("accountId", accountId);
setParameter("agentHost", agentHost);


/*var isParent=false;
var parentAcct;
if (getParameter("parentAccountName", query)) {
    parentAcct = getParameter("parentAccountName", query);
    isParent=true;
}*/
/*if (parentAcct) createCookie('parentAccountName', parentAcct);

var sport = "Unknown";
if (parentAcct === "NFL") {
    sport = "Football"
} else if (parentAcct === "NHL") {
    sport = "Hockey"
} else if (parentAcct === "MLB") {
    sport = "Baseball"
}*/

(function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];
v=['initialize','identify','updateOptions','pageLoad'];for(w=0,x=v.length;w<x;++w)(function(m){
o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
y=e.createElement(n);y.async=!0;y.src='https://' + agentHost + '/agent/static/' + subKey + '/pendo.js';
z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

// Call this whenever information about your visitors becomes available
// Please use Strings, Numbers, or Bools for value types.

/*if (isParent) {
    pendo.initialize({
        apiKey: subKey,

        visitor: {
            id:    visitorId,   // Required if user is logged in
            email: email

            //app6556: 10
            // role:         // Optional
        },

        account: {
            id: accountId,
            name: accountName
            //acctTmp: 8,
            //app6556: [6,7]
        },

        parentAccount: {
            id:           parentAcct,
            sport:        sport
            // name:         // Optional
            // You can add any additional master account level
            // key-values here.
        }
    });
} else {*/
    pendo.initialize({
        apiKey: subKey,


        visitor: {
            id:    visitorId,   // Required if user is logged in
            email: email

            //app6556: 10
            // role:         // Optional
        },

        account: {
            id: accountId,
            name: accountName
            //acctTmp: 8,
            //app6556: [6,7]
        }
    });
//}
