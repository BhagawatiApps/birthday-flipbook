let currentPage = 0;
const pages = document.querySelectorAll(".page");
const flipSound = new Audio("flip.mp3");

function updatePages() {
    pages.forEach((page, index) => {
        page.style.display = index === currentPage ? "block" : "none";
    });
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        flipSound.play();
        updatePages();
    } else {
        document.querySelector(".special-page").style.display = "block";
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        flipSound.play();
        updatePages();
    }
}

updatePages();
