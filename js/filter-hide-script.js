let filterButton = document.getElementsByClassName("filter-button");
for (let i = 0; i < filterButton.length; i++) {
	filterButton[i].addEventListener("click", function() {
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
			 panel.style.display = "none";
		} else {
			 panel.style.display = "block";
		}
  }); 
}