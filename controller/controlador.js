 let etiqueta=document.getElementById("New");
 let img=document.getElementById("img");
 let img1=document.getElementById("img1");
 let img2=document.getElementById("img2")
 let title=document.getElementById("Title");
 let title1=document.getElementById("Title1");
 let title2=document.getElementById("Title2");
 let song=document.getElementById("song");
 let song1=document.getElementById("song1");
 let song2=document.getElementById("song2");

etiqueta.addEventListener("click", cambiar);
etiqueta.addEventListener("click", cambiar1);
etiqueta.addEventListener("click", cambiar2);

function cambiar() {
    //alert("click mi perro")
   // console.log("perro")
   //document.getElementById("img").src="img/redhot2.jpg";
    img.src="img/redhot2.jpg";
    title.textContent="Red hot";
    song.src="audio/cancion2.mp3";

    //console.log(title.classList);
    //title.classList.add("display-1");
}
function cambiar1() {
    img1.src="/img/maneskin.jpg";
    title1.textContent="Maneskin";
    song1.src="/audio/Testo) Eurovision 2021_50k.mp3";

    //title1.classList.add("display-1");

}
function cambiar2() {
    img2.src="/img/pkf1.jpg";
    title2.textContent="Pink Floyd";
    song2.src="/audio/Pink Floyd - Comfortably numb_50k.mp3";

   // title2.classList.add("display-1");
}

