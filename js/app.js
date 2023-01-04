function findElement(element, parent = document) {
  return parent.querySelector(element);
}
const elForm = findElement("#form");
const elTitle = findElement("#title");
const elText = findElement("#text");
const elUl = findElement("#globalUl");

const array = [];

elForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const elTitl = elTitle.value;
  const elTex = elText.value;

  const elLi = document.createElement("li");
  elLi.innerHTML = `
    <li class="global-news-main-list-item">
        <img class="global-news-main-item-img" src="./images/flag-china.jpg" alt="" srcset="./images/flag-china.jpg 1x, ./images/flag-china@2x.jpg 2x" width="210" height="165">
        <div class="global-news-main-item-content">
            <h2 class="global-news-main-item-title">
                <a class="global-news-main-item-title-link" href="index.html">${elTitl}</a>
            </h2>
            <p class="global-news-main-item-text">${elTex}</p>
            <div class="global-news-main-item-footer">
                <img class="global-news-main-item-footer-img" src="./images/solenka.jpg" alt="" srcset="./images/solenka.jpg 1x, ./images/solenka@2x.jpg 2x" width="20" height="20">
                <span class="global-news-main-item-footer-text">Solenka.info </span>
                <time class="global-news-main-item-footer-time" datetime="2022-02-22T19:43:00">19:43</time>
            </div>
        </div>
    </li>
    `;
  elUl.appendChild(elLi);

  elForm.reset();
});
