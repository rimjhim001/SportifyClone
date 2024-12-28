// const slider = document.getElementById('slider');

//   slider.addEventListener('input', () => {
//     const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
//     slider.style.background = `linear-gradient(to right, #007bff ${value}%, #ddd ${value}%)`;
//   });

console.log("welcome to sportify")
let audioElement = new Audio ('../songs/0.mp3');
let masterplay = document.getElementById("masterplay")
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let mastersongname = document.getElementById("mastersongname");
let songitems=Array.from(document.getElementsByClassName("songitems"))
let songs=[
    {songName:"Gata Only",filePath:"../songs/0.mp3",coverPath:"../images/1.jpg"},
    {songName:"ABUSADAMENTE",filePath:"../songs/1.mp3",coverPath:"../images/2.jpg"},
    {songName:"Gasolina",filePath:"../songs/2.mp3",coverPath:"../images/3.jpg"},
    {songName:"i'm yours",filePath:"../songs/3.mp3",coverPath:"../images/4.jpg"},
    {songName:"yours Body Language Speaks to Me",filePath:"../songs/4.mp3",coverPath:"../images/5.jpg"},
    {songName:"Ride It",filePath:"../songs/5.mp3",coverPath:"../images/6.jpg"},
    {songName:"favorite",filePath:"../songs/6.mp3",coverPath:"../images/7.jpg"},
    {songName:"My you",filePath:"../songs/7.mp3",coverPath:"../images/8.jpg"},
    {songName:"Billionera",filePath:"../songs/8.mp3",coverPath:"../images/9.jpg"},
    {songName:"One Dance",filePath:"../songs/9.mp3",coverPath:"../images/10.jpg"},
    {songName:"Belki",filePath:"../songs/10.mp3",coverPath:"../images/11.jpg"},
    {songName:"Asjal Ruwhi",filePath:"../songs/11.mp3",coverPath:"../images/12.jpg"}

]
// audioElement.play();

songitems.forEach((element,i)=>{
    console.log(element,i)
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove("fa-circle-play")
        masterplay.classList.add("fa-circle-pause")
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        masterplay.classList.remove("fa-circle-pause")
        masterplay.classList.add("fa-circle-play")
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate', () => {
    console.log("timeupdate");
    if (audioElement.duration) {
        const progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
        console.log(progress);
        myprogressbar.value = progress;
    }
});
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
     element.classList.add('fa-circle-play');
    })
}

    Array. from(document.getElementsByClassName('songitemplay')).forEach((element) =>{
    element.addEventListener('click',(e)=>{
    makeAllPlays();
    index =parseInt(e.target.id);
    e.target. classList.remove('fa-circle-play'); 
     e.target.classList.add('fa-circle-pause');
     audioElement.src = `../songs/${index}.mp3`
     mastersongname.innerText=songs[index].songName;
audioElement.currentTime = 0;
audioElement.play();
gif.style.opacity=1;
masterplay.classList.remove('fa-circle-play'); 
masterplay.classList.add('fa-circle-pause')

    })
    })

document.getElementById('next').addEventListener('click',()=>{
if(index>=11){
    index=0;
}else{
    index+=1;
}
audioElement.src = `../songs/${index}.mp3`
mastersongname.innerText=songs[index].songName;
audioElement.currentTime = 0;
audioElement.play();
gif.style.opacity=1;
masterplay.classList.remove('fa-circle-play'); 
masterplay.classList.add('fa-circle-pause')
    })

    document.getElementById('previous').addEventListener('click',()=>{
        if(index<=0){
            index=0;
        }else{
            index-=1;
        }
        audioElement.src = `../songs/${index}.mp3`
        mastersongname.innerText=songs[index].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play'); 
        masterplay.classList.add('fa-circle-pause')
            })    



