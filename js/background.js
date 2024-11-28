const imgs =[
    "babyPink.jpg","goldenhour.jpg","lightBlue.jpg","sea.jpg"
]
const bgnum = Math.floor(Math.random()*imgs.length)

const bgImg = document.createElement("img");
document.body.appendChild(bgImg);
bgImg.src = `img/${imgs[bgnum]}`


