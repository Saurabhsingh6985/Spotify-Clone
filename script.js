console.log("Welcom to Spotify");
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]



toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});




// the Part of the container javascript


let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songsItems=Array.from(document.getElementsByClassName('songItem'));





let songs = [
    { songName: "Mere Mehboob Qayamat Hogi", filePath: "./songs/1.mp3", coverPath: './images/love.jpg' },
    { songName: "The Guitar Music", filePath: "./songs/2.mp3", coverPath: './images/bg.jpg' },
    { songName: "The Best BackGround Music", filePath: "./songs/3.mp3", coverPath: './images/g.jpg' },
    { songName: "Ae-Watan Ae-watan Female Version", filePath: "./songs/4.mp3", coverPath: './images/ga.jpg' },
    { songName: "Ae-Watan Ae-watan Male Version", filePath: "./songs/5.mp3", coverPath: './images/gana.jpg' },
    { songName: "Gulabi Songs", filePath: "./songs/6.mp3", coverPath: './images/i.jpg' },
    { songName: "nwanti love songs", filePath: "./songs/7.mp3", coverPath: './images/img.jpg' },
    { songName: "Lela-Lela songs", filePath: "./songs/8.mp3", coverPath: './images/lo.jpg' },
    { songName: "Blue-Eyes_songs", filePath: "./songs/9.mp3", coverPath: './images/m.jpg' },
    { songName: "Unstoppable_songs", filePath: "./songs/10.mp3", coverPath: './images/m.jpg' }
]


songsItems.forEach((element, i) => {
    // console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

});

// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
});

// Listen to events
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate')

    // Updated SeekBar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress)
    myProgressBar.value = progress;


});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});




const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    });
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.src = `./songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');


    });

});




document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0

    }
    else {
        songIndex += 1;
    }
    audioElement.src = `./songs/${songIndex + 1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});




document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <=0) {
        songIndex = 0

    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `./songs/${songIndex + 1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});




































// console.log("Welcome to Spotify");

// // Initialize the variables
// let songIndex = 0;
// let audioElement = new Audio('./songs/7.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
// let songItems = Array.from(document.getElementsByClassName('songItem'));


// let songs = [
//     { songName: "Mere Mehboob Qayamat Hogi - Yo Yo Honey Singh  ", filepath: "./songs/1.mp3", coverPath: "./images/love.jpg" },
//     { songName: "Guitar Music", filepath: "./songs/2.mp3", coverPath: "./images/bg.jpg" },
//     { songName: "The BackGround Music", filepath: "./songs/3.mp3", coverPath: "./images/g.jpg" },
//     { songName: "Ae Watan- Ae Watan Female-version", filepath: "./songs/4.mp3", coverPath: "./images/ga.jpg" },
//     { songName: "Ae Watan- Ae Watan Male-version", filepath: "./songs/5.mp3", coverPath: "./images/gana.jpg" },
//     { songName: "Gulabi Songs", filepath: "./songs/6.mp3", coverPath: "./images/i.jpg" },
//     { songName: "nwanti Love", filepath: "./songs/7.mp3", coverPath: "./images/lo.jpg" },
//     { songName: "Laela-Laela", filepath: "./songs/8.mp3", coverPath: "./images/m.jpg" },
// ]



// songItems.forEach((element, i) => {
//     // console.log(element,i);
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

// });



// // audioElement.play();

// // Handle Play/pause click

// masterPlay.addEventListener('click', () => {
//     if (audioElement.paused || audioElement.currentTime <= 0) {
//         audioElement.play();
//         masterPlay.classList.remove('fa-circle-play');
//         masterPlay.classList.add('fa-circle-pause');
//         gif.style.opacity = 1;
//     }
//     else {
//         audioElement.pause();
//         masterPlay.classList.remove('fa-circle-pause');
//         masterPlay.classList.add('fa-circle-play');
//         gif.style.opacity = 0;

//     }
// });

// // Listen to events
// audioElement.addEventListener('timeupdate', () => {
//     // console.log('timeupdate');
//     // Updated SeekBar
//     progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
//     // console.log(progress);
//     myProgressBar.value = progress;


// });


// myProgressBar.addEventListener('change', () => {
//     audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
// });


// const makeAllPlays = () => {
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//         element.classList.remove('fa-circle-pause');
//         element.classList.add('fa-circle-play');
//     });
// }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
//     element.addEventListener('click', (e) => {
//         // console.log(e.target);`
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-circle-play');
//         e.target.classList.add('fa-circle-pause');
//         audioElement.src = `./songs/${songIndex+1}.mp3`
//         audioElement.currentTime = 0;
//         audioElement.play();
//         masterPlay.classList.remove('fa-circle-play');
//         masterPlay.classList.add('fa-circle-pause');
//     });
// });



// document.getElementById('next').addEventListener('click'), () => {
//     if (songIndex >=7) {
//         songIndex = 0

//     }
//     else {
//         songIndex += 1
//     }
//     audioElement.src = `./songs/${songIndex+1}.mp3`
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-circle-play');
//     masterPlay.classList.add('fa-circle-pause');
// }

// document.getElementById('previous').addEventListener('click'), () => {
//     if (songIndex <=0 ) {
//         songIndex = 0

//     }
//     else {
//         songIndex -= 1
//     }
//     audioElement.src = `./songs/${songIndex+1}.mp3`
//     audioElement.currentTime = 0;
//     audioElement.play();
//     masterPlay.classList.remove('fa-circle-play');
//     masterPlay.classList.add('fa-circle-pause');
// }



