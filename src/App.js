import "./app.css";
import Character from "./components/Character";
import Header from "./components/Header";
import { getCharacterById } from "./utils/api";
import { createElement } from "./utils/elements";

function App() {
  const header = Header();

  const main = createElement("main");

  async function getCharacters() {
    const firstCharacter = await getCharacterById(1);
    const secondCharacter = await getCharacterById(2);
    main.append(
      Character({
        name: firstCharacter.name,
        imgSrc: firstCharacter.image,
      }),
      Character({
        name: secondCharacter.name,
        imgSrc: secondCharacter.image,
      })
    );
  }

  getCharacters();
  const container = createElement("div", { children: [header, main] });
  return container;
}

export default App;
