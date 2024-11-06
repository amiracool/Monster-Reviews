const reviews = [ 
    {
        id: 1,
        name: "Susan Smith",
        job: "Web Dev",
        img: "images/monster7.jpg",
        text: "I'm enjoying the role!"
    },
    {
        id: 2,
        name: "Lou Smith",
        job: "UX Designer",
        img: "images/monster5.jpg",
        text: "I find it creative and fulfilling."
    },
    {
        id: 3,
        name: "Roger Smith",
        job: "Software Engineer",
        img: "images/monster1.jpg",
        text: "Great experience in tech development!"
    }
];

// Select elements
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prv-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// Set starting item
let currentItem = 0; 

// Load initial item
window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
});

// Show person based on the current item
function showPerson(personIndex) {
    const item = reviews[personIndex];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// Show next person
nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// Show previous person
prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

// Show random person
randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});
