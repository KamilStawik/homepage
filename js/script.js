console.log("Hello World");


let buttonRemovingHeading = document.querySelector(".jsButtonRemovingHeading");
let mainHeading = document.querySelector(".webSiteTitle");

let buttonChangingBackground = document.querySelector(".jsButtonChangingBackground");
let interestingParagraph = document.querySelector(".article");

let buttonNightReading = document.querySelector(".jsButtonNightReading");


buttonRemovingHeading.addEventListener("click", () => {
    mainHeading.classList.toggle("webSiteTitle--none");
    buttonRemovingHeading.innerText === "Usuń Nagłówek" ? buttonRemovingHeading.innerText = "Pokaż nagłówek" : buttonRemovingHeading.innerText = "Usuń Nagłówek";
});

buttonChangingBackground.addEventListener("click", () => {
    if (buttonChangingBackground.innerText === "Nie chcę dalej czytać") {
        buttonChangingBackground.innerText = "Chcę czytać dalej";
        interestingParagraph.classList.add("article--hiden");
        interestingParagraph.classList.remove("article");
        interestingParagraph.classList.remove("article--nightReading");
    } else {
        buttonChangingBackground.innerText = "Nie chcę dalej czytać";
        interestingParagraph.classList.remove("article--hiden");
        interestingParagraph.classList.remove("article--nightReading");
        interestingParagraph.classList.add("article");
    }
});

buttonNightReading.addEventListener("click", () => {
    if (buttonNightReading.innerText === "Tryb nocny") {
        buttonNightReading.innerText = "Tryb dzienny";
        interestingParagraph.classList.add("article--nightReading");
        interestingParagraph.classList.remove("article");
        interestingParagraph.classList.remove("article--hiden");
    } else {
        buttonNightReading.innerText = "Tryb nocny";
        interestingParagraph.classList.remove("article--nightReading");
        interestingParagraph.classList.remove("article--hiden");
        interestingParagraph.classList.add("article");
    }
});
