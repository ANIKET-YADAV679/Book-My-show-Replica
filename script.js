// --- 1. CAROUSEL SLIDER ENGINE ---
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


// --- 2. DEBOUNCED LIVE SEARCH MODULE ---

// Core debounce manager wrapper function
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Customized layout filtering action method
function filterTask(searchvalue) {
    // Selects all figure element cards flagged with .searchable-card
    let items = document.querySelectorAll(".searchable-card");

    items.forEach((item) => {
        // Scrapes card internal header text elements to parse for structural search matches
        let match = item.innerText.toLowerCase().trim().includes(searchvalue.toLowerCase().trim());
        item.style.display = match ? "" : "none";
    });
}

// Linked event handling references init (optimized timeline to 400ms for swift filtering feedback)
let debouncesearch = debounce(filterTask, 400);
let searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", (e) => {
    debouncesearch(e.target.value);
});