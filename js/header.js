window.onscroll = function() {myFunction()};

var header = document.getElementById("presentation_header");
var sticky = header.offsetTop;

header.classList.add("non_sticked_header");

function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticked_header");
		header.classList.remove("non_sticked_header");
	} else {
		header.classList.remove("sticked_header");
		header.classList.add("non_sticked_header");
	}
}
