// Create App wrapper
const app = document.createElement("div");
app.classList.add("app");
document.body.append(app);

const header = document.createElement("header");
header.classList.add("header");
app.append(header);

const textarea = document.createElement("textarea");
textarea.classList.add("textarea");
header.append(textarea);

const keyboard = document.createElement("main");
keyboard.classList.add("keyboard");
app.append(keyboard);