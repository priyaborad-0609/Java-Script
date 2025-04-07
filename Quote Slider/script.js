const quotes = [
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
        background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://source.unsplash.com/random/1600x900/?technology,apple')"
    },
    {
        text: "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
        author: "Mark Zuckerberg",
        background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://source.unsplash.com/random/1600x900/?music,beatles')"
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
        background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://source.unsplash.com/random/1600x900/?science,physics')"
    },
    {
        text: "I attribute my success to this: I never gave or took any excuse.",
        author: "Florence Nightingale",
        background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://source.unsplash.com/random/1600x900/?war,history')"
    },
    {
        text: "The best way to predict the future is to invent it.",
        author: "Alan Kay",
        background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://source.unsplash.com/random/1600x900/?africa,freedom')"
    }
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const pauseButton = document.getElementById("pause");

let currentIndex = 0;
let intervalId = null;
const intervalTime = 3000; 

function initSlider() {
    showQuote(currentIndex);
    startAutoSlide();
}

function showQuote(index) {
    
    quoteElement.classList.remove("active");
    authorElement.classList.remove("active");

    setTimeout(() => {
        
        quoteElement.textContent = quotes[index].text;
        authorElement.textContent = `— ${quotes[index].author}`;    
        document.body.style.backgroundImage = quotes[index].background;

        
        quoteElement.classList.add("active");
        authorElement.classList.add("active");
    }, 500); 
}

function nextQuote() {
    currentIndex = (currentIndex + 1) % quotes.length;
    showQuote(currentIndex);
}

function prevQuote() {
    currentIndex = (currentIndex - 1 + quotes.length) % quotes.length;
    showQuote(currentIndex);
}

function startAutoSlide() {
    if (intervalId) {
        clearInterval(intervalId);
    }
    intervalId = setInterval(nextQuote, intervalTime);
    pauseButton.textContent ="Pause";
}

function pauseAutoSlide() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        pauseButton.textContent = "Play";
    } else {
        startAutoSlide();
    }
}

nextButton.addEventListener("click", () => {
    nextQuote();
    if (!intervalId) {
        startAutoSlide();
    }
});

prevButton.addEventListener("click", () => {
    prevQuote();
    if (!intervalId) {
        startAutoSlide();
    }
});

pauseButton.addEventListener("click", pauseAutoSlide);

initSlider();


// [
// {
//     "id": 7,
//         "quote": "It does not matter how slowly you go as long as you do not stop.",
//             "author": "Confucius",
//                 "authorImage": "https://example.com/confucius.jpg",
//                     "date": null,
//                         "category": "Persistence",
//                             "popularityIndex": 79
// },
// {
//     "id": 8,
//         "quote": "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
//             "author": "Mark Zuckerberg",
//                 "authorImage": "https://example.com/mark_zuckerberg.jpg",
//                     "date": "2011-07-15T09:45:00Z",
//                         "category": "Risk",
//                             "popularityIndex": 90
// },
// {
//     "id": 9,
//         "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
//             "author": "Nelson Mandela",
//                 "authorImage": "https://example.com/nelson_mandela.jpg",
//                     "date": null,
//                         "category": "Resilience",
//                             "popularityIndex": 85
// },
// {
//     "id": 10,
//         "quote": "I attribute my success to this: I never gave or took any excuse.",
//             "author": "Florence Nightingale",
//                 "authorImage": "https://example.com/florence_nightingale.jpg",
//                     "date": "1860-03-20T14:20:00Z",
//                         "category": "Success",
//                             "popularityIndex": 78
// },
// {
//     "id": 11,
//         "quote": "The best way to predict the future is to invent it.",
//             "author": "Alan Kay",
//                 "authorImage": "https://example.com/alan_kay.jpg",
//                     "date": "1971-11-05T16:10:00Z",
//                         "category": "Innovation",
//                             "popularityIndex": 82
// },
// {
//     "id": 12,
//         "quote": "You miss 100% of the shots you don't take.",
//             "author": "Wayne Gretzky",
//                 "authorImage": "https://example.com/wayne_gretzky.jpg",
//                     "date": "1991-02-18T19:30:00Z",
//                         "category": "Opportunity",
//                             "popularityIndex": 91
// },
// ]