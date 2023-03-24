let arrayMusic = [];
class music{
    id;
    singer;
    name;
    duration;

    constructor(singer, name, duration){
      this.id;
      this.singer;
      this.name;
      this.duration;
    }


}

 function addDataToArray(){
    let music = readData();
     readData();
     addData(music);
  

     console.log(music)
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

 function result(){
   let
 }



