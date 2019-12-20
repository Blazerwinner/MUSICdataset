function loadSongs() {
	artistsNames = [];
	for(let i=0; i < songs.length; i++){
		artistsNames.push(songs[i].artist.name);
	}
	$( "#artistsdd" ).autocomplete({
	  source: artistsNames,
	  select: function(event, ui){
		  showArtistByName(ui.item.label);
		}
	});
}

function showArtistByName(name){
	let artist = findArtistByName(name);
	showArtist(artist);	
}

function findArtistByName(name){
	for(let i = 0; i < songs.length; i++){
		if(name == songs[i].artist.name)
			return songs[i].artist;
	}
}

function showArtist(artist){
	$(".artistPanel").remove();
	let count = getSongCount(artist);
	$artistPanel = $('<div class="artistPanel" ><h1>' + artist.name + '</h1><span>Terms:' + artist.terms + '</span><br><span>Hotness:' + Math.floor(artist.hotttnesss * 10) + '</span><br><span>Number of Songs:' + count + '</span></div>');
	
	$("body").append($artistPanel);
}

function getSongCount(artist){
	let songCount = 0;
	for(let i = 0; i < songs.length; i++){
		if(artist.name == songs[i].artist.name){
			songCount++;
		}
	}
	return songCount;
}