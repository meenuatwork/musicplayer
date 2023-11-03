let previous = document.querySelector("#lessthen")
let next = document.querySelector("#graterthen")
let img = document.querySelector(".image")
let audio = document.querySelector(".audio")
let pause = document.querySelector(".play")
volumeSlider = document.querySelector(".volume-slider input ");
let i = 0;
let audioArray = [
    "audio/3-peg-sharry-mann-wapking-site-37069-60976.mp3",
    "audio/sath-nibhana-sathiya-14732.mp3",
    "audio/hasifemalehindimastinetringtone-14034.mp3",
    "audio/gabbroo-ringtone-jassi-gill-kingmaza-in-23856.mp3",
    "audio/murli-ki-taanon-si-sad-tune-bossmobi-com-15428.mp3"
]
let srcArray = [
    "image/dol.jpg",
    "image/dol2.jpg",
    "image/dol3.jpg",
    "image/dol4.jpg",
    "image/dog.jpeg"

]
next.addEventListener("click", function () {

    i++;
    if (i > 4)
        i = 0;
    audio.setAttribute("src", audioArray[i])
    audio.play();


})
previous.addEventListener("click", function () {

    i--;
    if (i < 0)
        i = 4;
    audio.setAttribute("src", audioArray[i])
    audio.play();
   
})

next.addEventListener("click", function () {

    i++;
    if (i > 4)
        i = 0;
    img.setAttribute("src", srcArray[i])
    //    audio.play();
    audio.play();
    pause.setAttribute("src", "image/5437344.png")


})
previous.addEventListener("click", function () {

    i--;
    if (i < 0)
        i = 4;
    img.setAttribute("src", srcArray[i])
    audio.play();
    pause.setAttribute("src", "image/5437344.png")

})


let num = 1;
pause.addEventListener("click", () => {
    if (num === 0) {
        audio.pause();
        pause.setAttribute("src", "image/pink.png")
        num = 1;
    }
    else {
        audio.play();
        pause.setAttribute("src", "image/5437344.png")
        num = 0;
    }
})
const handleVolume = (e) => {
    audio.volume = e.target.value;
}
volumeSlider.addEventListener("input", handleVolume);

let rangSlider = document.querySelector(".rangSlider")
rangSlider.addEventListener("change", (e) => {
    audio.currentTime = rangSlider.value * audio.duration / 100
})


console.log(rangSlider)

console.log(audio.duration)
console.log(audio.currentTime)
setInterval(() => {
    rangSlider.value = audio.currentTime * 100 / audio.duration
}, 1000)