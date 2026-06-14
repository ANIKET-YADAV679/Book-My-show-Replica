let slides = document.querySelector('.slides');
let images = document.querySelectorAll('.slides img');
let prevbtn = document.getElementById('prevbtn');
let nextbtn = document.getElementById('nextbtn');
let index = 0;

function showSlide(){
    slides.style.transform = `translateX(${-index * 100}%)`;    
}

prevbtn.addEventListener('click', function(){
    index--;
    if(index < 0){
        index = images.length - 1;
    }
    showSlide();
});

nextbtn.addEventListener('click', function(){
    index++;
    if(index >= images.length){
        index = 0;
    }
    showSlide();
});