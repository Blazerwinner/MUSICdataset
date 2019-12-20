const minimumSongsForGenre = 100;

function populateGraph(){
	console.log('populateGraph()...');
	let genres = {};
	for(let i = 0; i < songs.length; i++){
		if(genres[songs[i].artist.terms] == null)
			genres[songs[i].artist.terms] = [];
		genres[songs[i].artist.terms].push(songs[i].artist.hotttnesss);
	}
	
	
	genre_hotness = [];
	for (var key in genres) {
		if (genres.hasOwnProperty(key)) {
			if(genres[key].length >= minimumSongsForGenre){
				genre_hotness[key] = average(genres[key]);
				addGenreToGraph(key, genre_hotness[key]);
			}
		}
	}
	
	
}

function average(a){
	let sum = 0;
	for(let i = 0; i < a.length; i++){
		sum += a[i];
	}
	return (sum / a.length);
}

function addGenreToGraph(key, hotness){
	console.log("Adding " + key + ', ' + hotness + ' to graph.');
	let $bar = getBar(hotness);
	$('.bar-graph').append($bar);
	
	let $label = getXLabel(key);
	$('.x-labels').append($label);
}

function getBar(hotness){
	let $barHolder = $('<div class="barHolder" ></div>');
	let $alternateBar = $('<div class="alternateBar" ></div>');
	$alternateBar.css('height', (99 - (hotness * 100)) + '%');
	let $bar = $('<div class="bar" ></div>');
	$bar.css('height', (hotness * 100) + '%');
	
	$barHolder.append($alternateBar);
	$barHolder.append($bar);
	
	return $barHolder;
}

function getXLabel(key){
	let $label = $('<div class="label" >' + key + '</div>');
	return $label;
}