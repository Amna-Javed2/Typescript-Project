

function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title };
    if (tracks !== undefined) {
      album.tracks = tracks;                // error
    }
    return album;
  }
console.log(make_album("Artist", "album"));
