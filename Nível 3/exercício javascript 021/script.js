let singerResult = document.querySelector('.singer');
let musicResult = document.querySelector('.music');
let durationResult = document.querySelector('.duration');

let arrayMusic = [];

class music{
    singer;
    name;
    duration;

    constructor(singer, name, duration){
      this.singer;
      this.name;
      this.duration;
    }


}

 function addDataToArray(){
    let music = readData();
     readData();
     addData(music);

    singerResult.innerHTML += `<li>${music.singer}</li>`;
    musicResult.innerHTML += `<li>${music.name}</li>`;
    durationResult.innerHTML += `<li>${music.duration}</li>`;
    
  console.log(arrayMusic)

 }

 function addData(music){
    arrayMusic.push(music)

 }


 function readData(){

  let music = {}

  music.singer = document.querySelector('input#singer').value;
  music.name = document.querySelector('input#name').value;
  music.duration = document.querySelector('input#duration').value;


  return music;

  
 }

 function removeDataToObject(){
  singerResult.innerHTML = ``;
  musicResult.innerHTML = ``;
  durationResult.innerHTML = ``;
 }




