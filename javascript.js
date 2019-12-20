function initialize() {
	console.log("initialize");
	navbar();
	try{
		loadSongs();
	}
	catch(e) {}
	populateGraph();
}

window.onload = initialize;
