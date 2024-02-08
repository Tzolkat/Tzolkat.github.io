// Personal Site Page Utilities (c) 2019 Alex Lauderdale.
// --------------------------------------------------------------------------------------
// ID selectors: top, page, menu
// Class selectors: buttons, totop, emailLink, emailText, noscript, language-*.
// --------------------------------------------------------------------------------------
// Note: IE8 is not supported. Some functions only work on a webserver. Mind ad blockers.
// ======================================================================================

// Prism variables.
Prism.plugins.autoloader.languages_path = 'assets/prism/grammars/';

// JSON object for the navigation menu.
const menu = [
	{
		"title": "About",
		"link": "/about.html"
	},
	{
		"title": "Education",
		"link": "/education.html"
	},
	{
		"title": "Projects",
		"link": "/projects.html"
	},
	{
		"title": "Downloads",
		"link": "/downloads.html"
	},
	{
		"title": "Contact",
		"link": "/contact.html"
	}
];

// Converts a NodeList into an array so we can iterate over it and such.
function toArray(nodeList) {
	return Array.prototype.slice.call(nodeList);
}

// Anti-Spam email function. Fills in href and content for email tags.
function renderEmail() {
	var o = "tzolkat";
	var n = "net";
	var m = "jason.jones";
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

// Inserts copyright statement into the footer.
function insertCopyright() {
	var temp = document.querySelector("footer");
	var el = document.createElement("span");
	el.innerHTML = "&copy; 2014-" + new Date().getFullYear() +
		" Alex Lauderdale. All Rights Reserved.";
	temp.insertBefore(el, temp.firstChild);
}

// Inserts menu links into the main navigation section.
function insertMenu() {
	var temp = document.querySelector("#menu");
	menu.forEach(function(item) {
		if (location.pathname == item.link) {
			var el = document.createElement("span");
		} else {
			var el = document.createElement("a");
			el.setAttribute("href", item.link);
		}
		el.innerHTML = item.title;
		temp.appendChild(el);
	});
}

// This is the stuff we do once the DOM is loaded.
document.addEventListener("DOMContentLoaded", function() {
	insertMenu();
	renderEmail();
	articleFeatures();
	insertCopyright();
});
