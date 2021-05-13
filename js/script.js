{
    const welcomingMessage = () => {
        console.log("Hello World");
    }

    welcomingMessage();

    const removingHeading = () => {
        const mainHeading = document.querySelector(".js-webSiteTitle");
        const buttonRemovingHeading = document.querySelector(".js-buttonRemovingHeading");
        mainHeading.classList.toggle("webSiteTitle--none");
        buttonRemovingHeading.innerText === "Usuń Nagłówek" ? buttonRemovingHeading.innerText = "Pokaż nagłówek" : buttonRemovingHeading.innerText = "Usuń Nagłówek";
    }

    const onNightReadingMode = () => {
        const buttonNightReading = document.querySelector(".js-buttonNightReading");
        const article = document.querySelector(".js-article");
        article.classList.toggle("article--nightReading");
        buttonNightReading.innerText === "Tryb nocny" ? buttonNightReading.innerText = "Tryb dzienny" : buttonNightReading.innerText = "Tryb nocny";
    }

    const init = () => {
        const buttonRemovingHeading = document.querySelector(".js-buttonRemovingHeading");
        buttonRemovingHeading.addEventListener("click", () => removingHeading());
        const buttonNightReading = document.querySelector(".js-buttonNightReading");
        buttonNightReading.addEventListener("click", () => onNightReadingMode());
    }

    init();
}