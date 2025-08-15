let img = document.querySelector('img');
let h2=document.querySelector('h2');
let prevSrc = img.src
let prevText = h2.innerText

 img.addEventListener("mouseenter", ()=>{
    img.src='https://cdn.pixabay.com/photo/2015/08/18/23/54/baumkirchen-895299_960_720.jpg'
    h2.innerText="Paris"
    img.style.border='2px solid blue'
 })   
  
 img.addEventListener("mouseleave", ()=>{
    img.src=prevSrc
    h2.innerText=prevText
 })    