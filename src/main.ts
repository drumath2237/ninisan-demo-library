import "./style.css";

import { add, sayHello } from "../lib";

const result = add(1, 2);
const message = sayHello("Alice");

const resultView = document.getElementById(
  "result"
) as HTMLParagraphElement | null;

const messageView = document.getElementById(
  "message"
) as HTMLParagraphElement | null;

if (resultView && messageView) {
  resultView.textContent = `1+2=${result}`;
  messageView.textContent = `message is "${message}"`;
}

