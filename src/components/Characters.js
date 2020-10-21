import "./characters.css";
import { createElement } from "../utils/elements";

function Characters() {
  const characters = createElement("section", {
    className: "chaaracters",
  });
  return characters;
}
export default Characters;
