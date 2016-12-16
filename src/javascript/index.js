var validateButton = function() {
	let departureInput = document.querySelectorAll(".line-size input")[0];
	let destinationInput = document.querySelectorAll(".line-size input")[1];

	if(departureInput.value != "" && destinationInput.value != "") {
		document.querySelector("#search-button").removeAttribute("disabled");
	} else {
		document.querySelector("#search-button").setAttribute("disabled","disabled");
	}
}