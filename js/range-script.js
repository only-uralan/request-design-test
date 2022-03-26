window.onload = function () {
	slider1.oninput();
	slider2.oninput();
}

let slider1 = document.getElementById("price-range1");
let slider2 = document.getElementById("price-range2");
let minGap = 15;
let sliderTrack = document.querySelector(".price-range__slider-track");
let sliderMaxValue = document.getElementById("price-range1").max;
let displayValOne = document.getElementById("value1");
let displayValTwo = document.getElementById("value2");

slider1.oninput = function () {
	
	if (parseInt(slider2.value) - parseInt(slider1.value) <= minGap) {
		slider1.value = parseInt(slider2.value) - minGap;
	}
	displayValOne.textContent = slider1.value * 375 + 3000;
	displayValOne.style.left = slider1.value + "%";
	fillColor();
}
slider2.oninput = function () {
	if (parseInt(slider2.value) - parseInt(slider1.value) <= minGap) {
		slider2.value = parseInt(slider1.value) + minGap;
	}
	displayValTwo.textContent = slider2.value * 345 + 3000;
	displayValTwo.style.left = slider2.value + "%";
	fillColor();
}
function fillColor() {
	let percent1 = (slider1.value / sliderMaxValue) * 100;
	let percent2 = (slider2.value / sliderMaxValue) * 100;
	sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #38d3e8 ${percent1}%, #38d3e8 ${percent2}%, #dadae5 ${percent2}%)`;
}

