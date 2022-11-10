//Get all important items and store them in a variable
let imageSlide = document.getElementById("imageSlide");
let previousBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

let imageIndex = 0;
let imageArray = ["./images/image1.jpg", "./images/image2.jpg", "./images/image3.jpg", "./images/image4.jpg", "./images/image5.jpg"];

function slideShow(params) {
	if (params === "next") {
		imageIndex++;
		if (imageIndex === imageArray.length) {
			imageIndex = 0;
			console.log("End");
		}
	} else if (params === "prev") {
		imageIndex--;

		if (imageIndex < 0) {
			imageIndex = 0;
		}
	}
	document.getElementById("imageSlide").src = imageArray[imageIndex];
}
