/* REVIEWS SLIDESHOW */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    /*setTimeout(showSlides, 7000);*/
    dots[slideIndex-1].className += " active";
}

/* MENU MODAL */
window.addEventListener('load', function(){

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var link1 = document.getElementById("about1");
var link2 = document.getElementById("portfolio1");
var link3 = document.getElementById("contact1");
var color = document.getElementById("content-modal");

btn.onclick = function(){
    btn.style.display = "none";
    modal.style.display = "block";
    color.style.color = "#9b9c9d";
}

span.onclick = function(){
    modal.style.display = "none";
    btn.style.display = "block";
    color.style.color = "#fff";
}

link1.onclick = function(){
    modal.style.display = "none";
    btn.style.display = "block";
    color.style.color = "#fff";
}

link2.onclick = function(){
    modal.style.display = "none";
    btn.style.display = "block";
    color.style.color = "#fff";
}

link3.onclick = function(){
    modal.style.display = "none";
    btn.style.display = "block";
    color.style.color = "#fff";
}

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
        btn.style.display = "block";
        color.style.color = "#fff";
    }
}
});