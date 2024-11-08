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


const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prv-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0; 

window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
});

function showPerson(personIndex) {
    const item = reviews[personIndex];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function() {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener('click', function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});

const sidebar = document.getElementById("sidebar");
const openSidebarBtn = document.getElementById("openSidebarBtn");

openSidebarBtn.addEventListener("click", () => {
    sideBar.style.width = "200px"; // 
});


reviews.forEach((review, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = review.name;
    listItem.addEventListener("click", () => {
        currentItem = index;
    });
    reviewList.appendChild(listItem);
});

let autoScroll = null;
autoScrollBtn.addEventListener("click", () => {
    if (autoScroll) {
        clearInterval(autoScroll);
        autoScroll = null;
    } else {
        autoScroll = setInterval(() => {
            
            nextReview(); 
        }, 3000);
    }
});
