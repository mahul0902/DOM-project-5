let arr = [
    {dp:"night.jpeg",story: "mountains.jpeg"},
    {dp:"nature.jpg",story: "river.jpeg"},
    {dp:"night.jpeg",story: "mountains.jpeg"},
    {dp:"nature.jpg",story: "river.jpeg"}
]

let storiyan = document.querySelector("#storiyan")

let clutter = ""

arr.forEach(function(elem,idx){
    clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
})

storiyan.innerHTML = clutter;

storiyan.addEventListener("click",function(dets){
    document.querySelector("#fullscreen").style.display = "block"
    document.querySelector("#fullscreen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
    document.querySelector("#fullscreen").style.display = "none"
    },3000)
})