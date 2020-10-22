import "./app.css";
import Character from "./components/Character";
import Characters from "./components/Characters";
import Header from "./components/Header";
import { getCharacters } from "./utils/api";
import { createElement } from "./utils/elements";
import Button from "./components/Button";

function App() {
  let lastName = null;
  let nextPage = null;
  const header = Header();

  const characterContainer = Characters();
  const loadMoreButton = Button({
    innerText: "Load More",
    onclick: () => {
      loadCharacters(lastName, nextPage);
    },
  });
  const main = createElement("main", {
    className: "main",
    children: [characterContainer, loadMoreButton],
  });

  async function loadCharacters(name, page) {
    const characters = await getCharacters(name, page);
    const characterElements = characters.results.map((character) =>
      Character({
        name: character.name,
        imgSrc: character.image,
      })
    );

    characterContainer.append(...characterElements);

    nextPage = characters.info.next?.match(/\d+/)[0];
    loadMoreButton.disabled = !characters.info.next;
    lastName = name;
    main.append(loadMoreButton);
  }

  const searchBar = createElement("input", {
    className: "searchbar",
    onchange: (event) => loadCharacters(event.target.value),
  });

  loadCharacters();
  const container = createElement("div", {
    children: [header, searchBar, main],
  });

  window.addEventListener("scroll", () => {
    const offsetY =
      loadMoreButton.offsetParent.offsetHeight - window.innerHeight - 200;
    if (offsetY < window.pageYOffset) {
      loadMoreButton.click();
    }
  });

  return container;
}

export default App;
