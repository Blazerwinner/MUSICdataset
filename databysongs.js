function loadSongs() {
	for(let i=0; i<songs.length; i++){
		$("#songsdd").append('<option val="' + i + '">' + songs[i].song.id + '</option>');
	}
}