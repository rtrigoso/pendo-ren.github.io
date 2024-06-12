// When content is loaded
document.addEventListener("DOMContentLoaded", function() {
	var subKeyInput = document.getElementById("subKey");
	var agentHostInput = document.getElementById("agentHost");
	var visitorIdInput = document.getElementById("visitorId");
	var submitButton = document.getElementById("submitButton");
	var email = document.getElementById("email");
	var accountName = document.getElementById("accountName");
	var accountId = document.getElementById("accountId");
	var parentAccountActive = false;
	/*var parentAccountName = document.getElementById("parentAccountName");
	var parentAccountBlock = document.getElementById("parentAccountBlock");*/
	var checkState = false;

	if (window.location.pathname === "/setup.html") {

		subKeyInput.value = getQueryParams("apiKey", query);
		agentHostInput.value = getQueryParams("agentHost", query);
		visitorIdInput.value = getQueryParams("visitorId", query);
		email.value = getQueryParams("email", query);
		accountName.value = getQueryParams("accountName", query);
		accountId.value = getQueryParams("accountId", query);

		/*if ((getCookie("parentAccountActive")) && (getCookie("parentAccountName"))) {
			checkState = getCookie("parentAccountActive");
			parentAccountName.value = getCookie("parentAccountName");
			if (parentAccountName.length === 0) {
				checkState = false
			}

			if (!(checkState === true)) {
				parentAccountActive.checked = false;
				parentAccountName.value = '';
			} else {
				parentAccountActive.checked = true;
				parentAccountBlock.hidden = false;
			}
		}*/
	}

	if (window.location.pathname === "/rfqaSetup.html") {
		var adminNum = Math.floor(Math.random() * (700))+1;
		var rfqauser = "pendo-admin"+adminNum+"@e.rainforestqa.com";

		subKeyInput.value = "a7ca09a1-05cc-4173-6cef-7cd5adf3d671";
		agentHostInput.value = "pendo-test-static.storage.googleapis.com";
		visitorIdInput.value = rfqauser.toString();
		email.value = rfqauser.toString();
		accountName.value = "RainforestQA";
		accountId.value = "RainforestQA";

	}



	//add listener for click of submit button to set the cookie
	/// This entire event listener needs to DIAF - let's refactor ASAP. -CPm
	submitButton.addEventListener("click", function() {
		console.info("agentHost: ", agentHostInput.value);
		console.info("apiKey: ", subKeyInput.value);
		console.info("visitorId: ", visitorIdInput.value);
		console.info("email: ", email.value);
		console.info("accountName: ", accountName.value);
		console.info("accountId: ", accountId.value);

		if (!checkEmpty(subKeyInput) || !subKeyInput.validity.valid) {
			// set the parameters
			setParameter("apiKey", subKeyInput.value);
			setParameter("agentHost", agentHostInput.value);
			setParameter("accountName", accountName.value);
			setParameter("accountId", accountId.value || accountName.value);
			setParameter("visitorId", visitorIdInput.value);
			setParameter("email", email.value || visitorId.value);
		} else {
			console.warn ("Warning: API Key missing or invalid");
		}
	});
	// Check input value of Subscription Key

	subKeyInput.addEventListener("paste", function() {
		if (!checkEmpty(visitorIdInput)) {
			checkInputValue(subKeyInput);
		}
	});

	subKeyInput.addEventListener("keyup", function() {
		if (!checkEmpty(visitorIdInput)) {
			checkInputValue(subKeyInput);
		}
	});

});

// Validate that inputs are not empty
function checkEmpty(e) {
	var length = e.value.length;
	return length === 0;
}

// Validate input and enable/disable submit button
function checkInputValue(e) {
	document.getElementById("submitButton").disabled = checkEmpty(e);
}
