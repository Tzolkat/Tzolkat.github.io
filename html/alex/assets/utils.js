// Personal Site Page Utilities (c) 2019 Alex Lauderdale.
// --------------------------------------------------------------------------------------
// ID selectors: top, page, menu
// Class selectors: buttons, totop, emailLink, emailText, noscript, language-*.
// --------------------------------------------------------------------------------------
// Note: IE8 is not supported. Some functions only work on a webserver. Mind ad blockers.
// ======================================================================================

// Prism variables.
Prism.plugins.autoloader.languages_path = 'assets/prism/grammars/';

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

// Adds back to top functionality and dividers to each article except the first.
function articleFeatures() {
	document.querySelector("header").setAttribute("id", "top");
	var temp = document.getElementsByTagName("template")[0];
	toArray(document.querySelectorAll("article")).slice(1).forEach(function(item) {
		var el = temp.content.cloneNode(true);
		item.appendChild(el);
		el = document.createElement("hr");
		item.parentNode.insertBefore(el, item);
	});
}

// This is the stuff we do once the DOM is loaded.
document.addEventListener("DOMContentLoaded", function() {
	renderEmail();
	articleFeatures();
});
