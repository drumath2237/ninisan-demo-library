import "./style.css";

import { add, sayHello } from "../lib";

const result = add(1, 2);
const message = sayHello("Alice");

const resultView = document.getElementById("result") as HTMLParagraphElement;
const messageView = document.getElementById("message") as HTMLParagraphElement;

resultView.textContent = `1+2=${result}`;
messageView.textContent = `message is "${message}"`;

