var playlist = {
  artist: "song",
  name: "title"
}

function updatePlaylist (playlist, artistName, songTitle){
  Object.assign(playlist, {artistName: 'songTitle'})
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
}