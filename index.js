const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
  ];
  
  // Object containing each Guardian's preferred genre
  const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "Rock",
    "Rocket": "Pop",
    "Groot": "R&B"
  };
  
  // Function to generate playlist based on preferred genre
  function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    const playlists = Object.entries(guardians).map(([guardian, preferredGenre]) => {
      const playlistSongs = songs.filter(song => song.genre === preferredGenre);
      return `<div class="playlist">
                <h2>${guardian}'s Playlist</h2>
                <div class="songs">
                  ${playlistSongs.map(song => `<p class="song-title">${song.title} - ${song.artist}</p>`).join('')}
                </div>
              </div>`;
    });
  
    // Display the playlists in the HTML
    const playlistsContainer = document.getElementById('playlists');
    playlistsContainer.innerHTML = playlists.join('');
  }
  
  // Call generatePlaylist and display the playlists for each Guardian
  generatePlaylist(guardians, songs);