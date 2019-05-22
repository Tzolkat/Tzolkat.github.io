// Personal Site Page Utilities (c) 2019 Alex Lauderdale.
// --------------------------------------------------------------------------------------
// ID selectors: top, page, menu
// Class selectors: social, totop, emailLink, emailText
// --------------------------------------------------------------------------------------
// Note: IE8 is not supported.
// ======================================================================================

// Prism variables.
Prism.plugins.autoloader.languages_path = 'assets/libraries/grammars/';

// Converts a NodeList into an array so we can iterate over it and such.
function toArray(nodeList) {
	return Array.prototype.slice.call(nodeList);
}

// Anti-Spam email function. Fills in href and content for email tags.
function renderEmail() {
	var o = "tzolkat";
	var n = "net";
	var m = "alex";
	toArray(document.querySelectorAll(".emailLink")).forEach(function(item) {
		item.setAttribute("href", "mailto:" + m + "@" + o + "." + n);
	});
	toArray(document.querySelectorAll(".emailText")).forEach(function(item) {
		item.innerHTML = (m + "@" + o + "." + n);
	});
}

// This is the stuff we do once the DOM is loaded.
document.addEventListener("DOMContentLoaded", function() {
	renderEmail();
});
