// Anti-Spam Email Script (c) 2019 Alex Lauderdale.
// ------------------------------------------------------------------------
// Note: IE8 is not supported.
// ========================================================================

// Provides support for forEach to NodeLists.
function forEach(list, callback) {
	Array.prototype.forEach.call(list, callback);
}

// Once the DOM is loaded, fill in emailLink and emailText classes.
document.addEventListener("DOMContentLoaded", function() {
	var o = "tzolkat";
	var n = "net";
	var m = "alex";
	forEach(document.querySelectorAll(".emailLink"), function(item) {
		item.setAttribute("href", "mailto:" + m + "@" + o + "." + n);
	});
	forEach(document.querySelectorAll(".emailText"), function(item) {
		item.innerHTML = (m + "@" + o + "." + n);
	});
});
