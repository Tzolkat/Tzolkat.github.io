document.onreadystatechange = function() {
	if (document.readyState == "interactive") {
		var o = "tzolkat";
		var n = "net";
		var m = "alex";
		var l = document.getElementsByClassName("emailLink");
		var t = document.getElementsByClassName("emailText");
		var i = 0;
		for (i = 0; i < l.length; i++) {
			l[i].setAttribute("href", "mailto:" + m + "@" + o + "." + n);
		}
		for (i = 0; i < t.length; i++) {
			t[i].innerHTML = (m + "@" + o + "." + n);
		}
	}
}
