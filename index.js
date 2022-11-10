//Get all important items and store them in a variable
let imageSlide = document.getElementById("imageSlide");
let previousBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

let imageIndex = 0;
let imageArray = [];

function slideShow(params) {
	if (params === "next") {
		i++;
		if (i === images.length) {
			i = images.length - 1;
		}
	} else if (params === "prev") {
		i--;

		if (i < 0) {
			i = 0;
		}
	}
	document.getElementById("imageSlide").src = imageArray[i];
}
