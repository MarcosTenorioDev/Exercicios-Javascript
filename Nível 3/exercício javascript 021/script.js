 let arrayMusic = [];

 function addDataToArray(){
     let musicData = readData();
     addData(musicData);

     console.log(musicData)
     console.log(arrayMusic)

 }

 function addData(musicData){
     arrayMusic.push(musicData)

 }


 function readData(){
    
     let musicData = {};

     musicData.singer = document.querySelector('input#singer').value;
     musicData.musicName = document.querySelector('input#musicName').value;
     musicData.musicDuration = document.querySelector('input#musicDuration').value;

     return musicData;

 }



