import _ from "lodash"

export default function component() {

  const elem = document.createElement("div");

  elem.innerHTML = _.join(["Hello World!"]);

  return elem;
}