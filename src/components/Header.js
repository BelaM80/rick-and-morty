import "./header.css";
import { createElement } from "../utils/elements";

function Header() {
  const headline = createElement("h1", {
    className: "header__headline",
    innerText: "Rick and Morty",
  });

  const searchInput = createElement("input", {
    className: "header__input",
  });

  const header = createElement("header", {
    className: "header",
    children: [headline],
  });

  header.append(searchInput);
  return header;
}

export default Header;
