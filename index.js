const allBody=document.querySelector("body");
const canvas=document.querySelector("#canvas")
const getBg=document.getElementById("getBg");
const allColors=document.querySelectorAll(".colors")
const ctx = canvas.getContext("2d");
const brushSize=document.getElementById("brushSize");
const rangenum=document.querySelector(".rangenum");
const erase=document.querySelector(".erase");
const save=document.querySelector(".save");

canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
let draw=false

brushSize.addEventListener("input",()=>
{
    rangenum.innerHTML=brushSize.value
})

getBg.addEventListener("input",()=>
{
allBody.style.backgroundColor=getBg.value
})

canvas.addEventListener("mousedown",(e)=>
{
    draw=true;
    youArt(e)
})
canvas.addEventListener("mouseup",()=>
{
    draw=false;
    ctx.beginPath()
})
canvas.addEventListener("mousemove",youArt)

    let ar=Array.from(allColors)   
    ar.forEach((ele)=>{
        ele.addEventListener("click",()=>{
            ctx.strokeStyle=ele.dataset.color
        })
    })

function youArt(e)
{
    if(!draw)
    {
        return;
    }
    ctx.lineWidth=brushSize.value*3
    ctx.lineCap="round"
    ctx.lineTo(e.clientX,e.clientY)
    ctx.stroke()
     ctx.beginPath()
    ctx.moveTo(e.clientX,e.clientY)
}

erase.addEventListener("click",()=>
{
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

save.addEventListener("click",()=>
{
     let data = canvas.toDataURL("image/jpg")
    let a = document.createElement("a")
    a.href = data
    a.download = "sketch.png"
    a.click()
})