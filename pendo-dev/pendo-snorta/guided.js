// First, get our visitorId from HTML5 storage. If it doesn't exist, initialize it.
var visitorid = localStorage.getItem("visitorid-test");
if (!visitorid) {
    visitorid = "1000";
    localStorage.setItem("visitorid-test", visitorid);
}
var accountid = localStorage.getItem("accountid-test");
if (!accountid) {
    accountid = "1";
    localStorage.setItem("accountid-test", accountid);
}
var thing = localStorage.getItem("thing-test");
if (!thing) {
    thing = "";
    localStorage.setItem("thing-test", thing);
}

/// NEEEEW SNIPPPETTTT
(function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=[];
v=['initialize','identify','updateOptions','pageLoad'];for(w=0,x=v.length;w<x;++w)(function(m){
o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
y=e.createElement(n);y.async=!0;y.src='https://pendo-dev-static.storage.googleapis.com/js/pa.js';
z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');


window.onload = function() {
var visitorForm = document.forms[0];
visitorForm.visitorid.value = visitorid;
visitorForm.accountid.value = accountid;
visitorForm.thing.value = thing;

visitorForm.onsubmit = function(evt) {
 evt.preventDefault();
 console.log("visitorid now "+visitorForm.visitorid.value);
 console.log("accountid now "+visitorForm.accountid.value);
 console.log("thing now "+visitorForm.thing.value);
 localStorage.setItem("visitorid-test", visitorForm.visitorid.value);
 localStorage.setItem("accountid-test", visitorForm.accountid.value);
 localStorage.setItem("thing-test", visitorForm.thing.value);
 window.location.reload();
};
// Call this whenever information about your visitors becomes available
// Please use Strings, Numbers, or Bools for value types.
pendo.initialize({
apiKey: 'a62bd593-99ad-4606-6d9e-fcc07eb876a6',

visitor: {
id:              visitorid,
email:           'testing@example.com',
thing:           thing
},

account: {
id:           accountid
}
});

};
