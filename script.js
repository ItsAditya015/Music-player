const mainCard = document.querySelector("#ContentWarpper");
const songImg = document.querySelector("#SongImg");
const controlButtons = document.querySelector(".control");
const currentYear = new Date().getFullYear();

const playPauseButton = document.querySelector("#PausePlay");
const audio = document.querySelector("audio");
const artist = document.querySelector("#Artist");
const songName = document.querySelector("#SongName");
const previousButton = document.querySelector("#Previous");
const nextButton = document.querySelector("#Next");
const songImgAtTheTop = document.querySelector("img");

let startDuration = document.querySelector("#Start");
const endDuration = document.querySelector("#End");
const meter = document.querySelector("#ProgrssMeterChild");
const progressBar = document.querySelector("#ProgressMeterContainer");

let isPlaying = false;
let index = 0;

const songDataBase = [
  {
    songSrc: "./music/choliya ke hook.mp3",
    title: "Choliya ke Hook",
    artist: "Arvind Akela AKA-Kallu",
    imgSrc: "./img/download (5).jpeg",
  },
  {
    songSrc: "./music/#Video  मरद हS मथ क दरद   #Shivani Singh  Parul Yadav  New Bhojpuri Song 2024  MTR Bhojpuri.mp3",
    title: "Marad nahi matha ke darad",
    artist: "Praful Yadav",
    imgSrc: "./img/download (6) copy.jpeg",
  },
  {
    songSrc: "./music/Tom Odell - Another Love (Official Video).mp3",
    title: "Another Love",
    artist: "Tom Odell",
    imgSrc: "./img/another love.jpeg",
  },
  {
    songSrc: "./music/Powfu - death bed (coffee for your head) (Official Video) ft. beabadoobee.mp3",
    title: "Death Bed",
    artist: "Powfu",
    imgSrc: "./img/death bed.jpeg",
  },
  {
    songSrc: "./music/ISHQ Lost and found Faheem AbdullahRauhan malik Amir Ameer Live ..mp3",
    title: "ISHQ",
    artist: "Faheem Abdullah Rauhan",
    imgSrc: "./img/ishq.jpeg",
  },
  {
    songSrc: "./music/BTS (방탄소년단) 'Butter' Official MV.mp3",
    title: "Butter",
    artist: "BTS",
    imgSrc: "./img/butter.jpeg",
  },
  {
    songSrc: "./music/Anuv Jain - JO TUM MERE HO (Official Video).mp3",
    title: "Jo Tum Mere Ho",
    artist: "AAnub Jain",
    imgSrc: "./img/jo tum mere ho.jpeg",
  },
  {
    songSrc: "./music/Aankhein Khuli Song  Mohabbatein  Shah Rukh Khan, Aishwarya Rai  Lata Mangeshkar, Udit Narayan.mp3",
    title: "Aankhein Khuli",
    artist: "Udit Narayan , Lata Mangeshkar",
    imgSrc: "./img/ankhe khuli.jpeg",
  },
  {
    songSrc: "./music/Indila - Dernière Danse (Clip Officiel).mp3",
    title: "Derniere Danse",
    artist: "Indila",
    imgSrc: "./img/derniere danse.jpeg",
  },
  {
    songSrc: "./music/AURORA - Runaway.mp3",
    title: "Runaway",
    artist: "Aurora",
    imgSrc: "./img/download (1).jpeg",
  },
];

const loadMusic = () => {
  audio.src = songDataBase[index].songSrc;
  artist.textContent = songDataBase[index].artist;
  songName.textContent = songDataBase[index].title;
  songImgAtTheTop.src = songDataBase[index].imgSrc;
};
audio.addEventListener("ended", () => {
  loadMusic(index++);
  play();
});

loadMusic();

nextButton.addEventListener("click", () => {
  if (index < songDataBase.length - 1) {
    loadMusic(index++);
    play();
  } else {
    pause();
  }
});
previousButton.addEventListener("click", () => {
  if (index > 0) {
    loadMusic(index--);
    play();
  } else {
    pause();
  }
});

const play = () => {
  isPlaying = true;
  audio.play();
  playPauseButton.classList.replace("fa-play", "fa-pause");
  songImg.classList.add("anime");
};
const pause = () => {
  isPlaying = false;
  audio.pause();
  playPauseButton.classList.replace("fa-pause", "fa-play");
  songImg.classList.remove("anime");
};

playPauseButton.addEventListener("click", () => {
  if (isPlaying) {
    pause();
  } else {
    play();
  }
});
let minute, second;
const timeStamp = (event) => {
  let { duration, currentTime } = event.srcElement;
  const full_second = Math.floor(duration % 60);
  const full_minute = Math.floor(duration / 60);
  const start_second = Math.floor(currentTime % 60);
  const start_minute = Math.floor(currentTime / 60);
  const totalDuration = `${full_minute} : ${full_second}`;
  const currenDuration = `${start_minute} : ${start_second}`;
  if (duration) {
    endDuration.textContent = totalDuration;
  }
  startDuration.textContent = currenDuration;
  const percentage = (currentTime / duration) * 100;
  meter.style.width = `${percentage}%`;
};
audio.addEventListener("timeupdate", timeStamp);
progressBar.addEventListener("click", (event) => {
  const { duration } = audio;
  const moreProgress =
    (event.offsetX / event.srcElement.clientWidth) * duration;
  audio.currentTime = moreProgress;
});

document.querySelector("#Year").innerHTML = currentYear;

mainCard.addEventListener("mouseover", (event) => {
  const xAxis = (window.innerWidth / 2 - event.pageX) / 15;
  const yAxis = (window.innerHeight / 2 - event.pageY) / 15;
  mainCard.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
  songImg.style.transform = `rotate(${xAxis}deg)`;
  controlButtons.style.transform = `rotate(${xAxis}deg)`;
});
mainCard.addEventListener("mouseleave", () => {
  mainCard.style.transform = "rotateX(0deg) rotateY(0deg)";
  songImg.style.transform = "rotate(0deg)";
  controlButtons.style.transform = "rotate(0deg)";
});
