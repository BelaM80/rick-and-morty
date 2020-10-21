import { container } from "webpack";
import "./Character.css";
import { createElement } from "../utils/elements";

function Character({ name, imgSrc }) {
  const title = createElement("div", {
    innerText: name,
  });
  const avatar = createElement("img", {
    src: imgSrc,
    alt: name,
  });

  const container = createElement("div", {
    clasName: "character",
    children: [title, avatar],
  });

  return container;
}

export default Character;
