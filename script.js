console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('neffex cold.mp3');
let MasterPlay = document.getElementById('MasterPlay');
let gif = document.getElementById('gif');
let cover = document.getElementById('cover'); // Cover image element
let myProgressBar = document.getElementById('myProgressBar');
let bottomText = document.querySelector('.bottomtext');
let nextButton = document.querySelector('.fa-step-forward');

let previousButton = document.querySelector('.fa-step-backward');

// Array of songs
let songs = [
  {songname: "neffex cold", filePath: "neffex cold.mp3", coverPath: "cold.jpeg"},
  {songname: "General Asif muneer", filePath: "Ice.mp3", coverPath: "munir.jpeg"},
  {songname: "Best Of Me", filePath: "Best Of Me.mp3", coverPath: "best.jpeg"},
  {songname: "fight back", filePath: "barren gates.mp3", coverPath: "fback.jpeg"},
  {songname: "neffex destiny", filePath: "Yeah Naah - Karan Aujla.mp3", coverPath: "dest.jpeg"},
  {songname: "Yeah na!", filePath: "Yeah Naah - Karan Aujla.mp3", coverPath: "yeah.jpeg"},
  {songname: "neffex life", filePath: "Yeah Naah - Karan Aujla.mp3", coverPath: "life.jpeg"},
];

// Load and play the selected song
function loadSong(songIndex) {
  audioElement.src = songs[songIndex].filePath;
  bottomText.innerText = songs[songIndex].songname;
  cover.src = songs[songIndex].coverPath; // Set the cover image for the new song
  audioElement.play();
  MasterPlay.classList.remove('fa-play-circle');
  MasterPlay.classList.add('fa-pause-circle');
  gif.style.opacity = 1; // Show the GIF when song plays
  cover.style.opacity = 0; // Hide the cover image when song plays
}

// Handling play/pause button
MasterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    MasterPlay.classList.remove('fa-play-circle');
    MasterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1; // Show GIF
    cover.style.opacity = 0; // Hide cover image
  } else {
    audioElement.pause();
    MasterPlay.classList.remove('fa-pause-circle');
    MasterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0; // Hide GIF
    cover.style.opacity = 1; // Show cover image when paused
  }
});

// Listen to time updates for progress bar updates
audioElement.addEventListener('timeupdate', () => {
  let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
  audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// Next song button
nextButton.addEventListener('click', () => {
  songIndex = (songIndex + 1) % songs.length; // Loop back to start if at the end
  loadSong(songIndex);
});

// Previous song button
previousButton.addEventListener('click', () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length; // Loop back to last song if at the beginning
  loadSong(songIndex);
});
