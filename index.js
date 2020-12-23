const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".Images img");

const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

current.addEventListener("click", Resize);
function Resize(e) {
  lightbox.classList.add("active");
  const img = document.createElement("img");
  img.src = current.src;
  while(lightbox.firstChild){
      lightbox.removeChild(lightbox.firstChild);
  }
  lightbox.appendChild(img);
}

lightbox.addEventListener( 'click', e =>{
    if(e.target ==e.currentTarget) return   
    lightbox.classList.remove('active');
})

window.onload = function () {
  imgs.forEach((img) => (img.style.opacity = 0.4));
  imgs[0].style.opacity = 1;
};

imgs.forEach((img) => img.addEventListener("click", imgClick));

function imgClick(e) {
  imgs.forEach((img) => (img.style.opacity = 0.5));
  current.src = e.target.src;

  e.target.style.opacity = 1;
}
