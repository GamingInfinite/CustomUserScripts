let container = document.getElementsByClassName("flexi")[0];

let store;
for (let i = 0; i < container.children[0].children.length; i++) {
  const element = container.children[0].children[i];
  if (element.id == "image" || element.id == "gelcomVideoContainer") {
    store = element;
    break;
  }
}
store.style.height = (screen.height / 6) * 4 + "px";
