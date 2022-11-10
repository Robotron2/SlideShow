//Get all important items and store them in a variable
let imageSlide = document.getElementById("imageSlide");
let previousBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

let imageIndex = 0;
let imageArray = ["./images/image1.jpg", "./images/image2.jpg", "./images/image3.jpg", "./images/image4.jpg", "./images/image5.jpg"];

function slideShow(params) {
	//If Next Btn Is Pressed
	if (params === "next") {
		imageIndex++;
		//If the Image Has Gotten To The Last Image In The List
		if (imageIndex === imageArray.length) {
			imageIndex = 0;
			console.log("End");
		}
	}
	//If Previous Btn Is Pressed
	else if (params === "prev") {
		imageIndex--;

		if (imageIndex < 0) {
			imageIndex = 0;
		}
	}
	//Set any value of the image at the image array index to be the src in the HTML
	document.getElementById("imageSlide").src = imageArray[imageIndex];
}
