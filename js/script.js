const buttonDelImgElement = document.querySelector(".js-buttonDeletePhoto");
const imgDelElement = document.querySelector(".js-image");

buttonDelImgElement.addEventListener("click", () => {
  imgDelElement.remove();
  buttonDelImgElement.remove();
});

const buttonChangeBackgroundElement = document.querySelector(".js-buttonChangeBackground");
const bodyElement = document.querySelector(".body");
let buttonChangeBackgroundText = document.querySelector(".js-buttonChangeBackgroundText");

buttonChangeBackgroundElement.addEventListener("click", () => {
        bodyElement.classList.toggle("body--background");

        buttonChangeBackgroundText.innerText = bodyElement.classList.contains("body--background") ? "Przywróć oryginalne tło" : "Zmień tło";
});

const buttonGoToTopElement = document.querySelector(".js-buttonGoToTop");

buttonGoToTopElement.addEventListener("click", () => {
    scroll(0, 0);
});

const imageLikePageElement = document.querySelector(".js-imageLikePage");
let imageLikeIsChange = false;

imageLikePageElement.addEventListener("click", () => {
    const sectionTextElement = document.querySelector(".js-sectionText");
    if(imageLikeIsChange == false) {
        sectionTextElement.innerText = "Dziękuję za polubienie strony!";
        imageLikePageElement.innerHTML = `<img class="imageLikePage" src="images/icon-on.png" alt="Serce wypełnione - polubiona strona">`;
        imageLikeIsChange = true;
    } else {
        sectionTextElement.innerText = "Podoba Ci się strona?";
        imageLikePageElement.innerHTML = `<img class="imageLikePage" src="images/icon-off.png" alt="Serce puste - niepolubiona strona">`;
        imageLikeIsChange = false;
    }
});